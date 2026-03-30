import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";
import { ResturantInfoCard } from "../components/resturant-info-Card";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && ` margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const ResturantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color:color: ${(props) => props.theme.colors.ui.primary};
`;
export const RestaurantScreen = () => (
  <SafeAreaProvider>
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <ResturantListContainer>
        <ResturantInfoCard />
      </ResturantListContainer>
    </SafeArea>
  </SafeAreaProvider>
);
