const btn = document.getElementById('button')

btn.addEventListener('click', function(){

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

let myMail = `mailto:donertus@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
  
window.location.href = myMail

})

const menbut = document.getElementById('menbut')
menbut.addEventListener('click', function() {

   let header = document.getElementById('header');
    if (header.style.display === 'block' || header.style.display === '') {
        header.style.display = 'none';
    } else {
        header.style.display = 'block';
    }
});