import React from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
   firstName: yup.string().required("Enter your first name"),
   lastName: yup.string().required("Enter your last name"),
   email: yup.string().email().required("Enter your email address"),
   password: yup.string().required("Enter your password").min(6).max(12),
   age: yup.number().positive().integer().required("Enter your age").min(18).max(150),
   gender: yup.string().required("Select your gender"),
}).required();


const Yup = () => {

   const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
   });
   const onSubmit = data => console.log(data);

   return (
      <>

         <section>
            <div className="container">
               <div className="form_div">
                  <h1>Registration Form</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input
                           {...register("firstName")}
                           type="text"
                        />
                        <p style={{ color: 'red', }}>{errors?.firstName?.message}</p>
                     </div>

                     <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input
                           {...register("lastName")}
                           type="text"
                        />
                        <p style={{ color: 'red', }}>{errors?.lastName?.message}</p>
                     </div>

                     <div>
                        <label htmlFor="email">Email: </label>
                        <input
                           {...register("email")}
                           type="email"
                        />
                        <p style={{ color: 'red', }}>{errors?.email?.message}</p>
                     </div>

                     <div>
                        <label htmlFor="password">Password: </label>
                        <input
                           {...register("password")}
                           type="password"
                        />
                        <p style={{ color: 'red', }}>{errors?.password?.message}</p>
                     </div>

                     <div>
                        <label htmlFor="age">Age: </label>
                        <input
                           {...register("age")}
                           type="number"
                        />
                        <p style={{ color: 'red', }}>{errors?.age?.message}</p>
                     </div>

                     <div>
                        <select {...register("gender")}>
                           <option value="" selected disabled>
                              Select option
                           </option>
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>
                           <option value="Others">Others</option>
                        </select>
                        <p style={{ color: 'red' }}>{errors?.gender?.message}</p>
                     </div>

                     <div className='button_div'>
                        <input type="submit" value="Submit" />
                     </div>
                  </form>
               </div>
            </div>
         </section>

      </>
   )
}

export default Yup