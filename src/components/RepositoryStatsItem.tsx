import { StyleSheet, Text, View } from "react-native";

export const RepositoryStatsItem = ({ label, value }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  label:{
    color: "blue",
    paddingBottom: 5
  }
});