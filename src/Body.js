
import RestroCard from "./RestroCard"
import data from "./data";

const Body=()=>{
    console.log(data,"data");
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
           { data.map((res)=>(
                  <RestroCard key={res.info.id} resData={res}/> 
            ))}
            </div>

        </div>
    )

}
export default Body;