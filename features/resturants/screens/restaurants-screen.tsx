import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import React, { useContext } from "react";
import { FlatList, StatusBar } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";
import { ResturantInfoCard } from "../components/resturant-info-Card";
import { Search } from "../components/search.component";
import { Spacer } from "../components/spacer/spacer.component";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && ` margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  // console.log(restaurantContext.restaurants);
  return (
    <SafeAreaProvider>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={MD2Colors.red800} />
          </LoadingContainer>
        )}
        <Search />
        <RestaurantList
          data={restaurants}
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
