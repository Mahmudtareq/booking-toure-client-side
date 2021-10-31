import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";

const Myorder =()=>{
    const {user} = useAuth();
    const {serviceId} = useParams();
    const [service , setService] =useState({})
    useEffect(()=>{
        fetch(`https://arcane-atoll-13935.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])
    return(
    <div>
        <div>
            <MenuBar></MenuBar>
        </div>
        <div className="container my-5 ">
            <h2 className="text-primary mb-3">Tour Details </h2>
            <div className="row bg-light p-3">
                <div className="col-lg-6 col-12">
                <Card className="" style={{ width: '18rem'}}>
            <Card.Img variant="top" height="300" className="" src={service.img} />
            <Card.Body>
                <Card.Title className="text-start">{service.name}</Card.Title>
                <Card.Title className="text-start"> <span className="text-primary">Price: <span className="text-danger">$</span> {service.price} </span> <span className="text-info"> Per Person</span></Card.Title>
                <Card.Text className="text-start">
                {service.description}
                </Card.Text>
                <button className="btn btn-info px-4">Show Details</button>
            </Card.Body>
            </Card>


                   

                </div>
                <div className="col-lg-6 col-12">
                    <h2 className="text-primary mb-4">Book This Tour</h2>
                    <form>
                        <input className="form-control" type="text" id="" placeholder="Your Name" value={user.displayName} />
                        <br />
                        <input className="form-control" type="email" name="" id="" placeholder="Your Email" value={user.email}/>
                        <br />
                        <input className="form-control" type="text" name="" id="" placeholder="Your Phone" />
                        <br />
                        <input className="form-control" type="text" name="" id="" placeholder="Your Tickets" />
                        <br />
                        <input className="form-control" type="text" name="" id="" placeholder="Date" />
                        <br />
                        <textarea  className="form-control" name="" id="" cols="5" rows="3" placeholder="Write Message"></textarea>
                        <br />
                        <input className="form-control bg-info" type="submit" value="Book Your Tour" />
                    </form>
                </div>
            
            </div>
        </div>
        <div className="container my-5">
            <h2 className="mb-3">Over View Of This Tour</h2>
            <p className="text-start">  <span> {service.description}</span> Pahalgam is a hill station in the north Indian state of Jammu and Kashmir. Mountain trails run northeast to Amarnath Cave Temple, a Hindu shrine and site of the annual Amarnath Yatra pilgrimage. Overa Aru Wildlife Sanctuary is home to animals including brown bears and musk deer. Northeast, the Lidder River runs through scenic Betaab Valley. Southeast, Tulian Lake is flanked by mountain peaks and often frozen</p>

        </div>

        <Footer></Footer>
       
    </div>

    );

};
export default Myorder;