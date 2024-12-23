import React , {useState, useRef} from 'react';
import './card.css';
import { FaStar } from "react-icons/fa";


function Card({item}) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const itemPicDesRef = useRef(null);
//   const toggleDescription = () => {
//     setIsExpanded(!isExpanded);
//     if (itemPicDesRef.current) {
//       itemPicDesRef.current.style.height = isExpanded ? '9em' : 'auto'; 
//   };
// }

//   const getDescription = () => {
//     if (item.description.length > 100) {
//       return isExpanded ? item.description : item.description.substring(0, 81) + '';
//     }
//     return item.description; 
//   };
//   const resetHeight = () => {
//     if (itemPicDesRef.current) {
//       itemPicDesRef.current.style.height = '9em'; 
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isExpanded) {
//       resetHeight();
//     }
//   };

//   const handleScroll = () => {
//     if (!isExpanded) {
//       resetHeight();
//     }
//   };
  return (
    <section  >
<div className='card'  >
    <div className='card-head'>
    <h2>{item.name}</h2>
    <p className='item-price'>₹{item.price}</p>
    <p className='item-rating'><span className='star'>★</span>{item.rating}</p>
    </div>
    <div className='item-pic-des' //ref={itemPicDesRef} 
    >
      <div className='item-img'>
        <img
               src={item.pic}
               alt={item.name}
        />
        <button>Add</button>
        </div>
        <div className="item-description">
            {
            <p>{item.description}</p>
            /* <p>
            {getDescription()}
              {item.description.length > 90 && (
                <span className="read-more" onClick={toggleDescription}>
                  {isExpanded ? '...Show Less' : ' ...Read More'}
                </span>
                 )}
            </p> */}
          </div>
    </div>
</div>
    </section>

  )
}

export default Card