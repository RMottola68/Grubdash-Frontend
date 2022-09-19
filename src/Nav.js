import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import GrubDashLogo from './assets/GrubDashLogo.png'
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Navbar } from 'react-bootstrap';


function Navigation() {


    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    return(
        
        <Navbar className="p-0 m-0" fixed="top">
            <Row className="p-0 m-0" style={{borderBottom:"solid black 2px",background:"rgb(255,165,0)", width: "100%"}}>
                <Nav 
                
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Col>
                        <Nav.Item className="p-3 justify-content-left">
                            <img src={GrubDashLogo} style={{width:140, height: 'auto'}} />
                        </Nav.Item>
                    </Col>

                    <Col className="ms-auto align-items-center" style={{color:"white"}}>
                        <Nav.Item className="">
                            <h2 className="pt-5 d-flex justify-content-center">GrubDash</h2>
                            <div className="d-flex justify-content-center">
                                <Button className="m-3 " variant="danger" type="button">
                                    <Link className="text-decoration-none  text-white" to="/myorder">My Order</Link>
                                </Button>
                            
                                <Button className="m-3 " variant="danger">
                                    <Link  className="text-decoration-none  text-white" to="/restaurants">Restaurants</Link>
                                </Button>

                                <Button className="m-3 " variant="danger" type="button">
                                    <Link className="text-decoration-none  text-white" to="/ourstory">Our Story</Link>
                                </Button>
                            </div>
                        </Nav.Item>
                    </Col>
                    <Col></Col>
                    
                </Nav>
                <Button style={{display: visible ? 'inline' : 'none', position:"fixed",background:"rgb(50,50,50)",width:"fit-content",height:"fit-content",left:"90%",bottom:"40px",fontSize:"10px",zIndex:"99",cursor:"pointer", color:"red",border:"red"}}>
                <span className="material-symbols-outlined" onClick={scrollToTop} style={{height:"fit-content"}}>arrow_upward</span>
                </Button>
            </Row>
        </Navbar >
        
        
  
    )
}



export default Navigation;