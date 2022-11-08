import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import { useFonts } from "expo-font";
import { typography } from "./src/theme/typography";
import Text from "./src/components/text/text";
import { NavigationContainer,DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Antonio-medium": require("./assets/Font/Antonio-medium.ttf"),
    // 'LeagueSpartan-Bold.ttf':require('./assets/Font/LeagueSpartan-Bold.ttf'),
    "LeagueSpartan-regular.ttf": require("./assets/Font/LeagueSpartan-regular.ttf"),
  });

  if (!loaded) {
    return <Text>Font is Loading....</Text>;
  }


  return (
    <>
{/*    
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="light"/> */}

    <Text preset="h1" style={{backgroundColor:"black",marginTop:100,color:'white'}}>
      Please Do It.
    </Text>
    <Text preset="">
      welcome
    </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    //ackgroundColor:"black",
    alignItems: "center",
    justifyContent: "center",
  },
});
