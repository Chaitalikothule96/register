import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // You can perform additional actions here, such as sending the form data to an API
    alert('Registration successful!');
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input {...register('username', { required: true })} />
          {errors.username && <span>Username is required</span>}
        </div>

        <div>
          <label>Phone Number</label>
          <input {...register('phoneNumber', { required: true, pattern: /^[0-9]{10}$/ })} />
          {errors.phoneNumber && <span>Invalid phone number</span>}
        </div>

        <div>
          <label>Email</label>
          <input {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
          {errors.email && <span>Invalid email address</span>}
        </div>

        <div>
          <label>Password</label>
          <input {...register('password', { required: true, minLength: 6 })} type="password" />
          {errors.password && <span>Password must be at least 6 characters</span>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input {...register('confirmPassword', { required: true, validate: (value) => value === watch('password') })} type="password" />
          {errors.confirmPassword && <span>Passwords do not match</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;

