import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconError from '../img/bi_x-octagon.svg';

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


const iziToastOpt = {
  title: 'Error',
  titleColor: 'rgba(255, 255, 255, 1)',
  titleSize: '16px',
  message: 'Please choose a date in the future',
  messageColor: 'rgba(255, 255, 255, 1)',
  background: 'rgba(239, 64, 64, 1)',
  iconUrl: iconError,
  position: 'topRight',
  progressBarColor: 'rgba(255, 255, 255, 1)',

}

let userSelectedDate = null;
const startButton = document.querySelector('[type="button"]');
const timerElement = document.querySelector('.timer');
const timerInput = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkSelectedDate(selectedDates[0])
  },
};
flatpickr("#datetime-picker", options);

const checkSelectedDate = (selectedDates) => {
  userSelectedDate = selectedDates;
    const currentDate = new Date();
    if (userSelectedDate <= currentDate) {
      console.log(userSelectedDate)
      iziToast.error(iziToastOpt);
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
}


startButton.addEventListener('click', () => {
  startButton.disabled = true;
  countdownTimer();
  
});
function countdownTimer() {
  timerInput.setAttribute('disabled', true);


  const daysElement = timerElement.querySelector('[data-days]');
  const hoursElement = timerElement.querySelector('[data-hours]');
  const minutesElement = timerElement.querySelector('[data-minutes]');
  const secondsElement = timerElement.querySelector('[data-seconds]');

  const timerInterval = setInterval(updateTimer, 1000);

  

     function updateTimer() {
       const currentTime = new Date().getTime();
      //  console.log(currentTime);
    const timeDifference = userSelectedDate - currentTime;
      //  console.log(timeDifference);
       if (timeDifference <= 0) {
         clearInterval(timerInterval);
         daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
         return;
       }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);

  daysElement.textContent = addLeadingZero(days);
    hoursElement.textContent = addLeadingZero(hours);
    minutesElement.textContent = addLeadingZero(minutes);
    secondsElement.textContent = addLeadingZero(seconds);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}

