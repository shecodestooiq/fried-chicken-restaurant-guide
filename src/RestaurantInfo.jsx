function ResturantInfo(props) {

    return (<div className='rest-card'>
        <h2> {props.restList.name}</h2>
        <h2>{props.restList.rating}/5</h2>

        {/* array.filter(function(currentValue, index, arr), thisValue) */}

    </div>);
}

export default ResturantInfo;