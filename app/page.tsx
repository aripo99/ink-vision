import PromptInput from '@/components/PromptInput';
import ImageGrid from '@/components/ImageGrid';

export default function Home() {
  return (
    <main>
      <p className="text-3xl p-8">Ink Vision</p>
      <p className="text-l ml-8">Coming soon...</p>
      <div className="flex min-h-screen flex-col items-center p-24 text-white">
        <PromptInput />
        <ImageGrid />
      </div>
    </main>
  );
}
