import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.styleSearch}>
            <Text>Search</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text>Meals To Go! OO</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
  },
  styleSearch: {
    padding: 16,
    backgroundColor: "green",
  },
});
