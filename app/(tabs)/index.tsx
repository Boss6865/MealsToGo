import { RestaurantScreen } from "@/features/resturants/screens/restaurants-screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
export default function HomeScreen() {
  return (
    <>
      <RestaurantScreen />

      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </>
  );
}
