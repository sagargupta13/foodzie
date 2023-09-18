import { CDN_URL } from "../../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    // const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } =
    //   resData?.info;
  
    // Check if resData exists before accessing its properties
    if (!resData || !resData.info) {
      return null; // or display an error message or loading indicator
    }
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
           CDN_URL  +
            resData.info.cloudinaryImageId
          }
          alt="Resturant Logo"
        />
        <h3>{resData.info.name}</h3>
        <h3>{resData.info.avgRating} Stars</h3>
        <p>{resData.info.cuisines.join(", ")}</p>
        <p>{resData.info.areaName}</p>
        <p>{resData.info.costForTwo}</p>
      </div>
    );
  };

  export default ResturantCard