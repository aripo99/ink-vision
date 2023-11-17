'use client';

import { useSearchParams } from 'next/navigation'
import Image from 'next/image';

export default function Page() {
    const searchParams = useSearchParams();
    const imageUrl = searchParams.get('image');
    const prompt = "A prompt should go here";

    if (!imageUrl) {
        // Handle the case when image URL is not provided
        return <div>No image URL provided.</div>;
    }

    return (
        <div className='flex flex-col items-center p-24'>
            <h1 className='p-8'>
                {prompt}
            </h1>
            <Image
                src={imageUrl}
                alt="Generated from API"
                width={500}
                height={500}
            />
        </div>
    );
}