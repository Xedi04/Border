let myText = document.getElementById('text');
let myBut1 = document.getElementById('but1');
let myBut2 = document.getElementById('but2');
let myBut3 = document.getElementById('but3');
let myBut4 = document.getElementById('but4');
let myBut5 = document.getElementById('but5');
let myBut6 = document.getElementById('but6');
let myBut7 = document.getElementById('but7');
let myBut8 = document.getElementById('but8');
let mySize = document.getElementById('size');
let myRadius = document.getElementById('radius');
let myHei = document.getElementById('hei');
let myWid = document.getElementById('wid');
let myTC = document.getElementById('tcolor');
let myInput1 = document.getElementById('tcolor1')
let myBG = document.getElementById('bgcolor');
let myInput2 = document.getElementById('bcolor1')
let myBorcolor = document.getElementById('bordercol');
let myInput3 = document.getElementById('bordercolor1')


let text = 16;
let rad = 0;
let height1 = 80;
let width1 = 400;
let ccolor = 0;


mySize.innerText = `text - ${text} px`
myRadius.innerText = `rad - ${rad} px`
myHei.innerText = `height1 - ${height1} px`
myWid.innerText = `width1 - ${width1} px`


myBut1.addEventListener('click', () => {
   text = text + 5;
   myText.style.fontSize = text + 'px';
   mySize.innerText = `text - ${text} px`
})

myBut2.addEventListener('click', () => {
   text = text - 5;
   myText.style.fontSize = text + 'px';
   mySize.innerText = `text - ${text} px`
})
myBut3.addEventListener('click', () => {
   rad = rad + 5;
   myText.style.borderRadius = rad + 'px';
   myRadius.innerText = `rad - ${rad} px`
})
myBut4.addEventListener('click', () => {
   rad = rad - 5;
   myText.style.borderRadius = rad + 'px';
   myRadius.innerText = `rad - ${rad} px`
})
myBut5.addEventListener('click', () => {
   height1 = height1 + 5;
   myText.style.height = height1 + 'px';
   myHei.innerText = `height1 - ${height1} px`
})
myBut6.addEventListener('click', () => {
   height1 = height1 - 5;
   myText.style.height = height1 + 'px';
   myHei.innerText = `height1 - ${height1} px`
})
myBut7.addEventListener('click', () => {
   width1 = width1 + 5;
   myText.style.width = width1 + 'px';
   myWid.innerText = `width1 - ${width1} px`
})
myBut8.addEventListener('click', () => {
   width1 = width1 - 5;
   myText.style.width = width1 + 'px';
   myWid.innerText = `width1 - ${width1} px`
})

myInput1.addEventListener('input', () => {
   myText.style.backgroundColor = myInput1.value;
})
myInput2.addEventListener('input', () => {
   myText.style.color = myInput2.value;
})

myInput3.addEventListener('input', () => {
   myText.style.borderColor = myInput3.value;
})




