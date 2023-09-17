import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Header = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo_23-2149651916.jpg?w=740&t=st=1694962881~exp=1694963481~hmac=c604e99cb3a08ef0953164ac57fd88c8195915b1bbc79428c9401df2432755e3" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Conatct Us</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { resData } = props;

   // Check if resData exists before accessing its properties
   if (!resData || !resData.info) {
    return null; // or display an error message or loading indicator
  }

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/t4kk0xeepxcvxnkwa2cm"
        alt="Resturant Logo"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(', ')}</h4>
      <h4>{resData.info.areaName}</h4>
    </div>
  );
};

// Data for a resturant
const resList = [
  {
    info: {
      id: "136605",
      name: "Domino's Pizza",
      cloudinaryImageId: "tutllxiyqliwbien8cob",
      locality: "Mohalla Baruzai",
      areaName: "Ghanta Ghar",
      costForTwo: "\u20B9400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "136605",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1400,
          },
          {
            name: "BASE_TIME",
            fee: 1000,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2400,
      },
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-17 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "\u20B9150 OFF",
        subHeader: "ABOVE \u20B9999",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-mohalla-baruzai-ghanta-ghar-shahjahanpur-136605",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "133826",
      name: "Apna Swagat Dhaba",
      cloudinaryImageId: "krsqzlejjffiv8by79r6",
      locality: "Samiti Gate",
      areaName: "Ahmadpur Niwazpur",
      costForTwo: "\u20B9300 for two",
      cuisines: ["North Indian"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "133826",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1400,
          },
          {
            name: "BASE_TIME",
            fee: 1000,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2400,
      },
      parentId: "34952",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-17 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "\u20B9125 OFF",
        subHeader: "ABOVE \u20B9249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/apna-swagat-dhaba-samiti-gate-ahmadpur-niwazpur-shahjahanpur-133826",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "133910",
      name: "Luxmi Hotel And Shagun Sweets",
      cloudinaryImageId: "oif2c18oc3tofcohuopb",
      locality: "Shahjahanpur Station Road",
      areaName: "Station Road",
      costForTwo: "\u20B9200 for two",
      cuisines: ["North Indian"],
      avgRating: 3.8,
      veg: true,
      feeDetails: {
        restaurantId: "133910",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1400,
          },
          {
            name: "BASE_TIME",
            fee: 1000,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2400,
      },
      parentId: "126936",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-17 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO \u20B975",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/luxmi-hotel-and-shagun-sweets-station-road-shahjahanpur-133910",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "132503",
      name: "Fauzi Tourist Family Dhaba",
      cloudinaryImageId: "dmkbwhksl3b6drcinq5s",
      areaName: "Shahjahanpur Locality",
      costForTwo: "\u20B9250 for two",
      cuisines: ["North Indian"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "132503",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
            fee: 1000,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5400,
      },
      parentId: "79057",
      avgRatingString: "3.9",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 10.3,
        serviceability: "SERVICEABLE",
        slaString: "41 mins",
        lastMileTravelString: "10.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-17 23:58:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "\u20B9125 OFF",
        subHeader: "ABOVE \u20B9249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/fauzi-tourist-family-dhaba-shahjahanpur-locality-shahjahanpur-132503",
      type: "WEBLINK",
    },
  }
];

const Body = () => {

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-continer">
        <ResturantCard
          resName="Meghana Food"
          cuisine="Pizzas, Fast Food"
          add="Shahar Khas Basti Begam"
        />
        <ResturantCard resData={resList[0]} />
        <ResturantCard resData={resList[1]}/>
        <ResturantCard resData={resList[2]}/>
        <ResturantCard resData={resList[3]}/>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
