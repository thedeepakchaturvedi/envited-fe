import './CreateEvent.css'
import {useNavigate} from 'react-router-dom';
const CreateEvent = ({
    store,
    updateStore
}) => {
    const navigate = useNavigate();

    return (
        <div className='create-event-container'>
            <div className='heading'>
                CREATE EVENT
            </div>
            <div className='card'>
                <div className='event-name-container'>
                    <input type="text" placeholder='Event Name'
                        onChange={(e)=>updateStore("eventName", e.currentTarget.value)}
                        value={store["eventName"]}
                    ></input>
                </div>
                <div className='host-name-container'>
                    <input type="text" placeholder='Host Name'
                        onChange={(e)=>updateStore("hostName", e.currentTarget.value)}
                        value={store["hostName"]}
                    ></input>
                </div>
                <div className='start-time'>
                    <label htmlFor="start-time-container-id">Start Date/Time:</label>
                    <div id = "start-time-container-id" className='start-time-container'>
                        <input type="datetime-local"
                            onChange={(e)=>updateStore("startTime", e.currentTarget.value)}
                            value={store["startTime"]}
                        ></input>
                    </div>
                </div>
                <div className='end-time'>
                    <label htmlFor="end-time-container-id">End Date/Time:</label>
                    <div id = "end-time-container-id" className='end-time-container'>
                        <input type="datetime-local"
                            onChange={(e)=>updateStore("endTime", e.currentTarget.value)}
                            value={store["endTime"]}></input>
                    </div>
                </div>
                <div className='location-container'>
                    <input type="text" placeholder='Location'
                        onChange={(e)=>updateStore("location", e.currentTarget.value)}
                        value={store["location"]}
                    ></input>
                </div>
                <div className='event-photo-container'>
                    <label htmlFor="img">Select Event image:</label>
                    <input id="img"type="file" accept="image/*"
                        onChange={(e)=>updateStore("img", e.currentTarget.value)}
                        value={store["img"]}
                        ></input>
                </div>
                <div className='btn-container' onClick={()=>{
                        navigate('/event');
                }}>
                    <div className='txt'>
                        Next
                    </div>
            </div>
            </div>
        </div>
    )
}

export default CreateEvent;