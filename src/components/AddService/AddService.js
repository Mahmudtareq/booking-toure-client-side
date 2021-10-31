import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';

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
        <div className="add-service">
            <h2>Please Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url"/>
                <input className="bg-primary" type="submit" />
            </form>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>    
    );
};

export default AddService;