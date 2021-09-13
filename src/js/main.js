import '../../node_modules/focus-visible/dist/focus-visible';
import '../../node_modules/just-validate/dist/js/just-validate';
import Inputmask from "inputmask";
// import Swiper from 'swiper/bundle';
let $ = require("jquery");
require("jquery-ui/ui/widgets/accordion");
require("jquery-ui/ui/widgets/tabs");
require("jquery-ui/ui/widgets/datepicker");
import '../scss/main.scss';
import '../index.html';


window.addEventListener('DOMContentLoaded', function() {
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
  
  // $( function() {
  //   $( "#accordion" ).accordion({
  //     collapsible: true,
  //     heightStyle: "content",
  //     header: "h3",
  //     active: false,
  //   });
  // });
  const eventInput = new Event('input', {
    bubbles: true,
    cancelable: true,
});

const modalEventsForm = document.querySelector('.modal-window__events-form');
const dateInput = document.querySelector('.events-label__input[name="date"]');
modalEventsForm.addEventListener('submit', (e) => {
   dateInput.dispatchEvent(eventInput);
  //  modalEventsForm.reset();
})

// $('.modal-window__events-form').on('submit',function(){
//   $(this).find('input')
//        .not(':button, :submit, :reset, :hidden')
//        .val('')
//        .removeAttr('checked')
//        .removeAttr('selected');
//    return false;
// })

  $( function() {
    $( "#cabinet-tabs" ).tabs({
      show: { effect: "fade", duration: 500 },
      hide: { effect: "fade", duration: 500 }
    });
  });

  $( function() {
    $( "#date-events" ).datepicker({
      minDate: 0,
      // prevText: "",
      // buttonImage: "/img/gift-small.pngf",
      // buttonImageOnly: true
      // buttonText: ""
    });
  });

  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.04264 7.99903L9.09101 1.95758C9.19742 1.8511 9.28182 1.72468 9.33941 1.58556C9.39699 1.44643 9.42663 1.29731 9.42663 1.14672C9.42663 0.996133 9.39699 0.847017 9.33941 0.70789C9.28182 0.568763 9.19742 0.44235 9.09101 0.335867C8.98461 0.229384 8.85829 0.144917 8.71926 0.0872884C8.58024 0.0296601 8.43124 0 8.28076 0C8.13028 0 7.98128 0.0296601 7.84225 0.0872884C7.70323 0.144917 7.57691 0.229384 7.47051 0.335867L0.623287 7.18817C0.516324 7.29434 0.431425 7.42065 0.373488 7.55982C0.31555 7.69899 0.285721 7.84826 0.285721 7.99903C0.285721 8.14979 0.31555 8.29906 0.373488 8.43823C0.431425 8.5774 0.516324 8.70371 0.623287 8.80988L7.47051 15.6622C7.57659 15.7692 7.70281 15.8542 7.84188 15.9122C7.98094 15.9701 8.13011 16 8.28076 16C8.43141 16 8.58057 15.9701 8.71964 15.9122C8.8587 15.8542 8.98492 15.7692 9.09101 15.6622C9.19797 15.556 9.28288 15.4297 9.34081 15.2905C9.39875 15.1514 9.42858 15.0021 9.42858 14.8513C9.42858 14.7006 9.39875 14.5513 9.34081 14.4121C9.28288 14.273 9.19797 14.1466 9.09101 14.0405L3.04264 7.99903Z" fill="#F49D9C"/>
    </svg>`,
    nextText: `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.95736 7.99903L0.908989 1.95758C0.802585 1.8511 0.718179 1.72468 0.660593 1.58556C0.603008 1.44643 0.57337 1.29731 0.57337 1.14672C0.57337 0.996133 0.603008 0.847017 0.660593 0.70789C0.718179 0.568763 0.802585 0.44235 0.908989 0.335867C1.01539 0.229384 1.14171 0.144917 1.28074 0.0872884C1.41976 0.0296601 1.56876 0 1.71924 0C1.86972 0 2.01872 0.0296601 2.15775 0.0872884C2.29677 0.144917 2.42309 0.229384 2.52949 0.335867L9.37671 7.18817C9.48368 7.29434 9.56858 7.42065 9.62651 7.55982C9.68445 7.69899 9.71428 7.84826 9.71428 7.99903C9.71428 8.14979 9.68445 8.29906 9.62651 8.43823C9.56858 8.5774 9.48368 8.70371 9.37671 8.80988L2.52949 15.6622C2.42341 15.7692 2.29719 15.8542 2.15812 15.9122C2.01906 15.9701 1.86989 16 1.71924 16C1.56859 16 1.41943 15.9701 1.28036 15.9122C1.1413 15.8542 1.01508 15.7692 0.908989 15.6622C0.802026 15.556 0.717125 15.4297 0.659187 15.2905C0.60125 15.1514 0.571422 15.0021 0.571422 14.8513C0.571422 14.7006 0.60125 14.5513 0.659187 14.4121C0.717125 14.273 0.802026 14.1466 0.908989 14.0405L6.95736 7.99903Z" fill="#F49D9C"/>
    </svg>`,
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);

  

  const datePickerPrev = document.querySelector('.ui-datepicker-prev');
  // const datepickerPrev = document.querySelector('.ui-datepicker-prev .ui-icon');
  // console.log(datepickerPrev);
  // datapickerPrev.innerHTML = '';
  console.log(datePickerPrev);

  let selectorTel = document.querySelectorAll('input[type="tel"]');
  selectorTel = Array.from(selectorTel);
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selectorTel);


  let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: {
        name: {
          required: 'Введите имя',
          // minLength: 'Имя должно содержать минимум 2 символа',
          // maxLength: 'Имя должно содержать не более 30 символов'
        },
        date: {
            required: 'Пожалуйста, введите дату',
          },
        event: {
          required: 'Укажите событие',
        },
        for: {
          required: 'Назовите получателя',
        },
        // company: {
        //   required: 'Как называется ваша компания?',
          // minLength: 'Название компании должно содержать минимум 2 символа',
          // maxLength: 'Название компании должно содержать не более 40 символов'
        // },
        // message: {
        //   required: 'Пожалуйста, введите сообщение',
        //   minLength: 'Ваше сообщение должно содержать минимум 5 символов',
        //   maxLength: 'Ваше сообщение должно содержать не более 300 символов'
        // },
        tel: {
          required: 'Укажите ваш телефон',
          function: 'Пожалуйста, введите правильный номер'
        },
        email: {
          required: 'Укажите ваш e-mail',
          email: 'Пожалуйста, введите правильный e-mail',
          // minLength: 'Ваш e-mail должен содержать минимум 6 символов',
          // maxLength: 'Ваш e-mail должен содержать не более 50 символов'
        }
      },
      // submitHandler: function(form) {
      //   let formData = new FormData(form);
  
      //   let xhr = new XMLHttpRequest();
  
      //   xhr.onreadystatechange = function() {
      //     if (xhr.readyState === 4) {
      //       if (xhr.status === 200) {
      //         console.log('Отправлено');
      //       }
      //     }
      //   }
  
      //   xhr.open('POST', 'mail.php', true);
      //   xhr.send(formData);
  
      //   form.reset();
  
      //   fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
      // }
    });
  }
  
  validateForms('.profile-form', { name: {required: true}, email: {required: true, email: true}, tel: {required: true, function: () => {
    // selector.map((el) => {
    //   const phone = el.inputmask.unmaskedvalue();
    //   console.log(el);
    //   console.log(phone.length);
    //   console.log(Number (phone));
    //   return Number (phone) && phone.length === 10
    // })
    for (let value of selectorTel) {
      // console.log(selector);
      const phone = value.inputmask.unmaskedvalue();
      // console.log(value);
      // console.log(phone.length);
      // console.log(Number (phone));
      return Number (phone) && phone.length === 10
    }
    // const phone = selector.inputmask.unmaskedvalue()
    //   console.log(selector);
    //   console.log(phone);
    //   console.log(phone.length);
    //   console.log(Number (phone));
  
    //   return Number (phone) && phone.length === 10
  
  }} }, '.thanks-popup', 'send goal');

  validateForms('.modal-window__events-form', { event: {required: true}, for: {required: true}, date: {required: true} }, '.thanks-popup', 'send goal');
 




  const modalWindows = document.querySelectorAll('.modal-window');
  const bonusesHistoryButton = document.querySelector('.my-bonuses__button_history');
  const eventAddButton = document.querySelector('.my-events__add-button');
  // const closeButtonModalBonuses = document.querySelector('.modal-close__bonuses');
  const closeButtonsModal = document.querySelectorAll('.modal-close');
  const modalWindowBonuses = document.querySelector('.modal-window__bonuses');
  const modalWindowAddEvent = document.querySelector('.modal-window__events');
  const overlay = document.querySelector('.overlay');

  bonusesHistoryButton.addEventListener('click', () => {
    modalWindowBonuses.classList.remove('closed');
    overlay.classList.remove('closed');
 })

 eventAddButton.addEventListener('click', () => {
  modalWindowAddEvent.classList.remove('closed');
  overlay.classList.remove('closed');
})

  closeButtonsModal.forEach((item) => {
    item.addEventListener('click', () => {
      // modalWindowBonuses.classList.add('closed');
      modalWindows.forEach((item) => {
        item.classList.add('closed');
      })
      overlay.classList.add('closed');
  })
  })

  overlay.addEventListener('click', () => {
    modalWindows.forEach((item) => {
      item.classList.add('closed');
    })
    overlay.classList.add('closed');
 })

const cabinetBurgerButton = document.querySelector('.burger-button');
const cabinetSidebar = document.querySelector('.cabinet-sidebar');
  
 cabinetBurgerButton.addEventListener('click', function() {
  //  if (!cabinetSidebar.classList.contains('is-show') && !cabinetSidebar.classList.contains('is-'))
     
     if (cabinetSidebar.classList.contains('is-hide')) {
       cabinetSidebar.classList.remove('is-hide');
       cabinetSidebar.classList.toggle('is-show');
     }
     else {
      cabinetSidebar.classList.toggle('is-hide');
      cabinetSidebar.classList.remove('is-show');
     }
    //  cabinetSidebar.classList.toggle('is-show');
  // document.querySelector('.cabinet-main').classList.toggle('is-scale');
  })
  cabinetSidebar.addEventListener('animationend', () => {
    if (cabinetSidebar.classList.contains('visually-hidden')) {
      // cabinetSidebar.classList.remove('is-decrease');
      cabinetSidebar.classList.remove('visually-hidden');
      // cabinetSidebar.classList.toggle('is-increase');
    }
    else {
    //  cabinetSidebar.classList.toggle('is-decrease');
     cabinetSidebar.classList.toggle('visually-hidden');
    //  cabinetSidebar.classList.remove('is-increase');
    }
    // cabinetSidebar.classList.toggle('is-increase');
    // cabinetSidebar.classList.toggle('is-decrease');
  })
 
  // document.querySelector('#close').addEventListener('click', function() {
  // document.querySelector('#menu').classList.remove('is-active')
  // })



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

})
