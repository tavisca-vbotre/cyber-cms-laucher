import React, {useState, useEffect} from 'react';
import { HeaderMainContainer } from '../Container/Container.styled';
import { HeaderContainer } from './Header.styled';
import logo from '../../assets/images/cyber-logo.png';

import {Stack, config} from '../../config/contentstack.config'


const Header = () => {
  
  const [pageData, setContentDetails] = useState(null);
  useEffect(getPageObject, []);

  function getPageObject(){
    var Query = Stack.ContentType(config.pageData).Query()
    .toJSON()
    .find()
    .then((result) => {
      setContentDetails(result[0][0]);
    })
    .catch((error) => {
      console.log(error)
  });
}


  return (
      <HeaderMainContainer >
          <HeaderContainer >
            <img
                src={pageData && pageData.logo.url}
                alt="logo"
            />
        </HeaderContainer>
      </HeaderMainContainer>
  );
};

export default Header;
