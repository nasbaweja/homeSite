import React, { useState, useEffect, Profiler } from "react";
import {Card, Button, ListGroup} from "react-bootstrap";
import { Link } from "react-router-dom";


const Leadership = ({ heading, message, img, imageSize }) => {
	
  return (
    <div
      id="projects"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="row">
				{message.map((value, index) => {
					return (
				<div className="col-md-4 d-flex align-items-stretch">
					<Card 
						bg="Light"
						style={{ width: '18rem' }}
						className="mb-2"
						>
					  <Card.Img variant="top" src={value.image} />
					  <Card.Body className="d-flex flex-column">
						<Card.Title>{value.title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">{value.year}</Card.Subtitle>
						<Card.Subtitle className="mb-2 text-muted">{value.type}</Card.Subtitle>
						 <ListGroup variant="flush">
							 {
								 value.information.map((info, index)=>{
									 return <ListGroup.Item>{info}</ListGroup.Item>
								 }					  
								)
							 }
						 </ListGroup>
						{value.link!=null?<Button href={value.link} className="mt-auto">View Paper</Button>:null}
						  
					  </Card.Body>
					</Card>
				</div>
					)
				})}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
