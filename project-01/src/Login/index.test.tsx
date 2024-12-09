import { render, screen } from "@testing-library/react";
import Login from ".";

describe("Testa o component de Login", () => {
  test("Deve haver um título escrito 'Sign In'", async () => {
    render(<Login />);

    const title = await screen.findByRole("heading", {
      name: "Sign In",
    });

    expect(title).toBeInTheDocument();
  });

  test("Devem haver dois inputs na minha tela", async () => {
    render(<Login />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(2);
  });

  test("Devem haver um botão na na minha tela", async () => {
    render(<Login />);

    const button = await screen.findByRole("button");

    expect(button.textContent).toBe("Login");
  });

  test("Deve Haver um input para e-mail", async () => {
    render(<Login />);

    const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");

    expect(inputEmail).toBeInTheDocument();
  });

  test("Deve Haver um input para senha", async () => {
    render(<Login />);

    const inputSenha = await screen.findByPlaceholderText("Insira sua senha");

    expect(inputSenha).toBeInTheDocument();
  });
});
