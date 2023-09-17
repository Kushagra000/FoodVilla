import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Config";
import Shimmer from "./Shimmer";

const RestrauntDetails=()=>{
    const {resId} = useParams();

    const [restraunt , setRestraunt]= useState({});
    const [menu , setMenu]= useState({});
    useEffect(()=>{
        getRestrauntInfo();
    },[])


    async function getRestrauntInfo(){
        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.803955&lng=80.904385&restaurantId="+resId);
        const json =await data.json();
        // console.log(json?.data);
        // console.log(json?.data?.cards[0]?.card?.card?.info); 
        setRestraunt(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
    }

    return !restraunt ? (
        <Shimmer/>
    ):(
        <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restraunt?.name}</h2>
        <img src={IMG_CDN_URL+restraunt?.cloudinaryImageId}/>
        <h4>{restraunt?.avgRating}</h4>
        <h4>{restraunt?.totalRatingsString}</h4>
        <h3>{restraunt?.areaName}</h3>
        <h3>{restraunt?.locality}</h3>
        <h3>{restraunt?.city}</h3>
        <h3>{restraunt?.cuisines}</h3>
        <div>
        <h1>Menu</h1>
        <ul>
        {Object.values(menu).map((item)=><li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
        </ul>
        {console.log(Object.values(menu))}</div>
        </div>

    )
}
export default RestrauntDetails;