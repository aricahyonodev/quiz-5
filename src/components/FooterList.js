import React from 'react'
import styled from "styled-components";

export const FooterList = (props) => {
  const {title, data} = props;

  const TitleList = styled.h3`
    color: #e8be02;
    font-weight: 900;
    font-size: 20px;
  `;

  const ListUl = styled.ul`
      list-style: none;
      padding-left: 0;
  `;

  const LinstLink = styled.a`
    color: #fff;
    text-decoration: none;
  `;

  const ListText = styled.h4`
    margin: 5px 0;
    font-weight: 400;
    font-size: 16px;
  `;
    
  return (
    <div>
      <TitleList>{title}</TitleList>
      <ListUl>
        {data.map((data)=>{
            return(
            <li key={data}>
                <LinstLink href={data} >
                    <ListText>{data}</ListText>
                </LinstLink>
            </li>)
        })}
      </ListUl>
    </div>
  );
}
