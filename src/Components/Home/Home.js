import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService'

const Home = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch("./home.JSON")
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])

    const titleStyle = {
        textAlign : "center",
        color : "orange",
        margin : "20px 0"
    }
    return (
        <div>
            <h1 style={titleStyle}>Learn Programming With Fun</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    datas.map(data => <HomeService
                         key ={data.id}
                         data ={data}></HomeService>)
                }
            </Row>
        </div>
    );
};

export default Home;