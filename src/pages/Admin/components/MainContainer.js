import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Score from "./Score";
import Info from "./Info";
const MainContainer = () => {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Score />
            <Info />
          </ColumnOne1>
          <ColumnTwo1></ColumnTwo1>
        </SectionOne>
        <SectionTwo>
          <ColumnOne2></ColumnOne2>
          <ColumnTwo2></ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%right, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  height: 100% !important;
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
`;
const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
`;
const ColumnOne2 = styled.div``;
const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
`;
const ColumnTwo2 = styled.div``;
