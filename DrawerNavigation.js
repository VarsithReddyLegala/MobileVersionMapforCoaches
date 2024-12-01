import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Questionnaire from './screens/Questionnaire';
import About from './screens/About';
import Resources from './screens/Resources';
import Home from './screens/home';
import Question from './screens/questions.js'
import Survey from './screens/survey.js'
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Questionnaire" component={Questionnaire} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Resources" component={Resources} />
        <Drawer.Screen name="Question" component={Question} />
        <Drawer.Screen name="Survey" component={Survey}/>
      </Drawer.Navigator>
    </NavigationContainer>
  
  );
}