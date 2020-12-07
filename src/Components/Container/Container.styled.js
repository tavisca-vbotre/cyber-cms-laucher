import styled from 'styled-components';

export const HeaderMainContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  padding: 0 15px;
  height: 5em;
  box-shadow: 0 2px 13px -6px ${({ theme, boxShadow, showBanner }) => !showBanner? theme.colors[boxShadow] : "transparent"};
  background-color: ${({ theme, showBanner }) => !showBanner ? theme.colors.headerBackgroundColor : "transparent"};
`;

export const PageMainContainer = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  transition: all 0.3s ease 0s;
  height: 100%;
  min-height: 100vh;
  background-color: rgb(244, 247, 253);
  font-family: Roboto, sans-serif;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  margin: 70px auto 10px;
`

export const FormInnerContainer = styled.form`
  display: flex;
  flex-direction: column;
  color: rgb(71, 80, 98);
  margin: 0px;
  padding: 50px 100px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px;
`