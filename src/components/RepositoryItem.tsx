import { StyleSheet, Text, View } from "react-native";

export const RepositoryItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 5 }}>
        fullName: {repo.fullName}
      </Text>
      <Text>language: {repo.language}</Text>
      <Text>description: {repo.description}</Text>
      <Text>forksCount: {repo.forksCount}</Text>
      <Text>stargazersCount: {repo.stargazersCount}</Text>
      <Text>ratingAverage: {repo.ratingAverage}</Text>
      <Text>reviewCount: {repo.reviewCount}</Text>
      <Text>ownerAvatarUrl: {repo.ownerAvatarUrl}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});