import React from 'react';
import { HeaderMainContainer } from '../Container/Container.styled';
import { HeaderContainer } from './Header.styled';
import logo from '../../assets/images/cyber-logo.png';

const Header = () => {
  return (
      <HeaderMainContainer >
          <HeaderContainer >
            <img
                src="./assets/images/cyber-logo.png"
                alt="logo"
            />
        </HeaderContainer>
      </HeaderMainContainer>
  );
};

export default Header;
