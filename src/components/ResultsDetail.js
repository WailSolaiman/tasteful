import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  image: {
    width: 275,
    height: 150,
    borderRadius: 5,
  },
});

export default ResultsDetail;
