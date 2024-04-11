import "./departments.css"
export default function(){
    const services = [
        { id: 1,  description:"Cardiology"},
        { id: 2,  description:"Neurology"},
        { id: 3,  description:"Nephrology"},
        { id: 4,  description:"General Medicine"},
        { id: 5,  description:"Opthalmology"},
        { id: 6,  description:"Gynecology"},
        { id: 7,  description:"ENT"},
        { id: 8,  description:"Pediatrician"},
        { id: 9,  description:"Dermatology"},
        { id: 10, description:"Radiology"},
        { id: 11,  description:"Endocrinology"},
        { id: 12, description:"Geriatology"},
    ];
    return (
        <>
        <div className="contain">
             <div className="heading">Our Services</div>
             <div className="service-grid">
              {services.map(service => (
                    <div key={service.id} className="service">
                        <img src={`service${service.id}.jpeg`} className="service-image"/>
                        <div className="service-description">{service.description}</div>
                    </div>
                ))}
               </div>
        </div>
        </>
    )
}