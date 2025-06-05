'use client';

import Link from 'next/link';
import Icon from '../ui/Icon';
import Image from 'next/image';
import { useColorStore } from '@/stores/useColorStore';

const Hero = () => {
  const { bgFirst, bgSecond, hoverBg, focusBg, fillFirst, fillSecond } =
    useColorStore(state => state.colors);

  return (
    <section className="mb-6 grid md:grid-cols-[720px_568px] gap-6 place-content-center">
      <div className="px-16 py-24.5 rounded-[30px] bg-bgGrey">
        <h1 className="mb-8 font-medium text-5xl/14 tracking-tight">
          Unlock your potential with the best{' '}
          <span
            className={`inline-block px-1.5 pb-1.5 font-normal italic ${bgSecond} rounded-[8px] text-5xl/9`}
          >
            language
          </span>{' '}
          tutors
        </h1>
        <p className="max-w-117.75 mb-16 text-base/5.5 tracking-tight">
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Link
          className={`h-15 max-w-66.75 ${bgFirst} text-lg font-bold rounded-xl flex justify-center items-center transition-colors duration-250 ${hoverBg} ${focusBg}`}
          href="/teachers"
        >
          Get started
        </Link>
      </div>
      <div className={`relative ${bgSecond} rounded-[30px] overflow-hidden`}>
        <Image
          className="absolute top-20 left-1/2 -translate-x-1/2 z-10"
          src="/teacher.png"
          alt="teacher"
          width={339}
          height={339}
        />
        <Icon
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-20 ${fillFirst}`}
          id="icon-mac"
          w={359}
          h={180}
        />
        <Icon
          className={`absolute bottom-13 left-1/2 -translate-x-1/2 z-30 ${fillSecond}`}
          id="icon-apple"
          w={47}
          h={57}
        />
      </div>
    </section>
  );
};

export default Hero;
