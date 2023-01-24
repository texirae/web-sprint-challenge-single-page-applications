describe('Pizza App', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza")
  })

  const nameInput = () => cy.get('input[name=name]')
  const instructionsInput = () => cy.get('input[name=instructions')
  const sizeInput = () => cy.get('[id="size-dropdown"]')
  const sauceInput = () => cy.get('[type="radio"]')
  const crustInput = () => cy.get('select[id="crust-dropdown"]')
  const orderBtn = () => cy.get('button[id="order-button"]')
  const toppingsInput = () => cy.get('[type="checkbox"]')

  //test that all elements are showing up
  it('the proper elements are showing', () => {
    nameInput().should('exist')
    instructionsInput().should('exist')
    sizeInput().should('exist')
    sauceInput().should('exist')
    crustInput().should('exist')
    orderBtn().should('exist')
    toppingsInput().should('exist')
  })

  //test for text box inputs
  it('can type in the inputs', () => {
    nameInput()
      .should('have.value', '')
      .type('Texi Schaeffer')
      .should('have.value', "Texi Schaeffer")

    instructionsInput()
      .should('have.value', '')
      .type('Burn the crust')
      .should('have.value', "Burn the crust")
  })

  //check that all toppings checkboxes can be selected
  it('can select all toppings checkboxes', () => {
    toppingsInput()
      .check()
      .each(checkbox => {
        expect(checkbox[0].checked).to.equal(true)
      })
  })

  describe('Submitting an order', () => {
    it('can input all fields', () => {
      nameInput().type('Texi Schaeffer')
      sizeInput().select('Large')
      sauceInput().check('marinara')
      toppingsInput()
      .check()
      .each(checkbox => {
        expect(checkbox[0].checked).to.equal(true)
      })
      crustInput().select('hand-tossed')
      instructionsInput().type('Burn the crust')
      orderBtn().click()      
    })
  })

  
})