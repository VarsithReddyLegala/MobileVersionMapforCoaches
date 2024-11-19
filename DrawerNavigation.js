import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ResumeQuestionnaire from './screens/ResumeQuestionnaire';
import StartResumeQuestionnaire from './screens/StartResumeQuestionnaire';
import About from './screens/About';
import Resources from './screens/Resources';
import Home from './screens/home';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Resume Questionnaire" component={ResumeQuestionnaire} />
        <Drawer.Screen name="Start or Resume Questionnaire" component={StartResumeQuestionnaire} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Resources" component={Resources} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}