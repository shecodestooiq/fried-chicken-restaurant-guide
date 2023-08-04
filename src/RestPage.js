import { useParams } from "react-router-dom";

function Rest() {
    const {name} = useParams();
    
    console.log(name);

    return (<div className="welcome">
        <h1>Welcome to {name} </h1>
    </div>);
}

export default Rest;