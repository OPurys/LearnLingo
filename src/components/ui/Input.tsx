'use client';

import { cn } from '@/utils';
import { ComponentProps } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

type InputProps<T extends FieldValues> = ComponentProps<'input'> & {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
};

const Input = <T extends FieldValues>({
  control,
  name,
  label,
  wrapperClassName,
  labelClassName,
  inputClassName,
  type = 'text',
  ...inputProps
}: InputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  const isRadio = type === 'radio';

  return (
    <div className={cn('mb-4.5', wrapperClassName)}>
      <label
        className={cn(
          'relative text-base/5.5 flex items-center',
          labelClassName
        )}
      >
        <input
          className={cn(
            isRadio
              ? 'peer hidden'
              : 'pl-4.5 h-13.5 w-full rounded-xl border border-solid border-[rgba(18,20,23,0.1)] focus:border-yellow transition-colors duration-250',
            inputClassName
          )}
          type={type}
          name={field.name}
          value={inputProps.value}
          checked={isRadio ? field.value === inputProps.value : undefined}
          onChange={field.onChange}
          onBlur={field.onBlur}
          placeholder={inputProps.placeholder}
          ref={field.ref}
        />
        {isRadio && (
          <div className="mr-2 rounded-full border-2 border-blackLight w-5 h-5 peer-checked:border-yellow" />
        )}
        {isRadio && (
          <div className="absolute left-1.25 w-2.5 h-2.5 rounded-full bg-yellow opacity-0 peer-checked:opacity-100" />
        )}
        {label && <span>{label}</span>}
      </label>
      {error && (
        <p className="mt-1 text-sm text-coral">{error.message?.toString()}</p>
      )}
    </div>
  );
};

export default Input;
