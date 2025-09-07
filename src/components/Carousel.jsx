import React, { useState } from "react";
import "./Carousel.css"; // Make sure your CSS is imported

const Carousel = (props) => {

  const [data, setData] = useState(props.data)

  function Card({ title, values}){
    return(
      <>
        <div className="card">
              <div className="title">
                {
                  values[2]?(
                        <i className={values[2]}></i>
                  ):
                  (
                    ""
                  )
                }
                {title}
              </div>
              <div className="num">{values[0]}</div>
        </div>
      </>
    )
  }

  return (
    <div className="carousel">

          <div className="cards">
            {
              Object.keys(data).map((element, index)=>(
                <Card title={element} values={data[element]} key={index}/>
              ))
            }
          </div>

    </div>
  );
};

export default Carousel;