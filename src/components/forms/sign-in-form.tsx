import { z } from 'zod';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from '../input-field';

const schema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invali email" }),
  password: z.string().min(1, { message: "Passowrd is required" }).min(8, { message: "Password must have 8 characters" })
});

const SignInForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    console.log(values);;
  };

  return (
    <div className='register-form-container'>
      <div className='register-form-form-container'>
        <div className='register-form-title-container'>
          <span className='register-form-create-title'>Login</span> <br />
          <span className='register-form-create-description'>Login with your email address</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input-field-container'>
          <InputField
                placeholer='Email'
                name='email'
                register={register}
                error={errors?.email}
              />
              <InputField
                placeholer='Password'
                name='password'
                type='password'
                register={register}
                error={errors?.password}
              />
          </div>
          <div className='register-form-button-container'>
            <button className='register-form-create-button' type='submit'>Login</button>
            <Link to="/register" className='register-form-login-button'>Sign Up</Link>
         </div>
        </form>
      </div>
    </div>
  )
}

export default SignInForm