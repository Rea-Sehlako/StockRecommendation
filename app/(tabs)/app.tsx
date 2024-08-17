import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionnaireScreen from '@/screens/QuestionnaireScreen';
import StockSuggestions from '@/screens/StockSuggestions';
import StockDetails from '@/screens/StockDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    //<NavigationContainer>
      <Stack.Navigator initialRouteName="Questionnaire">
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
        <Stack.Screen name="StockSuggestions" component={StockSuggestions} />
        <Stack.Screen name="StockDetails" component={StockDetails} />
      </Stack.Navigator>
    //</NavigationContainer>
  );
}
