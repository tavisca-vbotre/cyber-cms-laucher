import React, {useState, useEffect} from 'react';
import { HeaderMainContainer } from '../Container/Container.styled';
import { HeaderContainer } from './Header.styled';



const Header = ({logoUrl, showBanner}) => {
  
return (
      <HeaderMainContainer showBanner={showBanner}>
          <HeaderContainer>
            <img
                src={logoUrl}
                alt="logo"
            />
        </HeaderContainer>
      </HeaderMainContainer>
  );
};

export default Header;
