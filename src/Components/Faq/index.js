import React, {useEffect, useState} from 'react';

import { HelpContainerStyled, HelpTitleStyle} from './Help.styled';
import PageTitle from '../PageTitle/PageTitle';
import DropDown from '../DropDown/DropDown';

import { Stack, config} from '../../config/contentstack.config'
import Header from '../../Components/Header';


const Help = () => {

  const [isLoading, setSelected] = useState(true);
  const [helpData, setHelpData] = useState([]);
  const [pageData, setContentDetails] = useState();


  useEffect(getPageObject, []);

  function getPageObject(){
    var Query = Stack.ContentType(config.pageData).Query()
    .language(config.locale)
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
  
  const onChange = (id, value) => {
    
  if (!helpData.some(e => e.id === id)) {
    helpData.push({ id, value });
    }
    const resetTab = helpData.map(tab => {
      return tab.id === id ? { value, id } : { value: false, id: tab.id };
    });
    setHelpData([...resetTab]);

  };

  return !isLoading && (
      <HelpContainerStyled>      
        <Header logoUrl={pageData.faqfooter.url} showBanner={false}></Header>
        <PageTitle title={pageData.pageheading} subtitle={pageData.page_sub_heading} />
          <div>                     
            {
              pageData && pageData.article.map((articleItem, idx) => {
              const dataTab = helpData.find(tab => tab.id === `article${idx}`);
                return (
                  <React.Fragment>
                    { 
                      idx == 0 &&
                      <HelpTitleStyle>{articleItem.section_title}</HelpTitleStyle>
                    }
                    <DropDown
                      head={articleItem.question}
                      onSelect={onChange}
                      id={`article${idx}`}
                      selected={helpData && dataTab ? dataTab.value : false}
                    >
                    <div dangerouslySetInnerHTML={{ __html: articleItem.answer }} />
                  </DropDown>
                </React.Fragment>
                )  
              })
              
            }
        </div>
        <div>                     
            {
              pageData && pageData.help.map((helpItem, idx) => {
              const dataTab = helpData.find(tab => tab.id === `help${idx}`);
                return (
                  <React.Fragment>
                    { 
                      idx == 0 &&
                      <HelpTitleStyle>{helpItem.section_title}</HelpTitleStyle>
                    }
                    <DropDown
                      head={helpItem.helpq}
                      onSelect={onChange}
                      id={`help${idx}`}
                      selected={helpData && dataTab ? dataTab.value : false}
                    >
                    <div dangerouslySetInnerHTML={{ __html: helpItem.rich_text_editor }} />
                    
                  </DropDown>
                </React.Fragment>
                )  
              })
              
            }
        </div>
      </HelpContainerStyled>
  );
};

export default Help;
