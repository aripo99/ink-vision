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
        src: "/images/freedom.png",
        prompt: "Minimalist and signifies freedom",
    },
    {
        src: "/images/freedom.png",
        prompt: "Minimalist and signifies freedom",
    },
    {
        src: "/images/freedom.png",
        prompt: "Minimalist and signifies freedom",
    },
    {
        src: "/images/freedom.png",
        prompt: "Minimalist and signifies freedom",
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