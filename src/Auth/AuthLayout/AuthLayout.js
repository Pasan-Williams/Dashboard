import React from "react";
import { Container } from "react-bootstrap";
import '../../Auth/Auth.css';
import { Row, Col, Image} from "react-bootstrap";

export default function AuthLayout(props){
    const {children, layoutImage} = props;
 return(
     <div className="authLayoutWrapper">
         <Container fluid>
         <Row style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap-reverse"}}>
                 <Col md={6}>
                 {children}
                 </Col>
                 <Col md={6}>
                 <Image src={layoutImage} style={{width:"500px" ,height:"500px"}}/>
                 </Col>
         </Row>
         </Container>
     </div>
 );
} 