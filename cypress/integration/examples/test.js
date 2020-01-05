

describe('My First Test', function() {
    it('Does not do much!', function() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      // if (Math.random() < .5) {
      //   // append an input
      //   $('<input />').appendTo($('body'))
      // } else {
      //   // or append a textarea
      //   $('<textarea />').appendTo($('body'))
      // }
      // cy.get(':nth-child(2) > .product-action > button').click()
      // cy.get('.cart-icon > img').click()
      // cy.wait(5000)

      // cy.get('.products').find('.product').eq(1).contains('+').click()
      // cy.get('.products').find('.product').eq(1).contains('ADD TO').click()

       cy.get('.products').find('.product').each(($el, index, $list) => {
         $el.find('button').click()
         }
        
         )      
      cy.get('.cart-icon > img').click()
      // cy.contains('PROCEED TO CHECKOUT').click()
      // cy.contains('Place Order').click()
    })
  })