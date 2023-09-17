import { useEffect, useState } from "react"
// import {restaurantList} from "./Config"
import RestrauntCard  from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

function filterData(searchTxt,restaurants){
   return restaurants.filter((restaurant)=>
   restaurant?.info?.name.toLowerCase().includes(searchTxt.toLowerCase()))
}
const Body=()=>{
    const [allRestaurants, setAllRestaurants]= useState([]);
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);
    const[searchTxt, setSearchTxt]= useState("");

    useEffect(()=>{
        getRestraunts();
    },[]);

    async function getRestraunts(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.510822&lng=80.24686609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(!allRestaurants) return null;
    // if(filteredRestaurants.length==0) return<> <img className ="simmer-img" alt="Logo" src="https://rukminim1.flixcart.com/image/850/1000/kyhlfgw0/tea/r/d/g/250-healthy-chai-fresh-assam-tea-250gm-1-pouch-regular-tea-original-imagapgc9ryyffzm.jpeg?q=90"/> <h1>Loading resraurants</h1></>
    return (allRestaurants.length==0)?<Shimmer/>: (
        <>
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchTxt}
                onChange={(e)=>{
                    setSearchTxt(e.target.value);
                }}
            />
            <button
            className="search-btn"
            onClick={()=>{
                //Need to filter the data
                const data= filterData(searchTxt,allRestaurants);
                //Update the state -restaurants variable
                setFilteredRestaurants(data);   
            }}>
            Search
            </button>
        </div>
        <div 
        className="resraurant-list">
        {
          filteredRestaurants.map((restaurant)=>{
            return (

            <Link to= {"/restraunt/"+restaurant?.info?.id} className="links">

            <RestrauntCard  {...restaurant?.info} key={restaurant?.info?.id}/>
            </Link>
            )})}
        </div>
        </>
    )
}
export default Body;