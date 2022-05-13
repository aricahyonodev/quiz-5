import React from 'react'
import styled from "styled-components";

export const Hero = () => {

  const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  `;

  const HeroTitle = styled.h1`
    margin: -50px 0 0;
    color: #4f4d53;
    font-size: 100px;
    font-weight: 900;
  `;

  return (
        <MainWrapper>
          <HeroTitle>Hello, we’re gtd.</HeroTitle>
        </MainWrapper>
  )
}
