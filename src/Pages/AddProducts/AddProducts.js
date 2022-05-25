import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const { register, formState: { errors, reset}, handleSubmit } = useForm();

    // image hosting 
    const imageStoreKey= '42cf770d9b1bfb17d55726fdd1a62aa9';



    const onSubmit = async data => {
        
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
        fetch(url , {
            method:"POST",
            body:formData
        })
        .then(res => res.json())
        .then(result => {

            if(result.success){
                const img = result.data.url

                const addproduct = {
                    name: data.name,
                    email: data.email,
                    price:data.price,
                    availableQuantity:data.availableQuantity,
                    orderquantity:data.oderquantity,
                    image:img

                }
                fetch('http://localhost:5000/service',{
                    method:"POST",
                    headers:{
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(addproduct)
                })
                .then(res => res.json())
                .then(inserted => {
                    console.log('addProduct',inserted)
                    toast.success('success fully add')
                    reset()

                })
            }
            

        })        
       //  navigate('/purchase')
    }

    


    return (
        <div>
            

            <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-primary text-4xl text-center font-bold '>add a products</h1>


                            <label class="label mt-10">
                                <span class="label-text"> Name</span>
                            </label>
                            <input name='name'  {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                },
                               
                            })}
                                type="text" placeholder="Type here"
                                class="input input-bordered w-full max-w-xs" />

                            <label>
                                {errors.name?.type === 'required' && <span className=' text-red-700'>{errors.name.message}</span>}
                            </label>


                            <label class="label mt-6">
                                <span class="label-text"> Email</span>
                            </label>
                            <input name='email'  {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'provide is valid email' // JS only: <p>error message</p> TS only support string
                                }
                            })}
                                type="email" placeholder="Type here"
                                class="input input-bordered w-full max-w-xs" />

                            <label>
                                {errors.email?.type === 'required' && <span className=' text-red-700'>{errors.email.message}</span>}
                            </label>

                            <label class="label mt-10">
                                <span class="label-text"> price</span>
                            </label>
                            <input name='price'  {...register("price", {
                                required: {
                                    value: true,
                                    message: 'price is required'
                                },
                               
                            })}
                                type="text" placeholder="Type here"
                                class="input input-bordered w-full max-w-xs" />

                            <label>
                                {errors.price?.type === 'required' && <span className=' text-red-700'>{errors.price.message}</span>}
                            </label>

                            <label class="label mt-10">
                                <span class="label-text"> availableQuantity</span>
                            </label>
                            <input name='availableQuantity'  {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'availableQuantity is required'
                                },
                               
                            })}
                                type="text" placeholder="Type here"
                                class="input input-bordered w-full max-w-xs" />

                            <label>
                                {errors.availableQuantity?.type === 'required' && <span className=' text-red-700'>{errors.availableQuantity.message}</span>}
                            </label>


                            <label>
                                {errors.availableQuantity?.type === 'required' && <span className=' text-red-700'>{errors.availableQuantity.message}</span>}
                            </label>

                            <label class="label mt-10">
                                <span class="label-text">  oderquantity</span>
                            </label>
                            <input name='oderquantity'  {...register("oderquantity", {
                                required: {
                                    value: true,
                                    message: 'order quantity is required'
                                },
                               
                            })}
                                type="text" placeholder="Type here"
                                class="input input-bordered w-full max-w-xs" />

                            <label>
                                {errors.oderquantity?.type === 'required' && <span className=' text-red-700'>{errors.oderquantity.message}</span>}
                            </label>


                            <label class="label mt-10">
                                <span class="label-text"> Photo</span>
                            </label>
                            <input name='img'  {...register("img", {
                                required: {
                                    value: true,
                                    message: 'img is required'
                                },
                               
                            })}
                                type="file" placeholder="Type here"
                                class="input input-bordered w-full max-w-xs" />

                            <label>
                                {errors.name?.type === 'required' && <span className=' text-red-700'>{errors.name.message}</span>}
                            </label>







                           









                                

                            <input  type="submit" class="btn btn-primary text-white w-full max-w-xs mt-10" value="Add Product" />



                        </form>
        </div>
    );
};

export default AddProducts;