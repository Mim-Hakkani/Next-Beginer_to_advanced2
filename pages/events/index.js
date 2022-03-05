import { useEffect } from "react";

const Events = () => {

    useEffect(()=>{
        fetch('/api/posts')
        .then(res=>res.json())
        .then(data=>console.log(data))
    })
    return (
        <div>
            <h1>All Events </h1>
        </div>
    );
};

export default Events;