import open from "@/assets/open";
import star from "@/assets/star";

import React from "react";
import { Image, Text } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { styled } from "styled-components/native";
import { Spacer } from "./spacer/spacer.component";
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
const Rating = styled.View`
  flex-direction: row;
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "The Drool",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://picsum.photos/700"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = resturant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((no_of_arr) => (
              <SvgXml xml={star} width={20} height={20} key={no_of_arr} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            {/* <View style={{ paddingLeft: 16 }} /> */}
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Locality>{address}</Locality>
      </Info>
    </ResturantCard>
  );
};
