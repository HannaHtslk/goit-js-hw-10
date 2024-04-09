import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconError from '../img/bi_x-octagon.svg';
import iconSuccess from '../img/bi_check2-circle.svg';

const form = document.querySelector('form');
const delayInput = document.querySelector('[type="number"]');
const fulfilledRadio = document.querySelector('[value="fulfilled"]');
const rejectedRadio = document.querySelector('[value="rejected"]');




const onFormSubmit = event => {
    event.preventDefault();

const delay = delayInput.value

const rejectNotification = {
    title: 'Error',
    titleColor: 'rgba(255, 255, 255, 1)',
    titleSize: '16px',
    message: `Rejected promise in ${delay}ms`,
    messageColor: 'rgba(255, 255, 255, 1)',
    iconUrl: iconError,
    backgroundColor: '#EF4040',
    position: 'topRight',

}
    
    const successNotification = {
    title: 'OK',
    titleColor: 'rgba(255, 255, 255, 1)',
    titleSize: '16px',
    message: `Fulfilled promise in ${delay}ms`,
    messageColor: 'rgba(255, 255, 255, 1)',
    iconUrl: iconSuccess,
    backgroundColor: '#59A10D',
    position: 'topRight',

}  
   
    const promise = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (fulfilledRadio.checked) {
                resolve();
            } else if (rejectedRadio.checked) {
                reject();
            }
         }, delay)
            
        });
    promise
        .then(() => {
            console.log(` ✅Fulfilled promise in ${delay}ms`);
            iziToast.success(successNotification);
        })
        .catch(() => {
            console.log(` ❌ Rejected promise in ${delay}ms`);
            iziToast.success(rejectNotification);
        })
    
}

form.addEventListener('submit', onFormSubmit);






