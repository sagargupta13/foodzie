import ResturantCard from "./ResturantCard";

import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8665787&lng=79.9087754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);
    // setListOfRestaurants(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)

    const restaurantsFromCard2 =
      data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants || [];
    const restaurantsFromCard5 =
      data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants || [];

    // Combine the restaurant lists
    const combinedRestaurants = [
      ...restaurantsFromCard2,
      ...restaurantsFromCard5,
    ];

    setListOfRestaurants(combinedRestaurants);
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-continer">
        {listOfRestaurants.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        {/* <ResturantCard resData={resList[0]} />
          <ResturantCard resData={resList[1]} /> */}
      </div>
    </div>
  );
};
export default Body;
