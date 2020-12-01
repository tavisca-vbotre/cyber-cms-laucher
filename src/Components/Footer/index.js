import React, {useState, useEffect} from 'react';

import { FooterContainer, FooterSection, FooterlinkItem } from './Footer.styled';
import { version } from '../../../package.json';
import {Stack, config} from '../../config/contentstack.config'

const Footer = () => {
    
  const [footer, setContentDetails] = useState(null);

  useEffect(getPageObject, []);

  function getPageObject(){
    var Query = Stack.ContentType(config.footer).Query()
    .language(config.locale)
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
    <FooterContainer >
      <FooterSection>
        <div>
          {
            footer && footer.footerlinks.map((item) => {
              return (
                <FooterlinkItem>
                  <a href={item.href}> {item.title}</a>
                </FooterlinkItem>
              )
            })         
          }
          <br></br> <br></br>
          {
            footer && 
           
            <span>{footer.copyrighttext}</span>
          }
        
        </div>
          <div>
              { footer && 
                <img src={footer.footerlogo.url} width="170" alt="generated"></img>
                
              }
        </div>
        <div>
          <span>
            Seuraa meitä sosiaalisessa mediass
          </span>
        </div>
      </FooterSection>
        
    </FooterContainer>
  );
};
export default Footer;
