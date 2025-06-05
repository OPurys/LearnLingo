import Hero from '@/components/Home/Hero';
import PlatformMetrics from '@/components/Home/PlatformMetrics';
import TeacherCard from '@/components/TeachersList/TeacherCard';

export default function Home() {
  return (
    <div>
      <main className="pt-5 pb-8 px-16">
        <Hero />
        <PlatformMetrics />
        {/* <TeacherCard />
        <TeacherCard />
        <TeacherCard /> */}
      </main>
    </div>
  );
}
