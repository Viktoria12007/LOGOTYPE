import '../../node_modules/focus-visible/dist/focus-visible';
import '../../node_modules/just-validate/dist/js/just-validate';
// import '../assets/js/jquery-2.0.3.min.js';
// import '../assets/js/jquery.uploadPreview.min.js';
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
   
// $(document).ready(function() {
//   $.uploadPreview({
//     input_field: "#image-upload",   // Default: .image-upload
//     preview_box: "#image-preview",  // Default: .image-preview
//     label_field: "#image-label",    // Default: .image-label
//     label_default: "Choose File",   // Default: Choose File
//     label_selected: "Change File",  // Default: Change File
//     no_label: false,                // Default: false
//     success_callback: null          // Default: null
//   });
// });


function handleFileSelect(evt) {
  const file = evt.target.files; // FileList object
  const f = file[0];
  // Only process image files.
  // if (!f.type.match('image.*')) {
  //     alert("Image only please....");
  // }
  const reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function(theFile) {
      return function(e) {
          // Render thumbnail.
          let output = document.getElementById('output');
          // var span = document.createElement('span');
          // span.innerHTML = ['<img class="profile-label__img" alt="Ваш аватар" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
          output.innerHTML = ['<img class="profile-label__img" alt="Ваш аватар" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
          // document.getElementById('output').insertBefore(span, null);
      };
  })(f);
  // Read in the image file as a data URL.
  reader.readAsDataURL(f);
}
document.getElementById('file').addEventListener('change', handleFileSelect, false);

  
  $( function() {
    $( "#orders-accordion" ).accordion({
      collapsible: true,
      heightStyle: "content",
      header: "h3",
      active: false,
    });
  });

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
    prevText: '',
    nextText: '',
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
  const eventAddButtons = document.querySelectorAll('.my-events__add-button');
  const eventEditButtons = document.querySelectorAll('.my-events__card-action_edit');
  const closeButtonsModal = document.querySelectorAll('.modal-close');
  const modalWindowBonuses = document.querySelector('.modal-window__bonuses');
  const modalWindowAddEvent = document.querySelector('.modal-window__events');
  const overlay = document.querySelector('.overlay');

  bonusesHistoryButton.addEventListener('click', () => {
    modalWindowBonuses.classList.remove('closed');
    overlay.classList.remove('closed');
 })

 eventAddButtons.forEach((item) => {
  item.addEventListener('click', () => {
    modalWindowAddEvent.classList.remove('closed');
    overlay.classList.remove('closed');
 })
}) 
eventEditButtons.forEach((item) => {
  item.addEventListener('click', () => {
    modalWindowAddEvent.classList.remove('closed');
    overlay.classList.remove('closed');
 })
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
const mainWrap = document.querySelector('.container_cabinet');

  cabinetBurgerButton.addEventListener('click', () => {
    mainWrap.classList.toggle('collapsed');
  })



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
