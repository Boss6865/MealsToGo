import { RestaurantScreen } from "@/features/resturants/screens/restaurants-screen";
import { theme } from "@/infrastructure/theme";
import { LocationContextProvider } from "@/services/location/location.context";
import { RestaurantsContextProvider } from "@/services/restaurants/restaurants.context";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
export default function HomeScreen() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <RestaurantScreen />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </>
  );
}
