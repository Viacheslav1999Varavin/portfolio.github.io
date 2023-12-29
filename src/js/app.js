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
   var style1 = $('#myModal').css("display");
   $('#myBtn').on("click", function () {
      if (style1 == "none") {
         $('.modal').fadeIn();
         style1 = "block";
         $('.modal-two').fadeOut();
         style2 = "none";
         $('.modal-three').fadeOut();
         style3 = "none";
      } else {
         $('.modal').fadeOut();
         style1 = "none";

      }

   });
   $('.close').on("click", function () {
      if (style1 == "none") {
         $('.modal').fadeIn();
         style1 = "block";
      } else {
         $('.modal').fadeOut();
         style1 = "none";
      }
   });

   $(document).on('keydown', function (e) {
      if (e.key === 'Escape') {
         $('.modal').fadeOut();
         style1 = "none";
      }
   });


   //open/close modal two
   var style2 = $('#myModal2').css("display");
   $('#myBtn2').on("click", function () {
      if (style2 == "none") {
         $('.modal-two').fadeIn();
         style2 = "block";
         $('.modal').fadeOut();
         style1 = "none";
         $('.modal-three').fadeOut();
         style3 = "none";
      } else {
         $('.modal-two').fadeOut();
         style2 = "none";
      }
   });
   $('.close-two').on("click", function () {
      if (style2 == "none") {
         $('.modal-two').fadeIn();
         style2 = "block";
      } else {
         $('.modal-two').fadeOut();
         style2 = "none";
      }
   });
   $(document).on('keydown', function (e) {
      if (e.key === 'Escape') {
         $('.modal-two').fadeOut();
         style2 = "none";
      }
   });


   //open/close modal three
   var style3 = $('#myModal3').css("display");
   $('#myBtn3').on("click", function () {
      if (style3 == "none") {
         $('.modal-three').fadeIn();
         style3 = "block";
         $('.modal-two').fadeOut();
         style2 = "none";
         $('.modal').fadeOut();
         style1 = "none";
      } else {
         $('.modal-three').fadeOut();
         style3 = "none";
      }
   });
   $('.close-three').on("click", function () {
      if (style3 == "none") {
         $('.modal-three').fadeIn();
         style3 = "block";
      } else {
         $('.modal-three').fadeOut();
         style3 = "none";
      }
   });
   $(document).on('keydown', function (e) {
      if (e.key === 'Escape') {
         $('.modal-three').fadeOut();
         style3 = "none";
      }
   });


});


