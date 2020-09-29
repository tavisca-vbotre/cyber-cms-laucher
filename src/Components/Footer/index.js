import React from 'react';

import { FooterContainer, FooterItem } from './Footer.styled';
import { version } from '../../../package.json';

const Header = () => {
  return (
    <FooterContainer >
        <FooterItem>
            <span>Copyright © 2020</span>
        </FooterItem>
        <FooterItem>
            <span>{`V${version}`}</span>
        </FooterItem>
    </FooterContainer>
  );
};

export default Header;
