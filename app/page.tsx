import PromptInput from '@/components/PromptInput';
import ImageGrid from '@/components/ImageGrid';

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center p-24 text-white">
        <PromptInput />
        <ImageGrid />
      </div>
    </main>
  );
}
