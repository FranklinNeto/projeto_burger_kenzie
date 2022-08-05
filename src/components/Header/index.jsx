import { useState } from "react";
import { ContainerHeader } from "./styles";
import { Button } from "../Button/styles";

function Header({ products, setProducts }) {
  const [inputSearch, setInputSearch] = useState("");

  function searchProducts() {
    const textValue = inputSearch.trim().toLowerCase();
    const productsOriginals = [...products];

    if (textValue !== "") {
      setProducts(
        productsOriginals.filter(
          (product) =>
            product.name.toLowerCase().includes(textValue) ||
            product.category.toLowerCase().includes(textValue)
        )
      );
    }
  }

  return (
    <ContainerHeader>
      <div>
        <h1>Burger</h1>
        <h2>Kenzie</h2>
      </div>

      <div>
        <input
          value={inputSearch}
          placeholder="Digitar Pesquisa"
          onChange={(event) => {
            setInputSearch(event.target.value);
          }}
        ></input>
        <Button
          type="button"
          onClick={(event) => searchProducts(event.preventDefault())}
        >
          Pesquisar
        </Button>
      </div>
    </ContainerHeader>
  );
}
export default Header;
