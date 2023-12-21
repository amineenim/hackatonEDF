import React, { useState } from 'react';
import '../styles/HomePage.css';
import {useForm} from 'react-hook-form';


function HomePage() {
    // states that store data on the form 

    const {register, handleSubmit, formState :{errors}} = useForm();

    const onSubmit = (data) => {
        console.log('submitted form');
        console.log(data);
    }

    return (
        <div className="form-container">
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder='your username'
                {...register("username",{required : true, maxLength : 15, minLength : 3})}
                aria-invalid = {errors.username ? true : false}
              />
              {errors.username?.type === "required" && (
                <p className='error-message'>Username est requis</p>
              )}
              {errors.username?.type === "maxLength" && (
                <p className='error-message'>Username ne peut pas depasser 15 caracteres</p>
              )}
              {
                errors.username?.type === "minLength" && (
                    <p className='error-message'>Username doit au moins avoir 3 caracters</p>
                )
              }
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder='your password'
                {...register("password", {required : true})}
                aria-invalid = {errors.password ? true : false }
              />
              {errors.password?.type === "required" && (
                <p className='error-message'>Password est requis</p>
              )}
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="hasAccount"
                name="hasAccount"
                {...register("hasAccount")}
              />
              <label htmlFor="hasAccount">Already have an account?</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default HomePage