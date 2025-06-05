'use client';

import { useColorStore } from '@/stores/useColorStore';
import { cn } from '@/utils';
import { ButtonHTMLAttributes } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: Size;
  variant?: Variant;
}

const sizeStyles: Record<Size, string> = {
  xs: 'min-w-18.25 h-12',
  sm: 'min-w-41.5 h-12',
  md: 'min-w-45.75',
  lg: 'min-w-58',
  xl: 'min-w-109.5',
  xxl: 'min-w-118',
};

const variantStyles: Record<Variant, string> = {
  primary: 'text-lg',
  secondary:
    'text-base/5 text-white bg-black hover:opacity-75 focus:opacity-75 transition-opacity',
  ghost: 'text-base/5 hover:opacity-75 focus:opacity-75 transition-opacity',
};

const Button = ({
  children,
  className,
  size = 'md',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const { bgFirst, hoverBg, focusBg } = useColorStore(state => state.colors);

  return (
    <button
      className={cn(
        variant === 'primary'
          ? `h-15 rounded-xl font-bold flex ${bgFirst} ${hoverBg} ${focusBg} justify-center items-center transition-colors duration-250`
          : 'h-15 rounded-xl font-bold flex justify-center items-center transition-colors duration-250',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
