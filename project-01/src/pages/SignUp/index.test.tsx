import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from ".";

const navigateMock = vi.fn();

describe("Testa a página SignUp", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigateMock;
    },
    Link: vi.fn().mockImplementation((props) => props.children),
  }));
  test("Devem haver 3 inputs na minha tela", async () => {
    render(<SignUp />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(3);
  });

  test("Devem haver inputs para nome, e-mail e senha", async () => {
    render(<SignUp />);

    const inputName = await screen.findByPlaceholderText("Insira seu nome");
    const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");
    const inputPassword = await screen.findByPlaceholderText(
      "Insira sua senha"
    );

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  test("Devem haver 1 botão na tela", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("Sign Up");
  });

  test("Devem haver 1 título 'Cadastre-se'", async () => {
    render(<SignUp />);

    const title = await screen.findByRole("heading", {
      level: 2,
    });

    expect(title).toHaveTextContent("Cadastre-se");
  });

  test("Devem navegar para a página de dashboard", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  test("Deve haver um link para a página de login", async () => {
    render(<SignUp />);

    const link = screen.getByText("Já tem cadastro? Clique aqui!");

    expect(link).toBeInTheDocument();
  });
});
