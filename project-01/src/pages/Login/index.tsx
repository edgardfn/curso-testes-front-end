import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />
        <button>Login</button>
        <Link to="/sign-up">Não tem cadastro? Clique aqui!</Link>
      </form>
    </div>
  );
}
