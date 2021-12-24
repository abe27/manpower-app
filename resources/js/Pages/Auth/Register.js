import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Divider } from '@chakra-ui/react';

const Register = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('register'));
  };

  return (
    <Guest>
      <Head title="Register" />

      <ValidationErrors errors={errors} />

      <form onSubmit={submit}>
        <div class="grid gap-2 grid-cols-2">
          <div>
            <Label forInput="firstname" value="First Name" />

            <Input
              type="text"
              name="firstname"
              value={data.firstname}
              className="mt-1 block w-full"
              autoComplete="firstname"
              isFocused={true}
              handleChange={onHandleChange}
              required
            />
          </div>
          <div>
            <Label forInput="lastname" value="Last Name" />

            <Input
              type="text"
              name="lastname"
              value={data.lastname}
              className="mt-1 block w-full"
              autoComplete="lastname"
              isFocused={true}
              handleChange={onHandleChange}
              required
            />
          </div>
          <div className="col-span-2">
            <Label forInput="email" value="Email" />

            <Input
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="email"
              handleChange={onHandleChange}
              required
            />
          </div>
        </div>
        <Divider className="p-2" />
        <div className="mt-4">
          <Label forInput="username" value="User Name" />

          <Input
            type="text"
            name="username"
            value={data.username}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            handleChange={onHandleChange}
            required
          />
        </div>

        <div className="mt-4">
          <Label forInput="password" value="Password" />

          <Input
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            handleChange={onHandleChange}
            required
          />
        </div>

        <div className="mt-4">
          <Label forInput="password_confirmation" value="Confirm Password" />

          <Input
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            handleChange={onHandleChange}
            required
          />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
            Already registered?
          </Link>

          <Button className="ml-4 shadow hover:animate-pulse" processing={processing}>
            Register
          </Button>
        </div>
      </form>
    </Guest>
  );
}

export default Register;