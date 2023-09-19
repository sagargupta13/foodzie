import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
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
            console.log(filteredList)
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
