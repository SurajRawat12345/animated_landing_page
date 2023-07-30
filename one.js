const navbar = document.getElementById('nav');
const logo = document.getElementById('nav_head');
const menu = document.getElementById('nav_menu');
const content_part1 = document.getElementById('content_part1');
const content_part2 = document.getElementById('image1');
const startButton = document.getElementById('content_button1');
setTimeout(() => {
    navbar.style.opacity = "1";
},1000);
setTimeout(() => {
    nav_head.style.opacity = "1";
},1500);
setTimeout(() => {
    nav_menu.style.opacity = "1";
},1500);
setTimeout(() => {
    content_part1.style.transform = "translateX(10px)";
},500);
setTimeout(() => {
    content_part2.style.transform = "translateX(-50px)";
},500);
setTimeout(() => {
    startButton.style.transform = "translateY(-10px)";
},1500);