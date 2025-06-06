import Hero from '@/components/Home/Hero';
import PlatformMetrics from '@/components/Home/PlatformMetrics';

export default function Home() {
  return (
    <main className="pt-5 pb-8 px-16">
      <Hero />
      <PlatformMetrics />
    </main>
  );
}
