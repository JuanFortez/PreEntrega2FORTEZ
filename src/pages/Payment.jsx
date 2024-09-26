import { Flex } from "@chakra-ui/react";
import { BtnCreateOrder, FormPayment } from "../components";

export const Payment = () => {
  return (
    <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
      <h1>Checkout</h1>
      <FormPayment />
      <BtnCreateOrder />
    </Flex>
  );
};
