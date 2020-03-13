import React from "react";
import Films from "./Films"

const Body = (props) => {
    const films = props.data.data;
    
    return (

          <div>
            {films.results.map(item => {
              return <Films key={item.name} filmsInfo={item} />;
            })}
          </div>


    )
}

export {Body as default}