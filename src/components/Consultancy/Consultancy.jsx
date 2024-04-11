import React from 'react'
import './Consultancy.css'
import { useNavigate, useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
export default function Consultancy() {
    const { consultID } = useParams();
    const handlePopstate = () => {
        window.location.reload();
    };
    window.addEventListener('popstate', handlePopstate);

    const navigate = useNavigate();

    const handleExitMeeting = () => {
        navigate('/');
        window.location.reload();
    }
    const myMeeting = (element) => {
        const appID = 123456789;
        const serverSecret = "SERVER_SECRET";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, consultID, Date.now().toString(),"Enter Your Name")
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            onLeaveRoom: () => { handleExitMeeting },
            maxUsers: 2
        })
    }
    return (
        <div className="box">
           <div class="pack">
            <img className="video" src="/video.png"></img>
            <div className="meet" ref={myMeeting} />
            </div>
        </div>
    )
}