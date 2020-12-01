const baseColors = {
    primaryColor: '#000',
    primaryColorDarker: '#000',
  };
  
  const defaultThemeConfig = {
    colors: {
      menuAndFontColor: '#475062',
      menuAndFontColorLight: 'rgba(62, 71, 86, 0.75)',
      lightTextColor: '#E4E4E4',
      primaryColor: baseColors.primaryColor,
      primaryColorDarker: baseColors.primaryColorDarker,
      secondaryColor: '#97ACCF',
      secondaryColorLighter: '#e9f5ff',
      backgroundColor: '#377a6c',
      headerTxtColor: '#fff',
      headerBackgroundColor: '#377a6c',
      headerBackgroundDashColor: 'transparent',
      footerTxtColor: '#fff',
      footerBackgroundColor: '#f7f7f7',
      landingSectBgColor: 'linear-gradient(to bottom right, #0d2f7f, #0bd1ff)',
      primaryButtonColor: baseColors.primaryColor,
      primaryButtonDarkerColor: baseColors.primaryColorDarker,
      primaryButtonLightColor: '#fff',
      lightColor: '#fff',
      transparent: 'transparent',
      disabled: {
        buttonColorDisabled: 'rgba(48, 102, 190, 0.5)',
        buttonColorDisabledBorder: 'rgba(48, 102, 190, 0.1)',
      },
    },
    error: {
      font: 'rgb(215, 18, 43)',
      alertRedColor: 'rgba(215, 18, 43, 0.1)',
      alertYellowColor: 'rgba(252, 193, 51, 0.1)',
      border: {
        alertMediumBorder: '1.5px solid #E12B38',
        alertYellowColor: '1.5px solid #FCC133',
      },
    },
    border: {
      lightBorder: '0.7px solid #5E5E5E',
      mediumBorder: '1.5px solid #5E5E5E',
      largeBorder: '5px solid #5E5E5E',
    },
    fonts: 'Roboto, sans-serif',
    fontSizes: {
      small: '1em',
      medium: '1.2em',
      large: '1.35em',
      xLarge: '2em',
    },
    screenSizes: {
      screenLg: '1200px',
      screenL: '1024px',
      screenMd: '900px',
      screenSm: '768px',
      screenS: '580px',
      screenXs: '480px',
      screenXxs: '320px',
    },
    animate: {
      stepBar: 'progress-animation 2s ease-in-out',
    },
    brandLogo: {
      height: 'auto',
    },
  };
  
  export { defaultThemeConfig as default };
  