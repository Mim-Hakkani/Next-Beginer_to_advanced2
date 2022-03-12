import Link from "next/link";
import { useRef } from "react";


const EventHeader = (props) => {
    const yearref = useRef();
    const monthref = useRef();

const handlesubmit =(e)=>{
    e.preventDefault();

    const selectyear = yearref.current.value;
    const selectmonth = monthref.current.value;

   props.onSearch(selectyear,selectmonth);

}

    return (
  
      
        <>
        <nav style={{display:'flex'}}>
          <h2 >Event Management</h2>
            <ul>
                <li><Link href="/">Browse All Events </Link></li>
                <li><Link href="/events/evetid">faloroute Events </Link> </li>
                <li><Link href="/blog"> My Blog </Link></li>
                <li><button className="btn" id="">Translate</button></li>
            </ul>
            
        </nav>

        <div className="d-inline-block ">
            <form onSubmit={handlesubmit}>
            
            <select

             className="form-select"
             aria-label="Default select example"
             ref={yearref}
             
             >
                    <option selected>Select Year</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
            </select>
             
            <select 
             className="form-select"
             aria-label="Default select example"
             ref={monthref}
             
             
             >
                    <option selected>Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
            </select>

          

            <button className="btn btn-info">Submit</button>
            </form>
        </div>

        </>
   

    );
};

export default EventHeader;