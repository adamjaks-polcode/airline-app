import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import {IconButton, PaperProvider} from 'react-native-paper';
import theme from './src/config/theme';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home/HomeScreen';
import { StatusBar, Image, View } from 'react-native';
import LocalizationPickerScreen from './src/screens/localization-picker/LocalizationPickerScreen';
import React, {useState} from 'react';
import ProfileScreen from './src/screens/ProfileScreen';
import FlightPickerScreen from './src/screens/flight-picker/FlightPickerScreen';
import BookingStep1Screen from './src/screens/booking/BookingStep1Screen';
import SideMenu from './src/components/SideMenu';
import {Provider} from 'react-redux';
import store from './store';
import { I18nextProvider } from 'react-i18next';
import i18n from './translations/config';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import BookingStep2Screen from './src/screens/booking/BookingStep2Screen';
import BookingStep3Screen from './src/screens/booking/BookingStep3Screen';
import MyBookingsScreen from './src/screens/MyBookingsScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  StatusBar.setBarStyle('dark-content');

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { elevation: 0 },
                cardStyle: { backgroundColor: '#fff' },
                headerRight: () => (
                  <View>
                    <IconButton
                      icon="menu"
                      size={32}
                      onPress={() => setIsSideMenuOpen(!isSideMenuOpen)}
                    />
                    <SideMenu
                      visible={isSideMenuOpen}
                      onHide={() => setIsSideMenuOpen(false)}
                    />
                  </View>
                )
              }}
            >
              <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerLeft: false,
                  title: (
                    <Image
                      source={require('./src/assets/img/logoflymore_small.png')}
                      style={{ width: 'auto', height: 30, aspectRatio: 1 }}
                      resizeMode="contain"
                    />
                  )
                }}
              />
              <Stack.Screen
                name="LocalizationPickerScreen"
                component={LocalizationPickerScreen}
                options={{
                  title: 'Localization',
                  headerLeft: () => (
                    <Image
                      source={require('./src/assets/img/logoflymore_small.png')}
                      style={{ width: 'auto', height: 30, aspectRatio: 1 }}
                      resizeMode="contain"
                    />
                  )
                }}
              />
              <Stack.Screen
                name="FlightPickerScreen"
                component={FlightPickerScreen}
                options={{
                  title: 'Warsaw - Maledives'
                }}
              />
              <Stack.Screen
                name="BookingStep1Screen"
                component={BookingStep1Screen}
              />
              <Stack.Screen
                name="BookingStep2Screen"
                component={BookingStep2Screen}
                options={{
                  title: 'Choose a seat'
                }}
              />
              <Stack.Screen
                name="BookingStep3Screen"
                component={BookingStep3Screen}
                options={{
                  title: 'Summary'
                }}
              />
              <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                  title: 'Profile'
                }}
              />
              <Stack.Screen
                name="MyBookingsScreen"
                component={MyBookingsScreen}
                options={{
                  title: 'My bookings'
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </I18nextProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;