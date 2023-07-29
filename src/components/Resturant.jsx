// rfce - Create React Functional Component and export 
import React from 'react'
import './Resturant.css'
import StarRating from './StarRating';
import Delete from '../image/Icons/delete.svg'
const Resturant = ({ name, address, description, rate , onDelete }) => {
  const handleDelete = () => {
    onDelete(name);
  };

  return (
    <div className="resturant">
      <div className='section'>
        <h4 > Resturant Name  </h4>
        <p> {name} </p>
      </div>

      <div className='section'>
        <h4> Address   </h4>
        <p> {address} </p>
      </div>

      <div className="section">
        <h4> Desription  </h4>
        <p>{description}</p>
      </div>

      <div className="section">
        <h4> Rate </h4>
        <p> <StarRating rating={rate} /></p>
      </div>
      <div>
      <button className='btn_delete' onClick={handleDelete}> <img className='btn_delete_icon' src={Delete}/> </button>
   </div>
    </div>
    )
}

export default Resturant;