import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { styled } from "styled-components/native";
const ResturantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const ResturantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Locality = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  // padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "The Drool",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "100 some random street",
    openingHisOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = resturant;
  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Locality>{address}</Locality>
      </Info>
    </ResturantCard>
  );
};
