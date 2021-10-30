import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './ShowAllServices.css';

const ShowAllServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services/')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    const handleDelete = id=>{
        const url =`http://localhost:5000/services/${id}`;
        fetch(url,{
            method:"DELETE"
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.deletedCount >0){
                alert('Successfully Deleted')
                const  remaining = services.filter(service =>service._id !==id);
                setServices(remaining);
            }
        })
    }
    return (
        <div>
            <div>
                <MenuBar></MenuBar>
            </div>
            <h2 className="text-primary my-4">Show  All Services</h2>
            <div className="show-details container my-5">
            {
                services.map(service =><div
                key ={service._id}>
                <Card className="mb-3" style={{ width: '18rem'}}>
               <Card.Img variant="top" height="300" className=" " src={service.img} />
              <Card.Body>
                <Card.Title className="text-start">{service.name}</Card.Title>
                <Card.Title className="text-start"> <span className="text-primary">Price: <span className="text-danger">$</span> {service.price} </span> <span className="text-info"> Per Person</span></Card.Title>
                <Card.Text className="text-start">
                {service.description}
                </Card.Text>
                <button onClick={()=>handleDelete(service._id)} className="btn btn-info px-4">Delate</button>
            </Card.Body>
            </Card>
                   

                   
                    {/* <button className="btn btn-danger px-4" onClick={()=>handleDelete(service._id)}>Delete</button> */}
                </div>)
            }

            </div>
           
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ShowAllServices;