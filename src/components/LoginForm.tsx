
import { useForm } from 'react-hook-form'
import {DevTool} from "@hookform/devtools"
const LoginForm = () => {
  const form = useForm<FormValues>();
  const { register, control , handleSubmit} = form
  
 type FormValues={
  username: string;
  email: string;
  password: string;

 };

 const onSubmit = (data:FormValues) =>{
  console.log("Form submitted",data)
 }

  return (
    <div>
          <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")}/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")}/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />

          <button type="submit" id="submitbtn">Submit</button>


            

            
        </form>
        <DevTool control={control}/>
      
    </div>
    
  )
}

export default LoginForm
