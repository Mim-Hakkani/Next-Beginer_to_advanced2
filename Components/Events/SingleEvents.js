import moment from "moment";
import Image from "next/image";
import { Router, useRouter } from "next/router";


const SingleEvents = (props) => {
    const {id,image,title,date,description,location} =props.event

    const router = useRouter();
    return (
            <div className="row border border-primary p-2" >

                                <div className="col-md-4">
                                    <Image src={'/'+image} alt="" height={800} width={600} />
                                </div>
                                <div className="col-md-6 ">
                                    <div className="event-details">
                                        <div className="h3">{title}</div>
                                         <h5>{moment(date).format('ll')}</h5>
                                         <p>{description}</p>
                                         <address>
                                             {location}
                                         </address>
                                    <button 
                                    className="btn btn-info"
                                    onClick={()=>router.push(`/events/${id}`)}

                                    
                                    
                                    >
                                        Details
                                    </button>
                                       
                                    </div>
                                </div>
       
                                </div>
    );
};

export default SingleEvents;