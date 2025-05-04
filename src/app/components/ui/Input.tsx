'use client';

import { cn } from '@/utils/cn';
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
          'pl-4.5 h-13.5 rounded-xl border border-solid border-[rgba(18,20,23,0.1)]',
          inputClassName
        )}
        {...field}
        {...inputProps}
      />
      {error && (
        <p className="mt-2 text-sm text-red-500">{error.message?.toString()}</p>
      )}
    </label>
  );
};

export default Input;
