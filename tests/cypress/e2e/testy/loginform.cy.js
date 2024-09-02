describe("Login form page using cypress", () => {
    it("include email,password,repeatpassword", () => {
        cy.visit("localhost:8888");
        cy.get("input[type='email']").type("tomektest123@gmail.com");

        const password = "Babajaga123";

        cy.get("#password").type(password);
        cy.get("#repeat-password").type(password);
        cy.contains("input[type='submit']", "Zarejestruj!").click().visible;
        cy.get("#welcome-screen").contains("Rejestracja zakończona!").should("be.visible");
    })
})