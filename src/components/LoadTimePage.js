import React from "react";


function LoadTime()
{
    return(<div className="container" style={{textAlign:"center"}}><img alt="img-satelite"  src={require("../components/satellite.png").default} style={{paddingTop:"7%"}} width="30%" height="30%" />
    <h2 style={{marginBottom:"10%",color:"white"}}>Search for the Planets! I am sure you will find something that interests you 😁</h2>
    </div>)
}
export default LoadTime;