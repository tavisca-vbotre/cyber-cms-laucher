import React, {useEffect, useState} from 'react';

import { HelpContainerStyled, HelpTitleStyle} from './Help.styled';
import PageTitle from '../PageTitle/PageTitle';
import DropDown from '../DropDown/DropDown';

import { Stack, config} from '../../config/contentstack.config'
import Header from '../../Components/Header';


const Help = () => {

  const [isLoading, setSelected] = useState(true);
  const [articleList, setAppDetails] = useState(null);
  const [helpList, setHelpDetails] = useState(null);

  const [helpData, setHelpData] = useState([]);
  const [pageData, setContentDetails] = useState();

  useEffect(getArticelList, []);
  
  useEffect(getHelpList, []);

  function getArticelList(){
      const ArticleListQuery = Stack.ContentType(config.articles).Query()
      .language(config.locale)
      .toJSON()
      .find()
      .then((result) => {
        setAppDetails(result[0].sort((a, b) => {
          return a.title - b.title;
        }))
        
      })
      .catch((error) => {
        console.log(error)
      });
      
  }
  function getHelpList(){
    var HelpListQuery = Stack.ContentType(config.help).Query()
    .language(config.locale)
    .toJSON()
    .find()
    .then((result) => {
      setHelpDetails(result[0].sort((a, b) => {
        return a.title - b.title;
      }))
      
    })
    .catch((error) => {
      console.log(error)
    });
    
}
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
        <Header logoUrl={pageData.logo.url} showBanner={pageData.banner.show_banner_image}></Header>
        <PageTitle title={pageData.title1} subtitle={pageData.subtitle} />
          <div>                     
            {
              articleList && articleList.map((articleItem, idx) => {
              const dataTab = helpData.find(tab => tab.id === articleItem.title);
                return (
                  <React.Fragment>
                    { 
                      idx == 0 &&
                      <HelpTitleStyle>{articleItem.section_title}</HelpTitleStyle>
                    }
                    <DropDown
                      head={articleItem.question}
                      onSelect={onChange}
                      id={articleItem.title}
                      selected={helpData && dataTab ? dataTab.value : false}
                    >
                    {articleItem.answer}
                  </DropDown>
                </React.Fragment>
                )  
              })
              
            }
        </div>
        <div>                     
            {
              helpList && helpList.map((helpItem, idx) => {
              const dataTab = helpData.find(tab => tab.id === helpItem.title);
                return (
                  <React.Fragment>
                    { 
                      idx == 0 &&
                      <HelpTitleStyle>{helpItem.section_title}</HelpTitleStyle>
                    }
                    <DropDown
                      head={helpItem.question}
                      onSelect={onChange}
                      id={helpItem.title}
                      selected={helpData && dataTab ? dataTab.value : false}
                    >
                    <div dangerouslySetInnerHTML={{ __html: helpItem.answer }} />
                    
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
