import React from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');

const AddedNewService = () => {

    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{

            axios.post('http://localhost:5000/addnew',data)
            .then(res=>{
            console.log(res);
        })
        
    reset();
  }
   
    return (
        <div>
            <div  className="mx-auto">
                <h1 className="bg-warning my-5 py-4 px-3 rounded-pill text-black fs-1 gw-bolder w-50 mx-auto">Added A New Service Form</h1>
            <form className="w-100 my-5" onSubmit={handleSubmit(onSubmit)}>




                    <input placeholder="Enter Your Service Title" className="w-75 py-2 mb-2 " {...register("title")} required />
                    <br/>
                    <input placeholder="Enter Your Service Address" className="w-75 py-2 mb-2" {...register("address")} required />
                    <br/>
                    <input placeholder="Enter Your Service Image URL.." className="w-75 py-2 mb-2" {...register("img")}  required/>
                    <br/>
                    <input placeholder="Enter Your Service Price" className="w-75 py-2 mb-2" type="number" {...register("price")} required/>
                    <textarea placeholder="Enter Your Service Description" className="w-75 py-2 mb-2" {...register("description")} required/>
                    <br/>
                    <br/>
                    <input className="btn-lg btn-primary px-4 py-2" type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddedNewService;




// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });