
const recaptchaKey = '6LcPwaEpAAAAAF4V1HSHDv6svGDPGCjZnzHBkCZQ';

const recaptchaChallenge = () => {
  grecaptcha.execute(recaptchaKey, {action: 'homepage'})
    .then(function(token) {
      document.getElementById('captchaResponse').value = token;
  });
}

grecaptcha.ready(function() {
  recaptchaChallenge();
});

const toggleFormFields = (form, disabled) => {
  [...form.querySelectorAll('input, textarea, button')].forEach(elem => elem.disabled = disabled)
}

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const body = new FormData(form);
  toggleFormFields(form, true);
  try {
    const resp = await fetch('https://mangati-contact-form.rogeriolino.workers.dev/', {
      method: 'post',
      body,
    });
    if (resp.ok) {
      alert('Mensagem enviada com sucesso');
      form.reset();
    } else {
      const result = await resp.json();
      alert(result.detail);
    }
  } catch (e) {
    alert(e)
  }
  toggleFormFields(form, false);
  recaptchaChallenge();
});
