import React, { useEffect, useState } from 'react';
import OurService from '../OutService/OurService';
import './OurServices.css';
const OurServices = () => {
    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('https://arcane-atoll-13935.herokuapp.com/services')
        .then(res =>res.json())
        .then(data=>setServices(data));

    },[])

    return (
        <div>
            <div className="mt-4">
            <h2 className="text-info my-5">Our Most Popular Tours </h2>
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