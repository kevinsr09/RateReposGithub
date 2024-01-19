import { StyleSheet, Text, View } from "react-native"
import { RepositoryStatsItem } from "./RepositoryStatsItem";

export const RepositoryStats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  return(
    <View style={styles.container}>
      {
        info(stargazersCount, forksCount, reviewCount, ratingAverage ).map(({label, value}) => (
          <RepositoryStatsItem
            key={label}
            label={label}
            value={value}
          />
        ))
      }
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
  },

  text: {
    fontWeight: "bold",
  }

});


const info = ( stargazersCount, forksCount, reviewCount, ratingAverage ) => [
  {
    label: "Stars",
    value: stargazersCount,
  },
  {
    label: "Forks",
    value: forksCount,
  },
  {
    label: "Reviews",
    value: reviewCount,
  },
  {
    label: "Rating",
    value: ratingAverage,
  },
]