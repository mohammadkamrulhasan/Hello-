import React from 'react';
import Chat from '../../Image/Chat.png';
import VideoCall from '../../Image/VideoCall.jpg';
import VideoConference from '../../Image/VideoConference.jpg';
import ServiceDetail from './ServiceDetails';


const serviceData = [
    {
        name: 'Chat',
        img: Chat
    },
    {
        name: 'Video Call',
        img: VideoCall
    },
    {
        name: 'Video Conference',
        img: VideoConference
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;