// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OurService = (props) => {
    const {name,img,description,price,_id} = props.service;
    
    return (
        <div>
            <div className="mb-4">
            <Card className="" style={{ width: '18rem'}}>
            <Card.Img variant="top" height="300" className="" src={img} />
            <Card.Body>
                <Card.Title className="text-start">{name}</Card.Title>
                <Card.Title className="text-start"> <span className="text-primary">Price: <span className="text-danger">$</span> {price} </span> <span className="text-info"> Per Person</span></Card.Title>
                <Card.Text className="text-start">
                {description}
                </Card.Text>
                <Link to={`/myOrder/${_id}`}>
                <Button variant="primary" >Booking Your Tour</Button>
                </Link>
               
            </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default OurService;