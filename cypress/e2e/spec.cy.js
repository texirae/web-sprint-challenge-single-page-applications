describe('Pizza App', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza")
  })

  const nameInput = () => cy.get('input[name=name]')
  const pepperoniInput = () => cy.get('input[name=pepperoni')
  const sausageInput = () => cy.get('input[name=sausage')
  const baconInput = () => cy.get('input[name=bacon')
  const chickenInput = () => cy.get('input[name=chicken')
  const mushroomsInput = () => cy.get('input[name=mushrooms')
  const peppersInput = () => cy.get('input[name=peppers')
  const onionsInput = () => cy.get('input[name=onions')
  const pineapplesInput = () => cy.get('input[name=pineapples')
  const olivesInput = () => cy.get('input[name=olives')
  const instructionsInput = () => cy.get('input[name=instructions')
  const orderBtn = () => cy.get('button[id="order-button')
  const toppingsInput = () => cy.get('[type="checkbox"]')

  //test that all elements are showing up
  it('the proper elements are showing', () => {
    nameInput().should('exist')
    pepperoniInput().should('exist')
    sausageInput().should('exist')
    baconInput().should('exist')
    chickenInput().should('exist')
    mushroomsInput().should('exist')
    peppersInput().should('exist')
    onionsInput().should('exist')
    pineapplesInput().should('exist')
    olivesInput().should('exist')
    instructionsInput().should('exist')
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

  
})