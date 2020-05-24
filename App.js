import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./src/components/RootNavigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Details" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
