import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseTitleHook from "../UseTitleHook/UseTitleHook";

const AddNewService = () => {
    const {user} = useContext(AuthContext)
    UseTitleHook('Add Service');

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
            alert('Product added')
        })
        .catch(err => console.log(err))
    }


  return (
    <div>
        <div>
            <h1 className="text-5xl uppercase mt-10 py-5 text-center text-primary font-semibold">add new service</h1> <hr />
        </div>
      <div className="my-7">
      <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name='title' type="text" placeholder="Title" className="input input-bordered w-full" required/>

                    <input name='img' type="text" placeholder="image url" className="input input-bordered w-full" required/>

                </div>
                    <textarea required name='description' className="textarea textarea-bordered w-full mt-5" placeholder="description"></textarea>
                    
                    <div className="flex justify-end">
                    <input name='price' type="number" placeholder="price" className="input input-bordered w-60 border border-5 border-primary" required/>
                    </div>

                    <input type="submit" className='btn bg-primary border-0 w-full my-10' value="Place order" />
        </form>
      </div>
      
    </div>
  );
};

export default AddNewService;
