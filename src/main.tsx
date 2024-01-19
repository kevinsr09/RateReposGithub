import Constants from "expo-constants";
import { Text, View } from "react-native";

import { RepositoryList } from "./RepositoryList";
export const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          padding: 10,
        }}
      >
        hello world
      </Text>

      <RepositoryList />
    </View>
  );
};
