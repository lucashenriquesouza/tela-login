import "./Login.css";
import Video from "../img/Rainbow.webm";
import Logo from "../img/r6-logo.png";

function Login() {
  return (
    <div className="container">
      <div className="login">
        <div className="sub-card">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <form className="inputs">
            <label htmlFor="login-email">
              <span>LOGIN </span>
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="Digite o Usuario"
            />

            <label htmlFor="login-senha"></label>
            <input
              id="login-senha"
              type="password"
              placeholder="Digite sua Senha"
            />
          </form>

          <div className="extra">
            <div className="checkbox">
              <input
                className="checkbox"
                value="lembre-me"
                type="checkbox"
                name="lembre-me"
                id="login-checkbox"
              />
              <label htmlFor="login-checkbox">Lembre-me</label>
            </div>
            <a href="#">Esqueceu senha</a>
          </div>
        </div>
        <input className="submit" type="submit" value="Entrar" />
        <h3 className="criar-conta">
          Ainda não tem conta?<a href="#"> Criar Conta</a>
        </h3>
      </div>
      <div className="video">
        <video autoPlay loop muted>
          <source src={Video} type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export default Login;
