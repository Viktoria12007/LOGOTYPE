import '../../node_modules/focus-visible/dist/focus-visible';
// import '../../node_modules/just-validate/dist/js/just-validate';
// import Swiper from 'swiper/bundle';
// let $ = require("jquery");
// require("jquery-ui/ui/widgets/accordion");
import '../scss/main.scss';
import '../index.html';


// window.addEventListener('DOMContentLoaded', function() {
//   let productSwiper = new Swiper('.swiper-container', {
//     direction: 'horizontal',
//     // loop: true,
//     allowTouchMove: false,
//     autoHeight: true,
//     effect: 'fade',
//     fadeEffect: {
//       crossFade: true
//     },
//     observer: true,
//     observeParents: true,
//     pagination: {
//       el: '.product-pagination',
//       type: 'fraction',
//       clickable: false,
//       renderFraction:(currentClass, totalClass) => {
//         return '<div class="' + currentClass +'"></div>' + 
//         '<svg class="product-pagination__icon" width="16" height="1" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="15.5" y1="0.5" x2="0.5" y2="0.500001" stroke="#ffffff" stroke-linecap="round"/></svg>'
//          +
//         '<div class="' + totalClass +'"></div>'
//       },
//       formatFractionCurrent:(number) => {
//          return '0' + number
//       },
//       formatFractionTotal:(number) => {
//         return '0' + number
//      },
//     },
//     navigation: {
//       nextEl: '.product-button-next',
//       prevEl: '.product-button-prev',
//     },
//   })
  
//   $( function() {
//     $( "#accordion" ).accordion({
//       collapsible: true,
//       heightStyle: "content",
//       header: "h3",
//       active: false,
//     });
//   });

//   let validateForms = function(selector, rules, successModal, yaGoal) {
//     new window.JustValidate(selector, {
//       rules: rules,
//       messages: {
//         name: {
//           required: 'What is your name?',
//           minLength: 'The name must contain at least 2 characters',
//           maxLength: 'The name must be no more than 30 characters'
//         },
//         email: {
//           required: 'Enter your e-mail',
//           email: 'Please enter a valid e-mail',
//           minLength: 'Your e-mail must contain at least 6 characters',
//           maxLength: 'Your e-mail must contain no more than 50 characters'
//         }
//       },
//       submitHandler: function(form) {
//         let formData = new FormData(form);
  
//         let xhr = new XMLHttpRequest();
  
//         xhr.onreadystatechange = function() {
//           if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//               console.log('Отправлено');
//             }
//           }
//         }
  
//         xhr.open('POST', 'mail.php', true);
//         xhr.send(formData);
  
//         form.reset();
//       }
//     });
//   }
  
//   validateForms('.notified-form', { name: {required: true, minLength: 2, maxLength: 30}, email: {required: true, email: true, minLength: 6, maxLength: 50} }, '.thanks-popup', 'send goal');

//   const eventInput = new Event('input', {
//     bubbles: true,
//     cancelable: true,
// });
//   const decreaseButtons = document.querySelectorAll(".product-form__quantity-button_decrease");
//   const increaseButtons = document.querySelectorAll(".product-form__quantity-button_increase");
//   const productForms = document.querySelectorAll('.product-form');

//   productForms.forEach((el) => {
//     el.addEventListener('submit', (e) => {
//       const currentQuantityInput = el.querySelector('.quantity-input');
//       const currentTotalInput = el.querySelector('.total-input');
//        currentQuantityInput.dispatchEvent(eventInput);
//        currentTotalInput.dispatchEvent(eventInput);
//     })
//   })
  
//   function chooseQuantity(e, action, price) {
//     const currentProductForm = e.target.closest('.product-form');
//     const quantityControl = e.target.closest('.product-form__quantity-control');
//     const quantityNumber = quantityControl.querySelector('.product-form__quantity-number');
//     const currentCost = currentProductForm.querySelector('.product-form__cost');
//     let quantityInput = quantityNumber.nextElementSibling;
//     let totalInput = currentProductForm.querySelector('.total-input');
//     let currentNumber;
    
//      if (action === "increase") {
//       currentNumber = parseInt(quantityNumber.textContent++);
//         quantityInput.value = currentNumber + 1;
//         quantityInput.dispatchEvent(eventInput);
//         currentCost.innerHTML = 
//         `<div class="product-form__cost">$
//                       ${(currentNumber + 1) * price}<span class="product-form__cost_balance">.00</span>
//                     </div>`;
//         totalInput.value = (currentNumber + 1) * price;
//         totalInput.dispatchEvent(eventInput);
//      }
//      if (action === "decrease") {
//        if (parseInt(quantityNumber.textContent) > 1) {
//         currentNumber = parseInt(quantityNumber.textContent--);
//         quantityInput.value = currentNumber - 1;
//         quantityInput.dispatchEvent(eventInput);
//         currentCost.innerHTML = 
//         `<div class="product-form__cost">$
//                       ${(currentNumber - 1) * price}<span class="product-form__cost_balance">.00</span>
//                     </div>`;
//         totalInput.value = (currentNumber - 1) * price;
//         totalInput.dispatchEvent(eventInput);
//        }
//        else {
//         quantityInput.dispatchEvent(eventInput);
//         totalInput.dispatchEvent(eventInput);
//          return;
//        }
//      }
//   }

//   decreaseButtons.forEach((el) => {
//     el.addEventListener('click', (e) => {
//        chooseQuantity(e, "decrease", 120)
//     })
//   })

//   increaseButtons.forEach((el) => {
//     el.addEventListener('click', (e) => {
//        chooseQuantity(e, "increase", 120)
//     })
//   })

// })
