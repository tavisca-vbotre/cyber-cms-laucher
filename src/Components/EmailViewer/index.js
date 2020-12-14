import React, {useEffect, useState} from 'react';

import { EmailContainerStyled} from './email.styled';

import { Stack, config} from '../../config/contentstack.config'


const EmailViewer = () => {

  const [isLoading, setSelected] = useState(true);
  const parsedUrl = new URL(window.location.href);
  const [pageData, setContentDetails] = useState();
  const locale = parsedUrl.searchParams.get("locale") ? parsedUrl.searchParams.get("locale") : 'en-us';


  useEffect(getPageObject, []);

  function getPageObject(){
    var Query = Stack.ContentType("fortum_email").Query()
    .language(locale)
    .toJSON()
    .find()
    .then((result) => {
      setContentDetails(result[0][0]);
      setSelected(!isLoading);
      document.title = result[0][0].title
    })
    .catch((error) => {
      console.log(error)
  });
  }
  


  return !isLoading && (
      <EmailContainerStyled>      
       <div dangerouslySetInnerHTML={{ __html: pageData.email_template_html }} />
     
      </EmailContainerStyled>
  );
};

export default EmailViewer;
