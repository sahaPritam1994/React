import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import restaurantList from '../utils/mockData';

const Body = () => {
  // State variable - Super powerful variable
  const [listOfRestros, setListOfRestros] = useState(restaurantList); // Array descrturing

  // const arr = useState(restaurantList);
  // const listOfRestros = arr[0];
  // const setListOfRestros = arr[1];

  // useEffect("1st argument - callback fn", "dependency array");
  useEffect(() => {
    console.info('useEffect function');
    fetchData();
  }, []);

  console.info('body rendered');

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const responseJson = await data.json();
    // console.info('fetched data ', data);
    console.info('fetched data ', responseJson);
    // setListOfRestros(responseJson.data.card);
  };

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredListOfRestros = listOfRestros.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setListOfRestros(filteredListOfRestros);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {/* // Restaurant cards */}
        {/* <RestaurantCard resData={resDataList[0]} />
        <RestaurantCard resData={resDataList[1]} />
        <RestaurantCard resData={resDataList[2]} />
        <RestaurantCard resData={resDataList[3]} /> */}
        {listOfRestros.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
