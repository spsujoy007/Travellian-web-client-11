import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseTitleHook from "../UseTitleHook/UseTitleHook";
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Service added');

const AddNewService = () => {
    UseTitleHook('Add Service');
    const {user} = useContext(AuthContext)

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
        const price = form.price.value;
        // console.log(title, img, description, price);

        const addService = { 
            title: title,
            img: img,
            description: description,
            price: price
        }

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            notify()
            form.reset()
        })
        .catch(err => console.log(err))
    }


  return (
    <div>
        <div>
            <h1 className="text-3xl uppercase mt-6 py-4 text-dark font-semibold">add a new <span className="text-primary">service</span></h1> <hr />
        </div>
      <div className="my-7">
      <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name='title' type="text" placeholder="Title" className="input input-bordered w-full border border-5 border-primary" required/>

                    <input name='img' type="text" placeholder="image url" className="input input-bordered w-full border border-5 border-primary" required/>

                </div>
                    <textarea required name='description' style={{height: '140px'}} className="textarea textarea-bordered w-full mt-5 border border-5 border-primary" placeholder="description about service"></textarea>
                    
                    <div className="flex justify-start">
                    <input name='price' type="number" placeholder="price" className="input input-bordered w-60 border border-5 border-primary" required/>
                    </div>

                    <div className="flex justify-end">
                        <input type="submit" className='btn bg-primary border-0 w-full md:w-36   my-10' value="Click to add" />
                    </div>
        </form>
        <Toaster></Toaster>
      </div>
      
    </div>
  );
};

export default AddNewService;
