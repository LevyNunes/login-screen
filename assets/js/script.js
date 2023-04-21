const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const registroBtn = document.querySelector('.btn.register');
const loginBtn = document.querySelector('.btn.login');
const nome = document.querySelector('.register-user')
const email = document.querySelector('.register-email')
const senha = document.querySelector('.register-password')
const loginEmail = document.querySelector('.email');
const loginPassword = document.querySelector('.password');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

registroBtn.addEventListener('click', () => {
    const objeto = {
        nome: nome.value,
        email: email.value,
        senha: senha.value
      };
      
      const objetos = JSON.parse(localStorage.getItem("objetos")) || [];
      objetos.push(objeto);
      localStorage.setItem("objetos", JSON.stringify(objetos));  

    nome.value='';
    senha.value='';
    email.value='';
})


// Adiciona um evento de clique no botão de login
loginBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Previne o comportamento padrão do formulário

  const users = JSON.parse(localStorage.getItem('objetos')) || []; // Obtém a lista de usuários do localStorage
  const user = users.find(user => user.email === loginEmail.value && user.senha === loginPassword.value); // Procura por um usuário com o email e senha inseridos pelo usuário
	function myFunction() {
    window.open("https://i.pinimg.com/736x/38/22/95/382295fe027745cdb4fe0874c0849881.jpg");
  }

  function talvez() {
  window.open("https://imageproxy.ifunny.co/resize:320x,crop:x800,quality:90x75/images/a7a9d740e585b7fa76ff963e677217b5d35e0d91b535872e324d6a4c7ed2e967_3.jpg");
}
  if (user) {
    talvez();
  } else {
    myFunction();
  }

});
