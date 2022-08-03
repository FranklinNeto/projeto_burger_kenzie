import { useState } from "react";

function Header({ products, setProducts }) {
  const [inputSearch, setInputSearch] = useState("");

  function searchProducts() {
    const textValue = inputSearch.trim().toLowerCase();

    if (textValue !== "") {
      setProducts(
        products.filter(
          (product) =>
            product.name.toLowerCase().includes(textValue) ||
            product.category.toLowerCase().includes(textValue)
        )
      );
    }
  }

  return (
    <header>
      <img className="logo" alt="" />
      <div>
        <input
          value={inputSearch}
          placeholder="Digitar Pesquisa"
          onChange={(event) => {
            setInputSearch(event.target.value);
          }}
        ></input>
        <button
          type="button"
          onClick={(event) => searchProducts(event.preventDefault())}
        >
          Pesquisar
        </button>
      </div>
    </header>
  );
}
export default Header;
