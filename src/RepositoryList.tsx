import { Text, View } from "react-native";

import { repositories } from "./repositories";

export const RepositoryList = () => {
  return (
    <View>
      {repositories.map((repository) => (
        <View key={repository.id}>
          <Text>{repository.fullName}</Text>
        </View>
      ))}
    </View>
  );
};
