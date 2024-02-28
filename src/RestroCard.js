

const RestroCard=(props)=>{
     const {resData}=props;
     console.log(resData,"resData");
     const {cloudinaryImageId,name,id,avgRating,cuisines}=resData.info;

    return(
        

        <div className="res-card">
           <img
           className="res-logo"
           src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
           cloudinaryImageId
           }
           />
           
           <h2>{name}</h2>
           <h3>{id}</h3>
          <h3 className="cus">{ cuisines.join(',')}</h3>
          <h3>{avgRating}</h3>
          
        </div>

    
    )
}

export default RestroCard;