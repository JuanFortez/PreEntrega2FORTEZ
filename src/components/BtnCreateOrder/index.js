export * from "./BtnCreateOrder";

document.addEventListener("DOMContentLoaded", () => {
  cargarDatosCliente();
});

const checkoutButton = document.getElementById("checkout-btn");

checkoutButton.addEventListener("click", (event) => {
  event.preventDefault();

  const saveInfoChecked = document.getElementById("save-info").checked;

  if (saveInfoChecked) {
    guardarDatosCliente();
  }
});

const guardarDatosCliente = () => {
  const cliente = {
    nombre: document.getElementById("firstName").value,
    apellido: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    country: document.getElementById("country").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("codigoPostal").value,
  };

  localStorage.setItem("cliente", JSON.stringify(cliente));
};

const cargarDatosCliente = () => {
  const cliente = JSON.parse(localStorage.getItem("cliente"));
  if (cliente) {
    document.getElementById("firstName").value = cliente.firstName;
    document.getElementById("lastName").value = cliente.lastName;
    document.getElementById("email").value = cliente.email;
    document.getElementById("address").value = cliente.address;
    document.getElementById("address2").value = cliente.address2;
    document.getElementById("country").value = cliente.country;
    document.getElementById("state").value = cliente.state;
    document.getElementById("codigoPostal").value = cliente.zip;
  }
};
