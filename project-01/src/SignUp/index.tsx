import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }
  return (
    <div>
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Insira seu nome" />
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
