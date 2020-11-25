import React, { useRef, useEffect, useState } from 'react';
import {
  DropDownContainerStyled,
  DropDownHeadStyled,
  DropDownContentStyled,
} from './DropDown.styled';
import upArrow from '../../assets/images/up-arrow.svg';

const DropDown = ({ head, children, style, onSelect, selected, id }) => {
  const [elheight, setElHeight] = useState(0);
  const elRef = useRef();

  useEffect(() => {
    setElHeight(elRef.current.scrollHeight);
  });

  const onClick = () => {
    onSelect();
  };
  

  return (
    <DropDownContainerStyled style={style}>
      <DropDownHeadStyled selected={selected} onClick={onClick}>
        <div>{head}</div>
        <span>
          <img src={upArrow} />
        </span>
      </DropDownHeadStyled>
      <DropDownContentStyled selected={selected} ref={elRef} height={elheight}>
        {children}
      </DropDownContentStyled>
    </DropDownContainerStyled>
  );
};

export default DropDown;
