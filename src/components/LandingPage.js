import './LandingPage.css';
import {useNavigate} from 'react-router-dom';
import EventImage from '../images/Landing_page_image.svg'

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className='landingPage-container'>
            <div className='header'>
                <div className='title'>
                    Imagine if <br></br><span className='snapchat'>Snapchat</span><br></br> had events.
                </div>
                <div className='sub-title'>
                    Easily host and share events with your friends across any social media.
                </div>
            </div>
            <div className='event-img'>
                <img src={EventImage} alt="event-snapchat"/>
            </div>
            <div className='btn-container' onClick={()=>{
                navigate('/create');
            }}>
                <div className='txt'>
                    🎉 Create my event
                </div>
            </div>
        </div>
    )
}

export default LandingPage;