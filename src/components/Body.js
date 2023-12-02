import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable useState()
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body rendered")
  // whenever a state variable get updated , react triggers a reconciliation cycle (re-render the whole body component )

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.383604879516387&lng=79.43022362887861&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();

    const restaurants = data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurant(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            style={{
              padding: "8px",
              marginLeft: "10px",
              borderRadius: "5px",
              borderStyle: "none",
            }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-continer">
        {filteredRestaurant.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
