import React from "react";
import { useState,useEffect } from "react"
import { Container,Row,Col} from "react-bootstrap"
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import headerImg from "../assets/img/header-img2.png"
import '../styles/Banner.css';

export const Banner = () =>{
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ['DataScience Students','Deep Learning Enchanters','Machine Learning Maestros','Coding Commands'];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300-Math.random() * 100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => { clearInterval(ticker)};
    },[text])
    const tick = () => {
        let i = loopNum%toRotate.length;
        let fullText  = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);

        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id = 'home'>
            <Container>
                <Row className="banner-row">
                    <Col xs={12} md = {6} xl = {7}>
                        <span className='tagline'>Welcome to our DataRush Revolve</span>
                        <h1>{"Hi! We are "}<span className='wrap'>{text}</span></h1>
                        <p>This website is a hub displaying various capstone projects by data science students. </p>
                        <Link to="/ContactAll" className='contactAll-link'>
                        <button>
                            Let's Connect <FaArrowCircleRight size={25} />
                        </button>
                        </Link>                    
                    </Col>
                    <Col xs={12} md = {6} xl = {5}>
                        <img src = {headerImg} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}