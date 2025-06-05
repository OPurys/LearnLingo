'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { useShowPassword } from '@/hooks';
import { LoginFormData, loginFormSchema } from '@/validation';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = () => {
  const [show, toggleShow] = useShowPassword();

  const { handleSubmit, control, reset } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = data => {
    reset();
  };

  return (
    <div>
      <h2 className="mb-5 font-medium text-[40px]/12 tracking-tight">Log In</h2>
      <p className="mb-10 max-w-109.5 text-base/5.5 text-textColor">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="email" placeholder="Email" />
        <div className="mb-10 relative">
          <Input
            control={control}
            name="password"
            type={show ? 'text' : 'password'}
            placeholder="Password"
          />
          <button
            className="absolute top-4.25 right-4.5"
            type="button"
            onClick={toggleShow}
          >
            <Icon
              className="fill-none stroke-black"
              id={show ? 'icon-eye' : 'icon-eye-slash'}
              w={20}
              h={20}
            />
          </button>
        </div>
        <Button type="submit" size="xl">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
