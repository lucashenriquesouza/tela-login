import "./Login.css";
function Login() {
  return (
    <div className="container">
      <div className="login">
        <div className="sub-card">
          <h1 className="bemvindo">Bem Vindo</h1>
          <form className="inputs">
            <label htmlFor="login-email">
              <span>Usuario </span>
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="Digite o Usuario"
            />

            <label htmlFor="login-senha">
              <span>Senha </span>
            </label>
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
    </div>
  );
}

export default Login;
