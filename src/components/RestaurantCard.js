import {IMG_CDN_URL} from "./Config"
const ReatrauntCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return(
        <div className="card">
            <img src={IMG_CDN_URL
                 + 
                cloudinaryImageId} placeholder="alt"/>
            <h2>{name} </h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
};
export default ReatrauntCard;