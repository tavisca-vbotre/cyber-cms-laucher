import styled from 'styled-components';

const DropDownContainerStyled = styled.div`
  background-color: white;
  margin: 30px 0;
`;

const DropDownHeadStyled = styled.div`
  display: flex;
  padding: 15px 20px;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  color: ${theme => theme.theme.border.menuAndFontColor};
  font-size: ${theme => theme.theme.fontSizes.medium};
  span {
    font-size: 1.5em;
    transition: 0.5s ease all;
    transform: ${({ selected }) =>
      selected
        ? 'rotate(-0deg)'
        : 'rotate(180deg)'};
  }
`;

const DropDownContentStyled = styled.div`
  overflow: hidden;
  padding: ${({ selected }) => (selected ? '0 20px 15px' : '0 20px')};
  height: auto;
  max-height: ${({ selected, height }) =>
    selected && height ? `${height + 15}px` : '0px'};
  transition: 0.5s ease max-height;
`;

export { DropDownContainerStyled, DropDownHeadStyled, DropDownContentStyled };
