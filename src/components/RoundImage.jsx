import React from 'react';
import "../css/roundImage.css";

import myimg from "../img/mypic.jpg"

function RoundImage() {
  return (
    <div>
        <img src={myimg} alt = "this is me" className = "round-image"/>
    </div>
  )
}

export default RoundImage;




// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';

// function RoundImage() {
//   return (
//     <Container>
//       <Row>
//         <Col xs={6} md={4}>
//           <Image src="../img/mypic.jpg" roundedCircle />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default RoundImage;