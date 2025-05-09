'use client';

import { cn } from '@/utils';
import { ComponentProps } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

type InputProps<T extends FieldValues> = ComponentProps<'input'> & {
  control: Control<T>;
  name: Path<T>;
  labelClassName?: string;
  inputClassName?: string;
};

const Input = <T extends FieldValues>({
  control,
  name,
  labelClassName,
  inputClassName,
  ...inputProps
}: InputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return (
    <label className={cn('mb-4.5 block', labelClassName)}>
      <input
        className={cn(
          'pl-4.5 h-13.5 w-full rounded-xl border border-solid border-[rgba(18,20,23,0.1)] focus:border-yellow transition-colors duration-250',
          inputClassName
        )}
        {...field}
        {...inputProps}
      />
      {error && (
        <p className="mt-1 text-sm text-coral">{error.message?.toString()}</p>
      )}
    </label>
  );
};

export default Input;
