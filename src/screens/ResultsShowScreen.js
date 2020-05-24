import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const { id } = route.params;
  const [result, setResults] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    result && (
      <View style={styles.container}>
        <Text style={styles.title}>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default ResultsShowScreen;
