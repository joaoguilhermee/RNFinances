import { useCallback } from 'react';
import { View } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './routes/app.routes';

import theme from './src/global/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
      }}
      onLayout={onLayoutRootView}
    >
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </View>
  );
}
