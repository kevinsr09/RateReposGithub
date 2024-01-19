import { Image, StyleSheet, Text, View } from "react-native";
import { RepositoryStats } from "./RepositoryStats";

const RepositoryHeader = ({ fullName, description, language, ownerAvatarUrl }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image source={{ uri: ownerAvatarUrl }} style={{ width: 48, height: 48, borderRadius: 4 }}/>

      <View style={{ flex: 1,paddingLeft: 10, gap: 5}}>
        <Text style={{ fontWeight: "bold", fontSize: 16,  }}>
          {fullName}
        </Text>
        <Text style={{ backgroundColor: "blue", padding: 5, borderRadius: 5, color: "white", alignSelf: "flex-start" }}>{language}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}


export const RepositoryItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>

      <RepositoryHeader  {...repo}/>
      

      <RepositoryStats
        stargazersCount={repo.stargazersCount}
        forksCount={repo.forksCount}
        reviewCount={repo.reviewCount}
        ratingAverage={repo.ratingAverage}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});