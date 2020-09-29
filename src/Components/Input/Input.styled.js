/* eslint-disable consistent-return */
import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  position: relative;
  ${({ marginVertical }) =>
    marginVertical
      ? `margin: ${marginVertical}px 0 ${2 * marginVertical}px 0`
      : ''};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  flex: auto;
  width: 100%;
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

export const StyledInputIcon = styled.img`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? `${bottom}px` : '12px')};
  right: 8px;
  width: 17px;
  height: 17px;
}
`;

export const InputErrorMessage = styled.div`
  color: ${({ theme, isError }) =>
    isError === 'error'
      ? theme.colors.alertYellowColor
      : theme.colors.alertRedColor};
  min-height: 20px;
  padding: 5px 0;
`;

/* Input & Input Group Style */
export const StyledInput = styled.input`
  border: ${({ isError, theme }) => {
    switch (isError) {
      case 'success':
        return;
      case 'empty':
        return `${theme.error.border.alertMediumBorder} !important`;
      case 'error':
        return `${theme.error.border.alertYellowColor} !important`;
      default:
        return `${theme.error.border.lightBorder} !important`;
    }
  }};

  color: ${theme => theme.theme.colors.menuAndFontColor};
  background-color: ${({ isError, theme }) => {
    switch (isError) {
      case 'success':
        return;
      case 'empty':
        return theme.error.alertRedColor;
      case 'error':
        return theme.error.alertYellowColor;
      default:
        return theme.colors.lightColor;
    }
  }};
  text-align: ${({ alignInput }) => alignInput || 'left'};
  font-size: 1em;
  height: 40px;
  border-radius: 5px;
  width: 100%;
  padding: 0 5px;
  &:focus {
    outline: none;
  }
  &:-internal-autofill-selected {
    background-color: ${({ theme }) => theme.colors.lightColor};
  }
`;

/* Input Group Style */
export const InputGroupStyle = styled.div`
  flex: auto;
  display: grid;
  grid-template-columns: ${({ row }) =>
    row.reduce((acc, curr) => `${acc} 1fr`, '')};
  grid-gap: 30px;
`;

export const StyledSubLabel = styled.label`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.menuAndFontColorLight};
`;

/* hint hover style */
export const HintHoverPopupContent = styled.div`
  padding: 7px 10px;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 20px;
  z-index: 1;
  opacity: 0;
  min-width: 270px;
  transition: visibility 0.2s linear, opacity 0.2s linear;
  box-shadow: 0 2px 4px 0 rgba(6, 33, 88, 0.15);
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 0.75em;
  line-height: 1.5em;
  background: ${({ theme }) => theme.colors.lightColor};
  @media (max-width: ${({ theme }) => theme.screenSizes.screenS}) {
    min-width: 100%;
  }
`;

export const StyledHintHoverContainer = styled.div`
  display: inline-block;
  position: relative;
  &:hover ${HintHoverPopupContent} {
    visibility: visible;
    opacity: 1;
  }
`;

export const HintHoverIcon = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  width: 18px;
  height: 18px;
  font-size: 0.8em;
  line-height: 1.5em;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.lightColor};
  display: inline-block;
  cursor: pointer;
`;

/* Select style */
export const SelectInput = styled.select`
  background-color: #fff;
  width: 101.5%;
  margin: 10px 0 25px 0;
  height: 45px;
  font-size: 1em;

  border: 0.7px solid #5e5e5e;
  color: #3e4756;
  border-radius: 5px;

  border: 1px solid #eee;

  color: ${theme => theme.theme.colors.menuAndFontColor};
  background-color: ${({ isError, theme }) => {
    switch (isError) {
      case 'success':
        return;
      case 'empty':
        return theme.error.alertRedColor;
      case 'error':
        return theme.error.alertYellowColor;
      default:
        return theme.colors.lightColor;
    }
  }};
`;

/* Radio Style */

export const RadioLabel = styled.label`
  position: relative;
  margin: 20px 0;
  padding: 0 25px 0 25px;
  cursor: pointer;
  transition: all 0.25s linear;
  -webkit-transition: all 0.25s linear;
`;

export const RadioHideInput = styled.input`
  position: absolute;
  visibility: hidden;
`;

export const RadioUIInput = styled.span`
  position: absolute;
  border: 2px solid #aaaaaa;
  border-radius: 100%;
  height: 17px;
  width: 17px;
  top: 0;
  left: 0;
  transition: border 0.25s linear;
  -webkit-transition: border 0.25s linear;

  &::before {
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 11px;
    width: 11px;
    top: 1px;
    left: 1px;
    margin: auto;
    -webkit-transition: background 0.25s linear;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
    background-color: ${({ checked, theme }) =>
      checked ? theme.colors.menuAndFontColor : 'transparent'};
  }
`;
