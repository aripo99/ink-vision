'use client';

import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Page() {
    const searchParams = useSearchParams();
    const imageUrl = searchParams.get('image');
    const prompt = searchParams.get('prompt');

    if (!imageUrl) {
        // Handle the case when image URL is not provided
        return <div>No image URL provided.</div>;
    }

    return (
        <>
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
                <Link href="/">
                    <Button className="m-12">
                        Create a new tattoo
                    </Button>
                </Link>
            </div>
        </>
    );
}