import React, {useState} from 'react';

import { HelpContainerStyled } from './Help.styled';
import PageTitle from '../PageTitle/PageTitle';
import DropDown from '../DropDown/DropDown';

import Stack from '../../config/contentStack'


const Help = () => {

  const [isSelected, setSelected] = useState(false);
  const [result, setContentDetails] = useState(null);

  const onChange = () => {
    
  var Query = Stack.ContentType("cxl_faq").Query()
      .toJSON()
      .find()
      .then((result) => {
        setSelected(!isSelected);
        setContentDetails(result[0])
      })
      .catch((error) => {
        console.log(error)
      })
  };

  return (
      <HelpContainerStyled>
        <PageTitle title="Need Help? From advice to action" subtitle="Take action now to ensure your data stays secure." />
         <DropDown
              head="What's the Public & Dark Web?"
              onSelect={onChange}
              selected={isSelected}
          >
          {result && result[0].multi_line}
        </DropDown>
      </HelpContainerStyled>
  );
};

export default Help;
