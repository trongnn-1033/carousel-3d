import React from "react";
import Carousel from "./Carousel";

function index({ width, height, gap, listCarousel }) {
  console.log(listCarousel);
  return (
    <Carousel
      width={width}
      height={height}
      gap={gap}
      length={listCarousel.length}
    >
      {listCarousel.map((item, index) => (
        < React.Fragment key={ index + item } >
          <input id={item} type="radio" name="carousel3D" value={index + 1} defaultChecked={ index === 0 } />
          <label className="carousel-dot" htmlFor={item} >
            {index +1}
          </label>
        </ React.Fragment>
      ))}
      <div className="carousel">
        <div className="carousel__box">
          {listCarousel.map((item, index) => (
            <label htmlFor={item} key={item + index}>
              <img src={process.env.PUBLIC_URL + item} alt={item} />
            </label>
          ))}
        </div>
      </div>
    </Carousel>
  );
}

export default index;
