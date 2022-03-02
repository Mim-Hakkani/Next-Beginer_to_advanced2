import { useRouter } from "next/router";


const  EventDetailspage = () => {
    
    const router = useRouter();
    const {eventid} = router.query

    return (
        <div>
            <h1>Events details page is herer</h1>
        </div>
    );
};

export default  EventDetailspage;