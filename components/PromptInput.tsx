"use client";

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MdSend } from 'react-icons/md'
import { useState } from 'react';

const PromptInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: inputValue }),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            // Assuming you want to do something with the response:
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Failed to submit prompt', error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-row items-end justify-between w-full max-w-md mb-8">
            <Input
                placeholder="Describe your tattoo"
                className="flex-grow p-2 rounded-md"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit">
                <MdSend />
            </Button>
        </form>
    )
}

export default PromptInput;