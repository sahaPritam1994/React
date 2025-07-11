import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
// import restaurantList from '../utils/mock-data';

const Body = () => {
  // State variable - Super powerful variable
  // const [listOfRestros, setListOfRestros] = useState(restaurantList); // Array descrturing
  const [listOfRestros, setListOfRestros] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [searchText, setSearchText] = useState('');

  // const arr = useState(restaurantList);
  // const listOfRestros = arr[0];
  // const setListOfRestros = arr[1];

  // useEffect("1st argument - callback fn", "dependency array");
  useEffect(() => {
    // console.info('useEffect function');
    fetchData();
  }, []);

  console.info('body rendered');

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const responseJson = await data.json();
    // console.info('fetched data ', data);
    const restaurantList = responseJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.info('fetched data ', restaurantList);
    setListOfRestros(restaurantList);
    setFilteredRestroList(restaurantList);
  };

  // Conditional rendering
  // if (listOfRestros.length === 0) {
  //   // return <h1>Loading...</h1>;
  //   return <Shimmer />;
  // }

  return listOfRestros.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className='filter'>
        <div className='search'>
          <input type="text" className='search-box' value={searchText} onChange={(event) => setSearchText(event.target.value)} /> 
          <button onClick={() => {
            // Filter the restro cards & update the UI
            const filteredRestro = listOfRestros.filter((restro) => restro.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log(searchText, filteredRestro);
            setFilteredRestroList(filteredRestro);
          }}>Search</button>
        </div>
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
        {filteredRestroList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
