$(".ans-one").click(function () {
  $(".box-1").toggle();
  $(".ans-one").toggle();
  $(".close-one").toggle();
});
$(".ques-one-box").click(function () {
  $(".box-1").toggle();
  $(".ans-one").toggle();
  $(".close-one").toogle();
  $(".box-2").hide();
  $(".box-3").hide();
  $(".box-4").hide();
  $(".box-5").hide();
  $(".box-6").hide();
});

// ques-2
$(".ans-two").click(function () {
  $(".box-2").toggle();
  $(".ans-two").toggle();
  $(".close-two").toggle();
});
$(".ques-two-box").click(function () {
  $(".box-2").toggle();
  $(".ans-two").toggle();
  $(".close-two").toggle();
  $(".box-1").hide();
  $(".box-3").hide();
  $(".box-4").hide();
  $(".box-5").hide();
  $(".box-6").hide();
});
// ques-3
$(".ans-three").click(function () {
  $(".box-3").toggle();
  $(".ans-three").toggle();
  $(".close-three").toggle();
});
$(".ques-three-box").click(function () {
  $(".box-3").toggle();
  $(".ans-three").toggle();
  $(".close-three").toggle();
  $(".box-1").hide();
  $(".box-2").hide();
  $(".box-4").hide();
  $(".box-5").hide();
  $(".box-6").hide();
});
// ques-4
$(".ans-four").click(function () {
  $(".box-4").toggle();
  $(".ans-four").toggle();
  $(".close-four").toggle();
});
$(".ques-four-box").click(function () {
  $(".box-4").toggle();
  $(".ans-four").toggle();
  $(".close-four").toggle();
  $(".box-1").hide();
  $(".box-2").hide();
  $(".box-3").hide();
  $(".box-5").hide();
  $(".box-6").hide();
});
// ques-5
$(".ans-five").click(function () {
  $(".box-5").toggle();
  $(".ans-five").toggle();
  $(".close-five").toggle();
});
$(".ques-five-box").click(function () {
  $(".box-5").toggle();
  $(".ans-five").toggle();
  $(".close-five").toggle();
  $(".box-1").hide();
  $(".box-2").hide();
  $(".box-3").hide();
  $(".box-4").hide();
  $(".box-6").hide();
});
// ques-6
$(".ans-six").click(function () {
  $(".box-6").toggle();
  $(".ans-six").toggle();
  $(".close-six").toggle();
});
$(".ques-six-box").click(function () {
  $(".box-6").toggle();
  $(".ans-six").toggle();
  $(".close-six").toggle();
  $(".box-1").hide();
  $(".box-2").hide();
  $(".box-3").hide();
  $(".box-4").hide();
  $(".box-5").hide();
});

// cvv
$(".about-cvv").click(function () {
  $(".cvv-hiden-page").show();
  $(".card-payment-step").hide();
  $(".overlay").show();
});
$(".hide-page").click(function () {
  $(".cvv-hiden-page").hide();
  $(".card-payment-step").show();
  $(".overlay").hide();
});
