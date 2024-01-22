import {  Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { RepositoryList } from "./components/RepositoryList";
import { AppBar } from "./components/AppBar";

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
          <AppBar  navigation={navigation}/>
          <RepositoryList />
      </View>
        
  );
}

function LoginScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Login</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();
export const Main = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="RepositoryList" screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="RepositoryList" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>        
      </Stack.Navigator>
      
    </NavigationContainer>


  );
};
