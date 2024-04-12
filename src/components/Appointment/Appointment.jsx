import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import "./Appointment.css"
import React, { useState, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function () {
    const navigate = useNavigate();
    const sendToBook = () => {
        // window.location.reload();
        navigate("/booking")
        // alert
    }
     const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "doc.jpg",
        "doc2.jpg",
        "doc3.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
           <div className="appoint">
            {slides.map((slide, index) => (
                <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                    <img className="doc" src={slide} alt={`Doctor ${index + 1}`} />
                </div>
            ))}
            <div className="booking">
                <div className="con">Make an Appointment with our experts and get the best consultation</div>
                <Button className="booking-button" onClick={() => sendToBook()} >
                    BOOK AN APPOINTMENT <AddCircleIcon />
                </Button>
            </div>
        </div>

        </>
    );
};