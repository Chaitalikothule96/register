import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import Form from 'react-bootstrap/Form';

const App = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // You can perform additional actions here, such as sending the form data to an API
    alert('Registration successful!');
  };

  return (
    <main className='container'>
      <div className='title'>
      <h1>Sign Up</h1>
      <div>Update your details</div>
      </div>
      
      <Form onSubmit={handleSubmit(onSubmit)} className='form'>
        <div className='form-group'>
          <div>
            <label>Username</label>
          </div>
          <div>
            <input {...register('username', { required: true })} placeholder='Enter Username'/>
            {errors.username && <span>Username is required</span>}
          </div>
          
        </div>

        <div className='form-group'>
          <div>
            <label>Phone Number</label>
          </div>
          <div>
            <input {...register('phoneNumber', { required: true, pattern: /^[0-9]{10}$/ })} placeholder='Enter phone number'/>
            {errors.phoneNumber && <span>Invalid phone number</span>}
          </div>
        </div>

        <div className='form-group'>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder='Enter Email-id'/>
            {errors.email && <span>Invalid email address</span>}
          </div> 
        </div>

        <div className='form-group'>
          <div>
            <label>Password</label>
          </div>
          <div>
            <input {...register('password', { required: true, minLength: 6 })} type="password" placeholder='Enter password'/>
            {errors.password && <span>Password must be at least 6 characters</span>}
          </div> 
        </div>

        <div className='form-group'>
          <div>
            <label>Confirm Password</label>
          </div>
          <div>
            <input {...register('confirmPassword', { required: true, validate: (value) => value === watch('password') })} type="password" placeholder='Enter Confirm Password' />
            {errors.confirmPassword && <span>Passwords do not match</span>}
          </div>
        </div>
        <div className='button'>
          <button type="submit" className='submit'>Sign-up</button>
        </div>
       
      </Form>
    </main>
  );
};

export default App;

