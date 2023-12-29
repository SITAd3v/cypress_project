describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.lager157.com')
    cy.get('[href="https://lager157.com/sv-se/"]').click()
    cy.get(':nth-child(3) > [data-style-attr="Node_Content_Level_1"] > .CMS-SubMenuNode-title > .Link').click()
  })
})