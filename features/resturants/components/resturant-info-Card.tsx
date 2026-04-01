import open from "@/assets/open";
import star from "@/assets/star";
import React from "react";
import { SvgXml } from "react-native-svg";
import {
  Icon,
  Info,
  Locality,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from "./resturant-info-card.styles";
import { Spacer } from "./spacer/spacer.component";
import { Text } from "./typography/text.component";

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "The Drooling",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://picsum.photos/700"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = resturant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((no_of_arr) => (
              <SvgXml xml={star} width={20} height={20} key={no_of_arr} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            {/* <View style={{ paddingLeft: 16 }} /> */}
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Locality>{address}</Locality>
      </Info>
    </RestaurantCard>
  );
};
