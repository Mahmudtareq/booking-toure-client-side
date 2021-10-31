import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';
// import about3 from '../../image/about/about3.png';
import about3 from '../../image/home/about3.png';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://arcane-atoll-13935.herokuapp.com/services',data)
        .then(res=> {
            if(res.data.insertedId){
                alert('Added Successfully!')
                reset();
            }
            
        })
    }
    return (
    <div> 
        <div>
            <MenuBar></MenuBar>
        </div>
        <div className="add-service container my-5">
            <h2 className="text-primary mb-4  mt-5">Please Add a New service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url"/>
                <input className="bg-primary" type="submit" />
            </form>
        </div>
        <div className=" container my-5">
            <div className="row">
                <div className="col-lg-6">
                    <img className="img-fluid" src={ about3} alt="" />

                </div>
                <div className="col-lg-6">
                    <h2 className="text-start my-4">Dare to Explore with 
                        <br />
                        Tevily Agency</h2>
                    <h5 className="text-start text-primary mb-3">A Simply Perfect Place to Get Lost</h5>   
                    <p className="text-start">We are trusted by our clients and have a reputation for the best services in the field. Lorem ipsum is simply free text dolor sit amett consectetur adipiscing elit.We are trusted by our clients and have a reputation for the best services in the field.</p> 
                    <p className="text-start mt-3">
                        <button className="btn btn-dark">Book With Us Now</button>
                        </p>

                </div>
            </div>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>    
    );
};

export default AddService;