import styled, { css } from "styled-components";

export default styled.div`
  display:flex;
  height: 500px;
  input {
    /* display: none; */
  }


  & .carousel {
    margin: auto;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    text-align: left;
    perspective: ${(props) => props.width * 2}px;
    perspective-origin: 50% -25%;

    &__box {
      transform-style: preserve-3d;
      transform: ${(props) => `translateZ(${-(props.width + props.gap)}px)`};
      position: relative;
      margin: 0;
      width: ${(props) => props.width}px;
      height: ${(props) => props.height}px;
      transition: 1s;

      label {
        position: absolute;
        border: 15px solid rgba(0, 0, 0, 0.8);
        opacity: 0.5;
        transition: 1s;
        width: 500px;
        height: 300px;
        background: #ccc;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        ${(props) => {
          console.log(props);
          let cssImg = "";
          const eachDeg = 360 / props.length;
          for (let i = 0; i < props.length; i++) {
            cssImg += `
              &:nth-child(${i + 1}) {
                transform: rotateY(${eachDeg * i}deg) translateZ(${
              props.width + props.gap
            }px) scale(.8);
              }
          `;
          }
          return cssImg;
        }}
      }
    }
  }

  ${(props) => {
    let cssInput = "";
    const eachDeg = 360 / props.length;
    for (let i = 0; i < props.length; i++) {
      cssInput += `
        input[value="${i+1}"]:checked~.carousel {
          .carousel__box{
            transform: translateZ(${-(props.width + props.gap)}px) rotateY(${-eachDeg * i}deg);
          }
        }
      `;
    }
    return cssInput;
  }}

${(props) => {
    let cssInput = "";
    const eachDeg = 360 / props.length;
    for (let i = 0; i < props.length; i++) {
      cssInput += `
        input[value="${i+1}"]:checked~.carousel {
          .carousel__box{
              label:nth-child(${i+1}) {
                transform: rotateY(${eachDeg * i}deg) translateZ(${(props.width + props.gap)}px) scale(1);
                opacity: 1;
              }
          }
        }
      `;
    }
    return cssInput;
  }}
`;
