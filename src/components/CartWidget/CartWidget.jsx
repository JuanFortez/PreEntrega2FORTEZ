import { useContext } from "react";

import { Flex, Text } from "@chakra-ui/react";
import { FaBagShopping } from "react-icons/fa6";
import { CartContext } from "../../context";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  const { cartState } = useContext(CartContext);

  const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, "");

  return (
    <Link to="/checkout">
      <Flex alignItems={"center"} height={"100%"} width={"60px"}>
        <FaBagShopping size={30} />
        <Text fontSize={"1.5rem"} margin={0}>
          {qtyTotalItems}
        </Text>
      </Flex>
    </Link>
  );
};
