'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormData, registerFormSchema } from '@/validation';
import { useShowPassword } from '@/hooks';
import toast from 'react-hot-toast';

const RegisterForm = () => {
  const [show, toggleShow] = useShowPassword();

  const { handleSubmit, control, reset } = useForm<FormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    toast.success('Your account has been successfully registered');
    reset();
  };

  return (
    <div>
      <h2 className="font-medium text-[40px]/12 mb-5">Registration</h2>
      <p className="mb-10 max-w-109.5 text-base/5.5 text-textColor">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="name" placeholder="Name" />
        <Input control={control} name="email" placeholder="Email" />
        <div className="mb-10 relative">
          <Input
            control={control}
            name="password"
            type={show ? 'text' : 'password'}
            labelClassName="mb-0"
            placeholder="Password"
          />
          <button type="button" onClick={toggleShow}>
            <Icon
              className="absolute top-4.25 right-4.5 fill-none stroke-black"
              id={show ? 'icon-eye' : 'icon-eye-slash'}
              w={20}
              h={20}
            />
          </button>
        </div>
        <Button type="submit" size="xl">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
