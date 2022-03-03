// import { Button } from "bootstrap";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import {DUMMY_EVENTS} from '../../Components/Events/Events.js'

const FiltereventPage = () => {

    const router = useRouter();
    const {slug} = router?.query

     const filteryear = slug[0];
     const filtermonth = slug[1];
  

    //  console.log(filteryear,filtermonth);
    //  console.log(date);

     const filterevent = DUMMY_EVENTS.filter(ss=>ss.date.includes(`${filteryear}-${filtermonth}`))


     console.log(filterevent);

     if(filterevent.length==0){
         return (<h2>No data foung</h2>)
     }


     
    return (
        <div className="container">

            <button className="btn btn-info" onClick={()=>router.push(`/`)}>All Events</button>
            {
                filterevent.map(aa=>
                    <div className="row border border-primary p-2" key={aa.id}>

                    <div className="col-md-4">
                        <Image src={'/'+aa?.image} alt="" height={800} width={600} />
                    </div>
                    <div className="col-md-6 ">
                        <div className="event-details">
                            <div className="h3">{aa?.title}</div>
                             <h5>{moment(aa?.date).format('ll')}</h5>
                             <p>{aa?.description}</p>
                             <address>
                                 {aa?.location}
                             </address>
                        <button 
                        className="btn btn-info"
                        onClick={()=>router.push(`/events/${id}`)}
                    
                        >
                            Details
                        </button>
                           
                        </div>
                    </div>
                    
                                   </div>)
            }
               
        </div>
    );
};

export default FiltereventPage;

