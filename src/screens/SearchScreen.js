import React, { useState, Fragment } from "react";
import { Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <Fragment>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newTerm) => setSearchTerm(newTerm)}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective."
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier."
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender."
        />
      </ScrollView>
    </Fragment>
  );
};

export default SearchScreen;
