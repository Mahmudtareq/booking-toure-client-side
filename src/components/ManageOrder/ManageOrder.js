
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const ManageOrder = () => {
    const [services,setServices] = useState([]);
    const {user} = useAuth();
    
    // -------------------
    useEffect(()=>{
        fetch('https://arcane-atoll-13935.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    return (
        <div>
                <MenuBar></MenuBar>
            <div className="">
                <h2 className="text-primary my-5 fs-1">Order Details</h2>
            </div>
            <h3>Name  : {user.displayName}</h3>
            <h3>Email : {user.email}</h3>
        
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ManageOrder;