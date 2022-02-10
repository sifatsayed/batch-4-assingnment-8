import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../../images/banner.png'

const Blog = () => {
    const imageStyle = {
        width : "100%"
    }
    const cartStyle = {
        textAlign : "center",
    }
    return (
        <Card className="bg-dark text-white">
  <Card.Img style={imageStyle} src={image} alt="Card image" />
  <Card.ImgOverlay>
    <div  style={cartStyle}>
    <h2>See About Our More Blog</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, magni laudantium! Neque in explicabo sed ipsum tenetur laborum ad labore repellendus aliquam quae nihil nemo magnam esse exercitationem dolore recusandae fuga atque, unde sunt qui asperiores, rem iste, libero dolor? Veniam ex repellendus eum qui! Porro, aperiam nesciunt dolorem mollitia atque cupiditate earum optio cumque fugit provident praesentium ex assumenda illo itaque, ducimus voluptatem. Natus, quia maiores. Odit, nisi omnis libero delectus magnam eveniet consequuntur beatae iure itaque facere cupiditate ut hic adipisci vero, sint eos animi ipsa laborum? Deserunt nisi ratione eum nobis iusto debitis molestias aperiam in officiis.</p>
    </div>
  </Card.ImgOverlay>
</Card>
    );
};

export default Blog;