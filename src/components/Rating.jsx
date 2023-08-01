import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  
  const generateUniqueId = () => {
    return `${Math.random().toString(36).substring(2)}-${Date.now().toString(36)}`;
  }

  return (
    <div className="star-rating-container">
      {[...Array(filledStars)].map((index) => (
        <FontAwesomeIcon key={`filled-${generateUniqueId()}`} icon={faStar} className="filled-star" />
      ))}
      {[...Array(emptyStars)].map((index) => (
        <FontAwesomeIcon key={`empty-${generateUniqueId()}`} icon={faStar} className="empty-star" />
      ))}
    </div>
  );
}
export default Rating