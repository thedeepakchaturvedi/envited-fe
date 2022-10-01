import './Event.css';
import eventImg from '../images/Birthday_cake.png';
import {ImCalendar} from "react-icons/im";
import {ImLocation} from "react-icons/im";

const Event = ({
    store,
}) => {
    return (
        <div className='final-event-container'>
            <div className='img'>
                 <img src={eventImg}></img>
            </div>
            <div className='text'>
                <div>
                    <div className='event-name'>
                        {store["eventName"]}
                    </div>
                    <div className='host-name'>
                        Hosted by {store["hostName"]}
                    </div>
                </div>
                <div className='time'>
                    <div className='logo'>
                        <ImCalendar style={{color:"#8456EC"}}/>
                    </div>
                    <div className='details'>
                        <div className='st'>{store["startTime"]}</div>
                        <div className='et'>to {store["endTime"]}</div>
                    </div>
                </div>
                <div className='location'>
                    <div className='logo'>
                        <ImLocation style={{color:"#8456EC"}}/>
                    </div>
                    <div className='details'>
                        <div className='heading'>Street Name</div>
                        <div className='lc'>{store["location"]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;