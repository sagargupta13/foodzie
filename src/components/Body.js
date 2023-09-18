import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-continer">
          {resList.map((restaurant) => (
            <ResturantCard key={restaurant.info.id} resData={restaurant} />
          ))}
  
          {/* <ResturantCard resData={resList[0]} />
          <ResturantCard resData={resList[1]} /> */}
        </div>
      </div>
    );
  };
  export default Body