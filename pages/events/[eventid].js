import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import {DUMMY_EVENTS} from '../../Components/Events/Events'

const  EventDetailspage = () => {
 
    const router = useRouter();
    const {eventid} = router.query

    // console.log(eventid);
   const singledata = DUMMY_EVENTS.find(single_even=>single_even.id==eventid)
 

    return (
        <div className="container">
         <div className="row border border-primary p-2" >

<div className="col-md-4">
    <Image src={'/'+singledata?.image} alt="sss" height={300} width={300} />
</div>
<div className="col-md-6 ">
    <div className="event-details">
        <div className="h3">{singledata?.title}</div>
         <h5>{moment(singledata?.date).format('ll')}</h5>
         <p>{singledata?.description}</p>
         <address>
             {singledata?.location}
         </address>
   
       
    </div>
</div>

</div>
              
        </div>
    );
};

export default  EventDetailspage;