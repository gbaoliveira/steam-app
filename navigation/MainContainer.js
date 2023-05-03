import * as React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GameScreen from './screens/GameScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'
import { BorderlessButton } from 'react-native-gesture-handler';

const gameName = 'game'
const notificationsName = 'notifications'
const profileName = 'profile'

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName={profileName}
          screenOptions={({ route }) => ({
            tabBarStyle:{borderTopWidth:0, height: 70},
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

  
              if (rn === profileName) {
                iconName = focused ? 'person' : 'person-outline';
  
              } else if (rn === notificationsName) {
                iconName = focused ? 'notifications' : 'notifications-outline';
  
              } else if (rn === gameName) {
                iconName = focused ? 'game-controller' : 'game-controller-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} style={{marginTop: 10}} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#1a97ff',
            inactiveTintColor: '#dfe3e6',
            inactiveBackgroundColor: '#1f2127',
            activeBackgroundColor: '#1f2127',
            labelStyle: { paddingBottom: 10, fontSize: 10},
          }}>
            
          <Tab.Screen name={profileName} component={ProfileScreen} />
          <Tab.Screen name={notificationsName} component={NotificationScreen} />
          <Tab.Screen name={gameName} component={GameScreen} />
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  export default MainContainer;