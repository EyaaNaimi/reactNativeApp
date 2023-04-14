import React from 'react' ;
import Login from './screens/login';
import SignUp from './screens/signUp';
import CustomerReviews from './screens/customerReviews';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack= createStackNavigator();

function App(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='CustomerReviews' component={CustomerReviews} />
    </Stack.Navigator>
  )
}
export default()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}