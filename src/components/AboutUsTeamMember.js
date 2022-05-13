import React from 'react'
import styled from "styled-components";

export const AboutUsTeamMember = (props) => {
  const {name, src, email, phone} = props;
   
  const WrapperTeamMember = styled.div`
    display: flex;
  `;
  const TeamMember = styled.div`
    padding-left: 35px;
    text-align: left;
  `;
  const TeamMemberTitle = styled.h4`
    margin-bottom: 0;
    color: #e8be02;
  `;
  const TeamMemberParagraph = styled.p`
    margin-top: 3px;
    margin-bottom: 0;
  `;

  const CirclePhoto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `;


  return (
    <WrapperTeamMember>
      <CirclePhoto src={src} alt="danielle gtd" />
      <TeamMember className="about-us__team-member__info">
        <TeamMemberTitle>{name}</TeamMemberTitle>
        <TeamMemberParagraph>{email}</TeamMemberParagraph>
        <TeamMemberParagraph>{phone}</TeamMemberParagraph>
      </TeamMember>
    </WrapperTeamMember>
  );
}
