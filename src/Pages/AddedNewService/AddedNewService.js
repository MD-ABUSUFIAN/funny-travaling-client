import React from 'react';
// const axios = require('axios');
import { useForm } from "react-hook-form";

const AddedNewService = () => {

    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
    
        // fetch('http://localhost:5000/services',{
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json'},
        //     body: JSON.stringify()

        // })


    return (
        <div>
            <div >
                <h1 className="bg-warning my-5 py-4 px-2 rounded-pill text-black fs-1 gw-bolder w-50 mx-auto">Added A New Service Form</h1>
            <form className="w-100 my-5" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter Your Service Title" className="w-75 py-2 mb-2" {...register("title", { required: true, maxLength: 20 })} />
                    <br/>
                    <input placeholder="Enter Your Service Address" className="w-75 py-2 mb-2" {...register("address")} />
                    <br/>
                    <input placeholder="Enter Your Service Image URL.." className="w-75 py-2 mb-2" {...register("img")} />
                    <br/>
                    <input placeholder="Enter Your Service Price" className="w-75 py-2 mb-2" type="number" {...register("price")} />
                    <input placeholder="Enter Your Service Description" className="w-75 py-2 mb-2" {...register("description")} />
                    <br/>
                    <br/>
                    <input type="submit" />
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