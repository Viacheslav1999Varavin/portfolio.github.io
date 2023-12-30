import * as flsFunctions from "./modules/functions.js";
import $, { escapeSelector } from "jquery";

flsFunctions.isWebp();

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
const swiper = new Swiper();


$(function () {

   //upward button
   var btnTop = $('.btn-top')
   $('.modal').on("scroll", function () {
      if ($('.modal').scrollTop() >= 20) {
         btnTop.fadeIn(100);
      } else {
         btnTop.fadeOut(100);
      }
   });
   btnTop.on("click", function () {
      $('.modal').animate({ scrollTop: 0 }, 600);
   });


   //open/close modal one

   var color = "#33b4eb";
   var style1 = $('#myModal').css("display");
   $('#myBtn').on("click", function () {
      if (style1 == "none") {
         $('.modal').fadeIn();
         style1 = "block";
         console.log(color);
         if (style1 == "block") {
            $('.resumebtn').css("color", "#dd00ffe4");
            $('.aboutbtn').css("color", "#dd00ffe4");
            $('.portfoliobtn').css("color", color);
         } else {
            $('.portfoliobtn').css("color", "#dd00ffe4");
         }
         $('.modal-two').fadeOut();
         style2 = "none";
         $('.modal-three').fadeOut();
         style3 = "none";
      } else {
         $('.modal').fadeOut();
         style1 = "none";
         $('.portfoliobtn').css("color", "#dd00ffe4");
      }

   });
   $('.close').on("click", function () {
      if (style1 == "none") {
         $('.modal').fadeIn();
         style1 = "block";
      } else {
         $('.modal').fadeOut();
         style1 = "none";
         $('.portfoliobtn').css("color", "#dd00ffe4");

      }
   });

   $(document).on('keydown', function (e) {
      if (e.key === 'Escape') {
         $('.modal').fadeOut();
         style1 = "none";
         $('.portfoliobtn').css("color", "#dd00ffe4");
      }
   });


   //open/close modal two
   var style2 = $('#myModal2').css("display");
   $('#myBtn2').on("click", function () {
      if (style2 == "none") {
         $('.modal-two').fadeIn();
         style2 = "block";
         if (style2 == "block") {
            $('.resumebtn').css("color", color);
            $('.aboutbtn').css("color", "#dd00ffe4");
            $('.portfoliobtn').css("color", "#dd00ffe4");
         } else {
            $('.resumebtn').css("color", "#dd00ffe4");
         }
         $('.modal').fadeOut();
         style1 = "none";
         $('.modal-three').fadeOut();
         style3 = "none";
      } else {
         $('.modal-two').fadeOut();
         style2 = "none";
         $('.resumebtn').css("color", "#dd00ffe4");
      }
   });
   $('.close-two').on("click", function () {
      if (style2 == "none") {
         $('.modal-two').fadeIn();
         style2 = "block";
      } else {
         $('.modal-two').fadeOut();
         style2 = "none";
         $('.resumebtn').css("color", "#dd00ffe4");
      }
   });
   $(document).on('keydown', function (e) {
      if (e.key === 'Escape') {
         $('.modal-two').fadeOut();
         style2 = "none";
         $('.resumebtn').css("color", "#dd00ffe4");
      }
   });


   //open/close modal three
   var style3 = $('#myModal3').css("display");
   $('#myBtn3').on("click", function () {
      if (style3 == "none") {
         $('.modal-three').fadeIn();
         style3 = "block";
         if (style3 == "block") {
            $('.aboutbtn').css("color", color);
            $('.resumebtn').css("color", "#dd00ffe4");
            $('.portfoliobtn').css("color", "#dd00ffe4");
         } else {
            $('.aboutbtn').css("color", "#dd00ffe4");
         }
         $('.modal-two').fadeOut();
         style2 = "none";
         $('.modal').fadeOut();
         style1 = "none";
      } else {
         $('.modal-three').fadeOut();
         style3 = "none";
         $('.aboutbtn').css("color", "#dd00ffe4");
      }
   });
   $('.close-three').on("click", function () {
      if (style3 == "none") {
         $('.modal-three').fadeIn();
         style3 = "block";
      } else {
         $('.modal-three').fadeOut();
         style3 = "none";
         $('.aboutbtn').css("color", "#dd00ffe4");
      }
   });
   $(document).on('keydown', function (e) {
      if (e.key === 'Escape') {
         $('.modal-three').fadeOut();
         style3 = "none";
         $('.aboutbtn').css("color", "#dd00ffe4");
      }
   });


});


