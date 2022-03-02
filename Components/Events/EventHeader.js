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

        <div>
            <div className="year">
            <select className="form-select" aria-label="Default select example">
                    <option selected>Select Year</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
            </select>

            </div>
        </div>
        </>

    );
};

export default EventHeader;