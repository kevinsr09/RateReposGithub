import { FlatList, Text } from "react-native";

import { RepositoryItem } from "./RepositoryItem";
import { repositories } from "../repositories";

export const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repo }) => <RepositoryItem repo={repo} />}
      
    />
  );
};
