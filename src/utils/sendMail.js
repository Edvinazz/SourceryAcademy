import emailjs from '@emailjs/browser';

export function sendMail(form) {
  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    form,
    process.env.REACT_APP_EMAILJS_API_KEY
  );
}
