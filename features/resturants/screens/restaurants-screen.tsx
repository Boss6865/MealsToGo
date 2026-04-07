import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import React, { useContext } from "react";
import { FlatList, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";
import { ResturantInfoCard } from "../components/resturant-info-Card";
import { Spacer } from "../components/spacer/spacer.component";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && ` margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  // console.log(restaurantContext.restaurants);
  return (
    <SafeAreaProvider>
      <SafeArea>
        <SearchContainer>
          <Searchbar placeholder="Search" />
        </SearchContainer>
        <RestaurantList
          data={restaurantContext.restaurants}
          renderItem={() => (
            <>
              <Spacer position="bottom" size="large">
                <ResturantInfoCard />
              </Spacer>
            </>
          )}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </SafeAreaProvider>
  );
};
