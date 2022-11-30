// Меняем режим фона день/ночь

const calculatorMode = document.querySelector('#theme'),
      githubIcon = document.querySelector('#github-icon'),
      themeIcon = document.querySelector('#theme-icon');
      
document.querySelector('#changeTheme').addEventListener('click', () => {
  if(calculatorMode.getAttribute('href') == "styles/dark.css") {
    calculatorMode.href = "styles/light.css";
    githubIcon.src = "img/GitHubDark.svg";
    themeIcon.src = "img/MoonIcon.svg";
  } else {
    calculatorMode.href = "styles/dark.css";
    githubIcon.src = "img/GitHubLight.svg";
    themeIcon.src = "img/SunIcon.svg";
  }
});

// Калькулятор

let a = '',
    b = '',
    sign = '',
    result = document.querySelector('#result');
  
document.querySelector('.row').addEventListener('click', (e) => {
  let key = e.target;

  if (key.getAttribute('id') == "clear-button") {
    a = '';
    b = '';
    sign = '';
    result.value = 0;
  }

  if (key.getAttribute('id') == "Number" && sign == "") {
      a += key.value;
      result.value = a;
  } else if (key.getAttribute('id') == "point" && a.indexOf('.') == -1 && a.length > 0) {
      a += key.value;
      result.value = a;
  } else if (key.getAttribute('id') == "Character") {
      sign = key.value;
      result.value =`${a} ${sign}`;
  } else if (key.getAttribute('id') == "Number") {
      b += key.value;
      result.value = `${a} ${sign} ${b}`;
  } else if (key.getAttribute('id') == "point" && b.indexOf('.') == -1 && b.length > 0) {
      b += key.value;
      result.value = b;
  } 

  if (key.getAttribute('id') == "=") {
    if (sign == '+') {
      result.value = (+a) + (+b);
      a = result.value;
      b = '';
    } else if (sign == '+' && b == '') { 
      b = a;
      result.value = (+a) + (+b);
      a = result.value;
    } else if (sign == '-') {
      result.value = (+a) - (+b);
      a = result.value;
      b = '';
    } else if (sign == 'x') {
      result.value = (+a) * (+b);
      a = result.value;
      b = '';
    } else if (sign == '/') {
      result.value = ((+a) / (+b)).toFixed(5);
      a = result.value;
      b = '';
    }
  } 
});

document.addEventListener('keydown', function(event) {
  if (event.key == 'Backspace' && sign == "") {
    console.log('a')
    a = a.slice(0, -1);
    result.value = a;
  } else if (event.key == 'Backspace') {
    console.log('b')
    b = b.slice(0, -1);
    result.value = `${a} ${sign} ${b}`;
  }
});