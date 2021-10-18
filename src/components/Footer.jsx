import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
         <div className="dark-blue-bg shadow-footer fixed-pos">
             <Row className="d-flex justify-content-lg-between p-4">
                 <Col lg={6}>
                     <div className="justify-content-lg-center justify-content-sm-center">
                        <h6 className="text-white mt-3 align-text">© 2021 TELUS International</h6>
                     </div>
                 </Col>
                 <Col lg={6}>
                     <div className="text-white d-flex justify-content-lg-end justify-center">
                        <div className="icon-style"><i className="fab fa-instagram fa-x p-2"></i></div>
                        <div className="icon-style"><i className="fab fa-twitter fa-x p-2"></i></div>
                        <div className="icon-style"><i className="fab fa-linkedin-in fa-x p-2"></i></div>
                     </div>
                 </Col>
             </Row>
         </div>
            
        </>
    )
}

export default Footer
