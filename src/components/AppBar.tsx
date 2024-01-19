import { Text, View } from "react-native";

import Constants from "expo-constants";

export const AppBar = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight + 10, paddingLeft: 10}}>
      <Text style={{ fontSize: 20, fontWeight: "bold"}}>Rate Repositoires Github</Text>
    </View>
  );
}