import React from 'react'
import gtdLogo from "../assets/img/gtd_logo.png";
import styled from "styled-components";
import { Container } from "./Container";

export const Navbar = () => {
  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  `;
  return (
    <Container>
        <HeaderWrapper>
            <div>
               <img src={gtdLogo} alt="gtd" />
            </div>
        </HeaderWrapper>
    </Container>
  )
}
