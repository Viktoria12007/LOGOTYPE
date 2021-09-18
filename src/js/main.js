import '../../node_modules/focus-visible/dist/focus-visible';
import '../../node_modules/just-validate/dist/js/just-validate';
import Inputmask from "inputmask";
let $ = require("jquery");
require("jquery-ui/ui/widgets/accordion");
require("jquery-ui/ui/widgets/tabs");
require("jquery-ui/ui/widgets/datepicker");
import '../scss/main.scss';
import '../index.html';


window.addEventListener('DOMContentLoaded', function() {

const inputFile = document.getElementById('file');

function handleFileSelect(evt) {
  const file = evt.target.files; 
  const f = file[0];
  if (f.type.match('image.*')) {
  const reader = new FileReader();
  reader.onload = (function(theFile) {
      return function(e) {
          let output = document.getElementById('output');
          output.innerHTML = ['<img class="profile-label__img" alt="Ваш аватар" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
      };
  })(f);
  reader.readAsDataURL(f);
}
else {
  inputFile.value = '';
}
}
inputFile.addEventListener('change', handleFileSelect, false);

  
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
})

  $( function() {
    $( "#cabinet-tabs" ).tabs({
      show: { effect: "fade", duration: 500 },
      hide: { effect: "fade", duration: 500 }
    });
  });

  $( function() {
    $( "#date-events" ).datepicker({
      minDate: 0,
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
        tel: {
          required: 'Укажите ваш телефон',
          function: 'Пожалуйста, введите правильный номер'
        },
        email: {
          required: 'Укажите ваш e-mail',
          email: 'Пожалуйста, введите правильный e-mail',
        }
      },
    });
  }
  
  validateForms('.profile-form', { name: {required: true}, email: {required: true, email: true}, tel: {required: true, function: () => {

    for (let value of selectorTel) {
      const phone = value.inputmask.unmaskedvalue();
      return Number (phone) && phone.length === 10
    }
  
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
const mainWrap = document.querySelector('.container_cabinet');

  cabinetBurgerButton.addEventListener('click', () => {
    mainWrap.classList.toggle('collapsed');
  })

})
