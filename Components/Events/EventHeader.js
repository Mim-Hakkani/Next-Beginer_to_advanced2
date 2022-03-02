import Link from "next/link";


const EventHeader = () => {
    return (
        <>
      
        
        <nav style={{display:'flex'}}>
          <h2 >Event Management</h2>
            <ul>
                <li><Link href="/">Browse All Events </Link></li>
                <li><Link href="/events/evetid">faloroute Events </Link> </li>
                <li><Link href="/blog"> My Blog </Link></li>
            </ul>
            
        </nav>
        </>

    );
};

export default EventHeader;