import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
const swiper = new Swiper();


//modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {

   modal.style.display = "block";
}
span.onclick = function () {
   modal.style.display = "none";
}
document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape') {
      modal.style.display = "none";
   }
});

//modal 2
var modalTwo = document.getElementById('myModal2');
var btnTwo = document.getElementById("myBtn2");
var spanTwo = document.getElementsByClassName("close-two")[0];

btnTwo.onclick = function () {

   modalTwo.style.display = "block";
}
spanTwo.onclick = function () {
   modalTwo.style.display = "none";
}
document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape') {
      modalTwo.style.display = "none";
   }
});

