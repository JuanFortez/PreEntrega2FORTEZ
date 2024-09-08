import { Flex, Text } from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";

export const CartWidget = () => {
  return (
    <Flex
      alignItems={"center"}
      height={"100%"}
      justifyContent={"space-between"}
      width={"60px"}
    >
      <IoCartOutline size={30} />
      <Text fontSize={"1.5rem"}>0</Text>
    </Flex>
  );
};
