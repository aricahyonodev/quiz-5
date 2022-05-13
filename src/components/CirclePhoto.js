import React from 'react'
import styled from "styled-components";

export const CirclePhoto = (props) => {

  const Circle = styled.img`
    height: 200px;
    border-radius: 50%;
    width: 200px
  `;

  return (
        <Circle src={props.src} alt="" />
  )
}
