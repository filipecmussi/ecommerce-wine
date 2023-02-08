import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../style/logo.png";
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
            <li><a href="#">Home</a></li>
            <li><a href="#">Vinhos</a></li>
            <li><a href="#">Kits</a></li>
            <li><a href="#">Acessórios</a></li>
            <li><a href="#">Clube</a></li>
            <li><a href="#">Entrar</a></li>
          </ul>
        </nav>
      </header> 
      <section className="login">
        <div className="row">
          <div className="col s41">
            <h2>Já tenho cadastro</h2>
            <div className="form_login">
              <div>
                <span>Acesse com seus dados:</span>
              </div>
              <form className="m_top_10">
                <div className="row m_bottom_12">
                  <div className="col s100">
                    <label for>E-mail ou CPF/CNPJ*:</label>
                    <input className="form_control"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col s100 m_bottom_5">
                    <label for>Senha*:</label>
                    <input className="form_control"/>
                  </div>

                </div>
                <div className="row m_bottom_12">
                </div>
                <div className="row">
                  <div className="col s100">
                    <button type="submit" className="btn_pattern brown_btn w110 p13_0 fleft m_top_10">Entrar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col s18 text_center">
            <img src=""/>
          </div>

          <div className="col s41">
            <h2>Não tenho cadastro</h2>
            <div className="form_login">
              <div>
                <span>Criar cadastro:</span>
              </div>
              <form className="m_top_10">
                <div className="row m_bottom_12">
                  <div className="col s100">
                    <label for>Nome Completo*:</label>
                    <input className="form_control"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col s100 m_bottom_5">
                    <label for>E-mail*:</label>
                    <input className="form_control"/>
                  </div>
                </div>
                <div className="row m_bottom_12">

                </div>
                <div className="row m_top_40">
                  <div className="col s100">
                    <button type="submit" className="btn_pattern brown_btn w110 p13_0 fleft m_top_10">Prosseguir</button>
                  </div>
                </div>
              </form>
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
