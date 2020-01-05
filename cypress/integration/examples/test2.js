

describe('My First Test', function() {
    it('Does not do much!', function() {
      cy.visit('http://qaclickacademy.com/practice.php')
     // cy.get('.search-keyword').type('ca')
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

      //  cy.get('.products').find('.product').each(($el, index, $list) => {
      //    $el.find('button').click()
      //    }
        
      //    )      
      //cy.get('.cart-icon > img').click()
      // cy.contains('PROCEED TO CHECKOUT').click()
      // cy.contains('Place Order').click()
      cy.get('#checkBoxOption1').check().should('be.checked')
      cy.get('#dropdown-class-example').select('option2')//.should('have.value','option2')
      cy.get('input[id="autocomplete"]').type('ind')
      //try try
      //try
    })  
  })