import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceData from '../ServiceData/ServiceData';

const Servich = () => {
    const [servicedatas, setServicedatas] = useState([])

    useEffect(() => {
        fetch('./servicedata.JSON')
        .then(res => res.json())
        .then(data => setServicedatas(data))
    },[])
    return (
        <div>
             <Row xs={1} md={3} className="g-4">
                 {
                     servicedatas.map(servicedata => <ServiceData
                         key ={servicedata.id}
                         servicedata = {servicedata}></ServiceData>)
                 }
             </Row>
        </div>
    );
};

export default Servich;