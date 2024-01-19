import Constants from "expo-constants";
import { Text, View } from "react-native";

import { RepositoryList } from "./components/RepositoryList";
import { AppBar } from "./components/AppBar";
export const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />

      <RepositoryList />
    </View>
  );
};
