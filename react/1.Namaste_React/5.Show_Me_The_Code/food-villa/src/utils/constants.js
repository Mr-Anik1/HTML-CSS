const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"; //w_366 or w_660

// https://corsproxy.io/? this solves cors error
const SWIGGY_API =
  "https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9351929&lng=77.62448069999999&carousel=true&third_party_vendor=1"; //20

export { CDN_URL, SWIGGY_API };

/**
 * @More_API
 * 
 * 
 * 
 
  // Only 9 
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"; 

  json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants 


  // 20
  "https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9351929&lng=77.62448069999999&carousel=true&third_party_vendor=1"

  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 


  // 16
  "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999#"

  json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

 *
 *
 * 
 */
