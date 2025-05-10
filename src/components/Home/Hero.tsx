import Link from 'next/link';
import Icon from '../ui/Icon';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="mb-6 grid md:grid-cols-[720px_568px] gap-6">
      <div className="px-16 py-24.5 rounded-[30px] bg-bgGrey">
        <h1 className="mb-8 font-medium text-5xl/14">
          Unlock your potential with the best{' '}
          <span className="font-normal italic">language</span> tutors
        </h1>
        <p className="max-w-117.75 mb-16 text-base/5.5">
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Link
          className="h-15 max-w-66.75 bg-yellow text-lg font-bold rounded-xl flex justify-center items-center transition-colors duration-250 hover:bg-secondary focus:bg-secondary"
          href="/teachers"
        >
          Get started
        </Link>
      </div>
      <div className="relative bg-lightYellow rounded-[30px] overflow-hidden">
        <Image
          className="absolute top-20 left-1/2 -translate-x-1/2 z-10"
          src="/teacher.png"
          alt="teacher"
          width={339}
          height={339}
        />
        <Icon
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
          id="icon-mac"
          w={359}
          h={180}
        />
      </div>
    </section>
  );
};

export default Hero;
