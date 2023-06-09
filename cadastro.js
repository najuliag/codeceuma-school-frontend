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
  }if (!isValidEmail(email)) {
    alert('Por favor, preencha com um email válido.');
    return;
  }
  
  if (senha === '') {
    alert('Por favor, preencha o campo senha.');
    return;
  }if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[a-z]/.test(senha) || !/\d/.test(senha)) {
    alert("A senha deve conter pelo menos:" + "\n8 caracteres;" 
    + "\nUma letra maiúscula;" 
    + "\nUma letra minúscula;"
    +"\nUm número.");
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
