import React from 'react';
import AppLoading from 'expo-app-loading';

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic
} from '@expo-google-fonts/poppins';

import { NativeBaseProvider, extendTheme, } from 'native-base';

import Container from './src/components/Container';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic
  })

  const fontConfig = {
    Poppins: {
      400: {
        normal: "Poppins_400Regular",
        italic: "Poppins_400Regular_Italic",
      },
    },
  };

  const customeColor = {
    primary: {
      50: "#fff1f2",
      100: "#000",
      200: "#04083d",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    amber: {
      400: "#d97706",
    },
  };

  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      heading: "Poppins",
      body: "Poppins",
      mono: "Poppins",
    },
    config: { initialColorMode: "dark" },
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container/>
      </NativeBaseProvider>
    );
  }
}
