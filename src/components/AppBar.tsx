import { Button, ScrollView, Text, View } from "react-native";

import Constants from "expo-constants";

import { Navigate } from "react-router-native";


function BarItem({ navigation, label }) {

  return (
    <View >

      <Button title={label} onPress={() => navigation.navigate(label)} />
        
    </View>
  );
}

export const AppBar = ({navigation}) => {
  return (

    <View style={{ marginTop: Constants.statusBarHeight + 10}}>
      <ScrollView horizontal style={{  paddingBottom: 10  }}>
          <BarItem label="Repositories" navigation={navigation}/>
          <BarItem label="Login"   navigation={navigation}/>
          <BarItem label="Sign Up"  navigation={navigation}/>

      </ScrollView>
    </View>
  );
}