import React, { useEffect, useState } from 'react';
import OurService from '../OutService/OurService';
import './OurServices.css';
const OurServices = () => {
    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data=>setServices(data));

    },[])

    return (
        <div>
            <div className="mt-4">
            <h2>Our Most Popular Services </h2>
            </div>
            <div className="main-service container my-5">
           
                {
                    services.map(service =><OurService
                    key={service.name}
                    service = {service}
                    ></OurService>)
                }
            </div>
           
            
        </div>
    );
};

export default OurServices;