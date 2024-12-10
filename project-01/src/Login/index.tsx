import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Login() {
  const navigate = useNavigate();
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }
  return (
    <div className={styles.container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />
        <button>Login</button>
      </form>
    </div>
  );
}
