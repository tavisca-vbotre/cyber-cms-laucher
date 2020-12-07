import styled from 'styled-components';

export const DashboardContainerStyled = styled.div`
    min-height: 100%;
    position: relative;
    background-color: #0000;
` 
export const BannerContainerStyled = styled.div`
    width: 100%;
    margin-bottom: 20px;
    margin-top: 0;
` 
export const StyledHeaderTitleBg = styled.div`
  background-color: ${({ theme, withBackground}) =>
    withBackground ? theme.colors.headerTitleBoxBgColor || theme.colors.disabled.buttonColorDisabled : 'transparent'};
  padding: ${({ theme, attachToBottom }) =>
  attachToBottom ? '30px 10px 40px' : '8px 10px'};
`;

export const HeaderTitleUserName = styled.div`
  line-height: 1.4em;
`;

export const BoldPara = styled.p`
  font-weight: bold;
  line-height: 1.4em;
  padding: 0;
  margin:0;
`;

export const BannerStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 2em;
    color: #E4E4E4;
    height: 390px;
    background: ${({ bannerImgUrl, withBackground }) =>
    withBackground ? `url(${bannerImgUrl}) center center / cover no-repeat` : "transparent"};
    margin-top: ${({ withBackground }) =>
    withBackground ? '-75px' : '0'};
    > div {
    margin-top: ${({ withBackground }) =>
      withBackground ? '75px' : '0'};
    width: ${({ withBackground }) =>
    !withBackground ? '100%' : 'auto'};
` 
