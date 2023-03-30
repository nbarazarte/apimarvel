import React from "react";

const Marvel = ({ marvel }) => {
  const characters = marvel?.results;

  let html = []

  for (const key in characters) {
  
    let img = characters[key].thumbnail.path +"." +characters[key].thumbnail.extension;

    html.push(
      <div className="card" id="hulk">
       <div className="card-image">
         <img src={img}/>
       </div>
       <div className="card-text">
         <h2>MARVEL</h2>
         <p>{characters[key].name}</p>
         <div>
         <div>
           <span>15</span>
           <span>&cent;</span>
           </div>
         <div><span>27</span><span>May</span></div>
       </div>
         </div>
     </div>
    )
  
  }

  return (
    <div id="container">
      {html}
    </div>
  );
};

export default Marvel;
