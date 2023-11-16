import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MdSend } from 'react-icons/md'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-white">
      <p> Ink Vision </p>
      <div className="flex flex-row items-end justify-between w-full max-w-md">
        <Input
          placeholder="Write your text here"
          className="flex-grow p-2 rounded-md"
        />
        <Button>
          <MdSend />
        </Button>
      </div>
    </main>
  );
}
