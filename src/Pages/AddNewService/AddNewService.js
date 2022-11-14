import UseTitleHook from "../UseTitleHook/UseTitleHook";
import toast, { Toaster } from 'react-hot-toast';
import './AddNewService.css';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const notify = () => toast.success('Service added');

const AddNewService = () => {
    UseTitleHook('Add Service');
    const {user} = useContext(AuthContext)
const handleAddService = (event) => {
    const confirmation = window.confirm('Warning! Are you a developer? If you a developer so you can make this change.')
    
    if(user.emailVerified === true){
        if(confirmation){
            event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        let image = form.img.value.startsWith('https://');
        let img;
        if(image){
            img = form.img.value
        }
        else{
            alert('wrong image url')
            return
        }
        const description = form.description.value;
        const price = form.price.value;
        // console.log(title, img, description, price);
    
        const addService = { 
            title: title,
            img: img,
            description: description,
            price: price
        }
    
        fetch('https://travellian-server.vercel.app/services', {
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
    }
    else{
        alert("Your email is not verified")
    }
}


  return (
    <div>
        <div>
            <h1 className="text-3xl uppercase mt-6 py-2 text-dark font-semibold">add a new <span className="text-primary">service</span></h1> 
            <p className="pb-3"><span className="text-error warningTxt font-semibold">WARNING! </span> Should only developers can be change this!</p><hr/>
        </div>
      <div className="my-7">
      <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name='title' type="text" placeholder="Title" className="input input-bordered w-full border border-5 border-primary" required/>

                    <input name='img' type="text" placeholder="image link should be start with https://" className="input input-bordered w-full border border-5 border-primary" required/>

                </div>
                    <textarea required name='description' style={{height: '140px'}} className="textarea textarea-bordered w-full mt-5 border border-5 border-primary" placeholder="Please use minimum 100 characters"></textarea>
                    
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
