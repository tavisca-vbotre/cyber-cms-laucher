import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import { PageBodyStyled, FormTitle, FormButton } from './App.styled';
import { PageMainContainer, FormContainer, FormInnerContainer } from './Components/Container/Container.styled';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Select from './Components/Input/Select';
import Button from './Components/Button/Button.styled';
import clientsData from './config/data';

const clientsList = clientsData.map(o => ({ 
  key: o.key,
  value: o.value,
}));

const getCulturesList = (key) => {
  const selectedClient = clientsData.find(o => o.key === key);
  return selectedClient
   ? selectedClient.cultures || []
   : [];
}

function App() {
  const [ culturesData, setCulturesData ] = useState(getCulturesList('CYBER'))
  const [ state, setState ] = useState({
    client: {
      id: 'client',
      name: 'client',
      value: 'CYBER',
      label: 'Select client: ',
      options: clientsList
    },
    language: {
      id: 'language',
      name: 'language',
      value: 'GB',
      label: 'Select language: ',
      options: getCulturesList('CYBER')
    },
  })

  const onChange = (name, key, selectedValue) => {
    if(name === 'client') {
      const _culturesList = getCulturesList(key)
      setCulturesData(_culturesList);
      setState({
        ...state,
        [name]: {
          ...state[name],
          value: key
        },
        language: {
          ...state.language,
          value: _culturesList[0].key
        }
      });
    } else {
      setState({
        ...state,
        [name]: {
          ...state[name],
          value: key
        }
      });
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const selectedCulture = culturesData.find(o => o.key === state.language.value);
    if(selectedCulture.link)
      window.open(selectedCulture.link, '_blank');
  }

  return (
    <ThemeProvider theme={theme}>
      <PageBodyStyled>
        <Header/>
        <PageMainContainer>
          <FormContainer>
            <FormInnerContainer
              onSubmit={onSubmit}
            >
              <FormTitle>Welcome to Cyber</FormTitle>
              <Select
                onChange={onChange}
                state={state.client}
                options={clientsList}
                errorMessage={''}
              />
              <Select
                onChange={onChange}
                state={state.language}
                options={culturesData}
                errorMessage={''}
              />
              <FormButton>
                <Button>
                  Go to cyber
                </Button>
              </FormButton>
            </FormInnerContainer>
          </FormContainer>
        </PageMainContainer>
        <Footer/>
      </PageBodyStyled>
    </ThemeProvider>
  );
}

export default App;
