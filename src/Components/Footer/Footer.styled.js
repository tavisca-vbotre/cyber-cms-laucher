import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px;
    flex-direction: row;
    margin-top: 0px;
    box-shadow: none;
    transition: all 0.3s ease 0s;
    background-color: #f7f7f7;
    color: #000;
`;

export const FooterItem = styled.div`
    padding-left: 5px;
    color: #000;
`
export const FooterSection = styled.div`
    width: 1024px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    text-align:left;
`

export const FooterlinkItem = styled.span`
    font-weight: 700;
    padding-right:30px;
    &:last-child{
        padding-right:0;
    }
    a{
        text-decoration:none;
        color:#000;
    }

`