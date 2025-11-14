describe("Listar carrinho", () => {
  context("Cenários de sucesso", () => {
    it("Listar carrinho", () => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("apiUrl")}/carrinhos`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body)
          .to.have.property("quantidade")
          .and.to.be.a("number");
        expect(response.body)
          .to.have.property("carrinhos")
          .and.to.be.an("array");

        if (response.body.carrinhos.length > 0) {
          const primeiroCarrinho = response.body.carrinhos[0];
          expect(primeiroCarrinho).to.have.all.keys(
            "_id",
            "idUsuario",
            "produtos",
            "precoTotal",
            "quantidadeTotal"
          );
        }
      });
    });
    it("Listar carrinho por id", () => {
      const carrinhoIdExistente = "qbMqntef4iTOwWfg";
      it("3.1: Deve retornar status 200 e os detalhes do carrinho ao buscar por um ID existente", () => {
        cy.request({
          method: "GET",
          url: `/carrinhos/${carrinhoIdExistente}`,
        }).then((response) => {
          expect(response.status).to.eq(200);

          expect(response.body).to.have.all.keys(
            "_id",
            "idUsuario",
            "produtos",
            "precoTotal",
            "quantidadeTotal"
          );

          expect(response.body._id).to.eq(carrinhoIdExistente);
        });
      });
    });
  });
});
