import Constants from "expo-constants";
import { Text, View } from "react-native";

import { RepositoryList } from "./RepositoryList";
export const Main = () => {
  return (
    <View
      style={{ marginTop: Constants.statusBarHeight, backgroundColor: "red" }}
    >
      <Text>hello world</Text>

      <RepositoryList />
    </View>
  );
};
