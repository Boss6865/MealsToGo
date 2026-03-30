import { Text } from "react-native";
export const ResturantInfo = ({ resturant = {} }) => {
  const {
    name = "Some Resturant",
    icon,
    photos = [
      "https://www.pexels.com/photo/tables-decoration-in-living-room-20182285/",
    ],
    address = "100 some random street",
    openingHisOpenNowo = true,
    rating = 4,
    isClosedTemporarily,
  } = resturant;
  return <Text>{name}</Text>;
};
