import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../style/logo.png";
import vinho from "../../style/vinho.jpg"
import background from "../../style/background.jpg";
import visa from "../../style/pagamentos/Visa.svg";
import mastercard from "../../style/pagamentos/Mastercard.svg";
import amex from "../../style/pagamentos/Amex.svg";
import diners from "../../style/pagamentos/Diners.svg";
import elo from "../../style/pagamentos/Elo.svg";
import discover from "../../style/pagamentos/Discover.svg";
import hipercard from "../../style/pagamentos/Hipercard.svg";
import boleto from "../../style/pagamentos/Boleto.svg";
import applepay from "../../style/pagamentos/ApplePay.svg";
import googlepay from "../../style/pagamentos/GooglePay.svg";
import siteblindado from "../../style/seguranca/logo_site_blindado.svg";
import ebit from "../../style/certificados/ebit.png";
import ra from "../../style/certificados/RA_1000.svg";

export default function Home() {
  const [products, setProducts] = React.useState([]);
  const [currentsProduct, setCurrentUser] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("http://localhost:3000/products/all")
    .then((response) => response.json())
    .then((data) => setProducts(data));
  }, []);

  const handleClick = (event) => {
    navigate(`/Description/${event.currentTarget.id}`)
  };

  const handleLoad = (event) => {
    console.log("funci");
  };

  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} />
        <nav className="nav">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#">Vinhos</a></li>
            <li><a href="#">Kits</a></li>
            <li><a href="#">Acessórios</a></li>
            <li><a href="#">Clube</a></li>
            <li><a href="Login">Entrar</a></li>
          </ul>
        </nav>
      </header>
    <section class="banner">
        <img src={background}/>
      </section>

      <h1>Produtos</h1>
      <section className="produtos">  
        <div className="item">
          <div class="item-title">
            <div className="item-conteudo">
              <a href="/product/ab-imis-vino-rosso-puglia-igt-222851.html"></a>
              <div className="div-item-figure">
                <figure className="item-figure">
                  <img src={vinho}/>
                </figure>
              </div>
              <div className="item-figure-description">
                Descrição do vinho
              </div>
              <div className="button-container">
                <button className="add-button">Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">
            <div className="item-conteudo">
              <a href="/product/ab-imis-vino-rosso-puglia-igt-222851.html"></a>
              <div className="div-item-figure">
                <figure className="item-figure">
                  <img src={vinho}/>
                </figure>
              </div>
              <div className="item-figure-description">
                Descrição do vinho
              </div>
              <div className="button-container">
                <button className="add-button">Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">
            <div className="item-conteudo">
              <a href="/product/ab-imis-vino-rosso-puglia-igt-222851.html"></a>
              <div className="div-item-figure">
                <figure class="item-figure">
                  <img src={vinho}/>
                </figure>
              </div>
              <div className="item-figure-description">
                Descrição do vinho
              </div>
              <div className="button-container">
                <button className="add-button">Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">
            <div class="item-conteudo">
              <a href="/product/ab-imis-vino-rosso-puglia-igt-222851.html"></a>
              <div className="div-item-figure">
                <figure className="item-figure">
                  <img src={vinho}/>
                </figure>
              </div>
              <div className="item-figure-description">
                Descrição do vinho
              </div>
              <div className="button-container">
                <button className="add-button">Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        </div>
      </section>
        <footer className="footer">
        <div className="footer-pagamento">
          <p>Pagamento</p>
          <ul>
            <li>
              <img src={visa} alt="visa"/>
            </li>
            <li>
              <img src={mastercard} alt="mastercard"/>
            </li>
            <li>
              <img src={amex} alt="amex"/>
            </li>
            <li>
              <img src={diners} alt="diners"/>
            </li>
            <li>
              <img src={elo} alt="elo"/>
            </li>
            <li>
              <img src={discover} alt="discover"/>
            </li>
            <li>
              <img src={hipercard} alt="hipercard"/>
            </li>
            <li>
              <img src={boleto} alt="boleto"/>
            </li>
            <li>
              <img src={applepay} alt="applepay"/>
            </li>
            <li>
              <img src={googlepay} alt="googlepay"/>
            </li>
          </ul>
        </div>
        <div className="footer-pagamento">
          <p>Segurança</p>
          <ul>
            <li>
              <img src={siteblindado} alt="site_blindado"/>
            </li>
          </ul>  
        </div>
        <div className="footer-pagamento">
          <p>Certificados</p>
          <ul>
            <li>
              <img src={ebit} alt="ebit"/>
            </li>
            <li>
              <img src={ra} alt="RA_100"/>
            </li>
          </ul>
        </div>
      </footer>
      </div>
  );
}
