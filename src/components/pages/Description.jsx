import React from "react";

export default function Description() {
  return (
    <div>
      <header>
        <div id="home">
          <h1>Tenis Store</h1>
        </div>
        <div id="divBusca">
          <input type="text" id="txtBusca" placeholder="Buscar..." />
          <button id="btnBusca">Buscar</button>
        </div>
        <div>
          <a href="./carrinho.html">
            <img id="cart-icon" src="./style/126510.png" alt="" srcset="" />
          </a>
        </div>
      </header>
      <li id="menu-content">
        <ol>Todas as categorias</ol>
        <ol>Ofertas</ol>
        <ol>Mais vendidos</ol>
        <ol>Outlet</ol>
      </li>
      <div className="f1">
        <footer className="id1">
          <ul className="list-footer">
            <li className="nav-item">Home</li>
            <li className="nav-item">Fale Conosco</li>
            <li className="nav-item">Cadastro</li>
            <li className="nav-item">Política de Privacidade</li>
          </ul>
          <div className="f2"></div>
          <p className="txt-center">© 2022 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
}
