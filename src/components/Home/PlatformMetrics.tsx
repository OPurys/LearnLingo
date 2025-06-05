'use client';

import { useColorStore } from '@/stores/useColorStore';

const platformMetrics = [
  { value: '32,000', label: 'Experienced tutors' },
  { value: '300,000', label: '5-star tutor reviews' },
  { value: '120', label: 'Subjects taught' },
  { value: '200', label: 'Tutor nationalities' },
];

const PlatformMetrics = () => {
  const { borderClass } = useColorStore(state => state.colors);

  return (
    <section
      className={`${borderClass} py-10 max-w-328 max-h-29 mx-auto flex items-center`}
    >
      <h2 className="visually-hidden">PlatformMetrics</h2>
      <ul className="max-w-266.75 flex gap-x-25 mx-auto">
        {platformMetrics.map(({ value, label }) => (
          <li className="flex gap-x-4 tracking-tight" key={label}>
            <p className="text-[28px]/8 font-medium text-gray-900">
              {value}&nbsp;+
            </p>
            <p className="text-sm/4.5 text-textColor">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PlatformMetrics;
