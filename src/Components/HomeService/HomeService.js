import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeService = (props) => {
    // console.log(props.data)

    const {title, image, description} = props.data ;
    const styleImage = {
        height : "400px",
        width : "400px",
        borderRadius : "20px"
    }

    const cartStyle = {
        padding : "50px",
        textAlign : "center",

    }
    return (
        <Col className='mt-5 mb-5'>
      <Card style={cartStyle}>
        <Card.Img  style={styleImage} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default HomeService;