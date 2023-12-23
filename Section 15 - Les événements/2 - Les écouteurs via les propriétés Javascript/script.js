let a = document.querySelector('a');
let button = document.querySelector('button');
let body = document.querySelector('body');

// a.onclick = function(){
//   if(confirm('Etes-vous sûr ?')) {
//     location.href="https://believemy.com"
//   }
// }

a.onclick = () => {
    if(confirm('Etes-vous sûr ?')) {
        location.href="https://believemy.com"
    }
    }

button.onmouseover = () => {
    body.style.backgroundColor = 'red';
  }

  button.onmouseout = () => {
    body.style.backgroundColor = 'white';
  }
