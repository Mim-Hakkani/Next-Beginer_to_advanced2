import { useRef } from "react";


const Reviews = () => {


    const emailref = useRef();
    const commentsref = useRef();

    const handlereviews =(e)=>{
        e.preventDefault();

        const enteremail =emailref.current.value;
        const entertext =commentsref.current.value;

 
          //store the current value in objects 
           const reqBody = { email: enteremail, text: entertext };

           console.log(reqBody);

        //after clicking the value is empty 
            emailref.current.value ='',
            commentsref.current.value=''
    }
    return (
        <div>
            <h1>Reviews For Ehsan Marketing</h1>

            <div className="container">
                <div className="row">
                <form onSubmit={handlereviews}> 

                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={emailref} />
                    
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <textarea className="form-control" col="8"ref={commentsref} ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
                </div>
            
            </div>
          
        </div>
  
    );
};

export default Reviews;