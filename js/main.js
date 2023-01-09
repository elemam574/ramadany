let fixedNav = document.querySelector('.head');
window.addEventListener("scroll", () =>  {
    window.scrollY > 100 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
});
window.addEventListener("scroll", () => {
    window.scrollY > 100 ? document.getElementById('up').style.opacity = 1 : document.getElementById('up').style.opacity = 0;
});
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let x = document.querySelectorAll(".mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
let dateShow = new Date();
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
};
let dateString = dateShow.toLocaleDateString('ar-EG', options);
let showDay = document.getElementById("toDay").innerHTML = dateString;

let hijri = document.getElementById("hijriDate");
fetch("https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=8")
.then((response => response.json()))
.then((myData) => {
    let hijriArNums = ["٣", "١", "٢", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "١١", "١٢", "١٣", "١٤", "١٥", "١٦", "١٧", "١٨", "١٩", "٢٠", "٢١", "٢٢", "٢٣", "٢٤", "٢٥", "٢٦", "٢٧", "٢٨", "٢٩", "٣٠"];
    let hijriDateShow = new Date();
    let hijriOptions = {
        year: 'numeric',
    };
    let hijriDateString = hijriDateShow.toLocaleDateString('ar-SA', hijriOptions);
    hijri.innerHTML = `${hijriArNums[myData.data.date.hijri.day - 1]} ${myData.data.date.hijri.month.ar} ${hijriDateString}`;
});
// let hijri = document.getElementById("hijriDate");
// let hijriDateShow = new Date();
// let hijriOptions = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
// };
// let hijriDateString = hijriDateShow.toLocaleDateString('ar-SA', hijriOptions);
// hijri.innerHTML = hijriDateString;
// myData.data.date.hijri.year
// let pray = document.querySelector('.pra');
// fetch("http://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=8")
// .then(response => response.json())
// .then(data => {
//    let times = data.data.timings;
//    pray.innerHTML = "";
//    for (let time in times) {
//        pray.innerHTML += `<div class="pry fajr" id="fajr">
//                 <p>${time}</p>
//                 <p>${times[time]}</p>
//              </div>`
//         }
//     })
// }

// active sidebars 
let bars = document.querySelector('.bars'),
    sideBar = document.querySelector('.head ul');
bars.addEventListener('click', ()=> {
    sideBar.classList.toggle("active")
});
