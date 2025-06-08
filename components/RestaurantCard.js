import { CDN_URL } from '../utils/constants';
import styleCard from '../utils/style';

/* Sample code */
// const RestroCard = (props) => {
//   console.log(props);
//   return (
//     <div className="res-card" style={styleCard}>
//       <img
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/108506049B.png"
//         alt="res-logo"
//         className="res-logo"
//       />
//       <h3>{props.resName}</h3>
//       <h4>{props.cuisine}</h4>
//       <h4>4.4 star</h4>
//       <h4>38 mins</h4>
//     </div>
//   );
// };

const RestaurantCard = (props) => {
  const { resData } = props; // destructing of object
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card" style={styleCard}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      {/* <h4>₹{costForTwo / 100} for Two</h4> */}
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
