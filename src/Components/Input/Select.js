import React from 'react';
import {
  InputContainer,
  StyledLabel,
  SelectInput,
  StyledInputContainer,
  StyledInputIcon,
} from './Input.styled';
import styled from 'styled-components';

const Select = styled(({
  onChange,
  state,
  errorMessage,
  options = [],
  icon,
}) => {
  const { id, label, name, defaultValue, value } = state;

  const onChangeSelect = e => {
    const key = e.target.value;
    // const selectedValue = options.find(o => o.key === key).value;
    onChange(name, key);
  };

  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputContainer>
        <SelectInput
          onChange={onChangeSelect}
          name={name}
          id={id}
          defaultValue={defaultValue || ''}
          value={value}
          disabled={!options.length}
        >
          {/* <option disabled value="">
            {defaultValue}
          </option> */}

          {options.map((elt, i) => (
            <option
              key={i}
              value={elt.key}
              name={elt.value}
            >
              {elt.value}
            </option>
          ))}
        </SelectInput>
        {icon && <StyledInputIcon src={icon} bottom={35} />}
      </StyledInputContainer>
    </InputContainer>
  );
})``;

export default Select;
