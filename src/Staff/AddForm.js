// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";

// export const AddForm = (onAdd) => {
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");
//   const [description, setDescription] = useState("");

//   const AddTask=(task)=>{
//     console.log(task)
//   }
  
//   const onSubmit=(e)=>{
//     e.preventDefault()
//     if(!name){
//       alert('Please add one')
//       return
//     }
//     onAdd({name , date, description})
//     setName=("")
//     setDate=("")
//     setDescription=("")
//   }


//   return (
//     <Container fluid>
//       <Row
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "10%",
//         }}
//       >
//         <Col md={6}>
//           <Form onSubmit={onSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control placeholder="Enter Full Name" type="text" value={name} onChange={(e)=> setName(e.target.value)} />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Birth Date</Form.Label>
//               <Form.Control placeholder="Enter Birthday" type="text" value={date} onChange={(e)=> setDate(e.target.value)}/>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Description</Form.Label>
//               <Form.Control placeholder="Enter Job Description" type="text" value={description} onChange={(e)=> setDescription(e.target.value)}/>
//             </Form.Group>

//             <Button variant="dark" type="submit" >
//               Submit
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
