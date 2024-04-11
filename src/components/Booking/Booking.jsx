import React from 'react';
import './Booking.css'
import { useNavigate } from 'react-router-dom';
const BookingPage = () => {
    const doctors = [
        { id: 1, name: 'Dr. John Doe' , description:"Cardiologist"},
        { id: 2, name: 'Dr. Jane Smith', description:"Neurologist"},
        { id: 3, name: 'Dr. Michael Brown', description:"Nephrologist"},
        { id: 4, name: 'Dr. Sarah Johnson', description:"Geriatrician"},
        { id: 5, name: 'Dr. David Lee', description:"Opthalmologist"},
        { id: 6, name: 'Dr. Emily Wang',description:"Gynecologist"},
        { id: 7, name: 'Dr. William Deep' , description:"ENT Specialist"},
        { id: 8, name: 'Dr. Himanshu Jaiswal', description:"Pediatrician"},
        { id: 9, name: 'Dr. Harvey Dent', description:"General Medicine"},
        { id: 10, name: 'Dr. Panos Liantis', description:"Dermatologist"},
    ];
    const navigate = useNavigate();
    const sendToCalling =(id)=>{
        navigate(`/booking/consult${id}`)
    }
    return (
        <>       
        <div className="container">
            <div className="grid">
            <div className="patient">
              <img src="patient.jpg" className="banner"></img>
            </div>
                {doctors.map(doctor => (
                    <div key={doctor.id} className="doctor">
                        <img src={`doctor${doctor.id}.jpg`} alt={doctor.name} className="doctor-image" />
                        <div className="doctor-name">{doctor.name}</div>
                        <div className="doctor-description">{doctor.description}</div>
                        <button className="book-button"
                        onClick={()=>{sendToCalling(doctor.id)}}>Book Now</button>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default BookingPage;
