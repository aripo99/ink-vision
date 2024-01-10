import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface ImageWithPrompt {
    src: string
    prompt: string
}

const images: ImageWithPrompt[] = [
    {
        src: "/images/freedom.png",
        prompt: "Minimalist and signifies freedom",
    },
    {
        src: "/images/butterfly.png",
        prompt: "A small minimalist butterfly in the shoulder",
    },
    {
        src: "/images/snake.png",
        prompt: "Snake in an artistic way showcasing its texture in the back",
    },
    {
        src: "/images/world.png",
        prompt: "A minimalist world with a brain",
    },
    {
        src: "/images/mountain.png",
        prompt: "A minimalist, yet powerful tattoo of a mountain. It should convey a sense of enduring strength and stability",
    },
    {
        src: "/images/yingyang.png",
        prompt: "Yin and Yang symbol, perfectly balanced, with a modern artistic twist to represent harmony and balance in life"
    }
]

const ImageGrid = () => {
    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                images.map((image) => (
                    <Card key={image.prompt}>
                        <CardHeader>
                            <CardTitle>{image.prompt}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={image.src}
                                alt={image.prompt}
                                width={500}
                                height={500}
                            />
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
}

export default ImageGrid