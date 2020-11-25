import styled from 'styled-components';

export const PageTitleStyled = styled.div`
  text-align: center;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.primaryColor};
  color: ${theme => theme.theme.border.menuAndFontColor};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.xLarge};
  font-weight: ${({ bold }) => bold || 'normal'};
  line-height:1.4em;
`;

export const PageTitleContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;
