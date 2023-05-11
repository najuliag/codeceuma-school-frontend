const form = document.querySelector('form');

document.querySelector('#cadastrar').addEventListener('click', function (event) {
  event.preventDefault();

  const usuario = document.querySelector('#usuario').value.trim();
  const email = document.querySelector('#email').value.trim();
  const senha = document.querySelector('#senha').value.trim();

  if (usuario === '') {
    alert('Por favor, preencha o campo usuário.');
    return;
  }
  
  if (email === '') {
    alert('Por favor, preencha o campo email.');
    return;
<<<<<<< HEAD
  }if (!isValidEmail(email)) {
    alert('Por favor, preencha com um email válido.');
=======
  } else if (!isValidEmail(email)) {
    alert('Por favor, preencha um email válido.');
>>>>>>> d652296991686d67430b6860ada4d4016b787bed
    return;
  }
  
  if (senha === '') {
    alert('Por favor, preencha o campo senha.');
    return;
  }if (senha.length < 8) {
    alert('A senha deve conter pelo menos 8 caracteres.');
    return;
  }
  else {
    alert('Formulário enviado com sucesso!');
    form.submit();
  }
});

function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
