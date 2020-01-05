

describe('My First Test', function() {
    it('Does not do much!', function() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')


       cy.get('.products').find('.product').each(($el, index, $list) => {
         $el.find('button').click()
         }
        
         )      
      cy.get('.cart-icon > img').click()
      // cy.contains('PROCEED TO CHECKOUT').click()
      // cy.contains('Place Order').click()
    })
  })