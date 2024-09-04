import { z } from 'zod';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from '../input-field';
import "@/styles/register-form.scss";
import { Link } from 'react-router-dom';

const schema = z.object({
  fullName: z.string().min(3, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." })
});

const RegisterForm = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    console.log(values);
  };

  return (
    <div className='register-form-container'>
      <div className='register-form-form-container'>
        <div className='register-form-title-container'>
          <span className='register-form-create-title'>Create an account</span> <br />
          <span className='register-form-create-description'>Create your account today</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className='input-field-container'>
            <InputField
                placeholer='Full Name'
                name='fullName'
                register={register}
                error={errors?.fullName}
              />
              <InputField
                placeholer='Email'
                name='email'
                type='email'
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
            <button className='register-form-create-button' type='submit'>Create account</button>
            <Link to="/sign-in" className='register-form-login-button'>Login</Link>
         </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm