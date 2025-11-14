import { criarUsuario } from "../../../support/commands";

describe("Logar Usuário", () => {
  context("Cenários de sucesso", () => {
    it("Login com sucesso", () => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("apiUrl")}/login`,
        body: {
          "email": "carolina@qa.com",
          "password": "teste"
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("message").to.contain("Login realizado com sucesso");
      });
    });
    });
  context("Cenários de falha", () => {
    it("Login com falha", () => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("apiUrl")}/login`,
        body: {
          "email": "fulano@qa.com",
            "password": "teste12",
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body).to.have.property("message").to.contain("Email e/ou senha inválidos");
      });
    });
    });
  });
