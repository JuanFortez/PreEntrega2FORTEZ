import { Box, Button } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export const BtnCreateOrder = () => {
  const { cartState } = useContext(CartContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const total = cartState.reduce(
    (acc, item) => acc + item.price * item.qtyItem,
    0
  );

  const handleCreateOrder = () => {
    const orderObj = {
      buyer: {
        name: name,
        lastName: lastName,
        email: email,
      },
      items: cartState.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.qtyItem,
        };
      }),
      total: total,
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, orderObj).then(({ id }) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved:" + id,
        showConfirmButton: false,
        timer: 2000,
      });
    });
  };

  return (
    <Box>
      <Button id="checkout-btn" colorScheme="teal" size="lg" onClick={handleCreateOrder}>
        Crear Orden
      </Button>
    </Box>
  );
};
