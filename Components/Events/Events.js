import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";

const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-3.jpeg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/coding2.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/coding3.jpg',
      isFeatured: true,
    },
  ];



const Events = () => {
    const router= useRouter()
    // const ddt = router.push(`/events/mim`)

 
    return (
        <div className='container mt-4'>
             <div className="row">
                 <div className="col-md-2"></div>
                 <div className="col-md-8">
                     

                         {
                             DUMMY_EVENTS.map(event=>

                                <div className="row border border-primary p-2" key={event.id}>

                                <div className="col-md-4">
                                    <Image src={'/'+event.image} alt="" height={800} width={600} />
                                </div>
                                <div className="col-md-6 ">
                                    <div className="event-details">
                                        <div className="h3">{event.title}  </div>
                                         <h5>{moment(event.date).format('ll')}</h5>
                                         <p>{event.description}</p>
                                         <address>
                                             {event.location}
                                         </address>

                                         <button className="btn btn-info text-white px-5"
                                          onClick={()=>router.push(`/events/${event.id}`)}
                                         >Details
                                          <FontAwesomeIcon icon={faArrowRight} />
                                         </button>
                                    </div>
                                </div>
       
                                </div>
                                )
                         }




                    
                 </div>
                 <div className="col-md-2"></div>
             </div>
        </div>
    );
};

export default Events;


