import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MdSend } from 'react-icons/md'
import ImageGrid from '@/components/ImageGrid';

export default function Home() {
  return (
    <main>
      <p className="text-3xl p-8">Ink Vision</p>
      <div className="flex min-h-screen flex-col items-center p-24 text-white">
        <div className="flex flex-row items-end justify-between w-full max-w-md mb-8">
          <Input
            placeholder="Describe your tattoo"
            className="flex-grow p-2 rounded-md"
          />
          <Button>
            <MdSend />
          </Button>
        </div>
        <ImageGrid />
      </div>
    </main>
  );
}
