import OpenAI from 'openai';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const runtime = 'edge';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION,
});

const redis = Redis.fromEnv();
const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(5, '60 s'), // Limit to 5 requests per 60 seconds
});

const defaultPrompt = `Create a tattoo that follows the following Specification. The tattoo should be black and white. Specification: `;

export async function POST(req: Request) {
    const ip = req.headers.get('x-forwarded-for');

    const { success, limit, reset, remaining } = await ratelimit.limit(ip as string);

    if (!success) {
        return new Response('You have reached your request limit for the day.', {
            status: 429,
            headers: {
                'X-RateLimit-Limit': limit.toString(),
                'X-RateLimit-Remaining': remaining.toString(),
                'X-RateLimit-Reset': reset.toString(),
            },
        });
    }

    const body = await req.json();
    const prompt = defaultPrompt + body.prompt;

    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
    });

    if (!image) {
        throw new Error(`API error`);
    }

    return new Response(JSON.stringify(image.data), {
        status: 200,
    });
}