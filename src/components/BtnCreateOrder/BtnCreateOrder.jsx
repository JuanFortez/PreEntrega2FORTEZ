import { Box, Button } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { CartContext } from "../../context";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export const BtnCreateOrder = () => {
  const { cartState } = useContext(CartContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

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
        address: address,
        country: country,
        state: state,
        zip: zip,
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
      }).then(() => {
        window.location.reload();
      });
    });
  };

  return (
    <Box>
      <Button colorScheme="teal" size="lg" onClick={handleCreateOrder}>
        Crear orden
      </Button>
    </Box>
  );
};
