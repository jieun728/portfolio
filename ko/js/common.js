$(document).ready(function(){

  movePage()

})


function movePage(){

  var menuArray=["about/about.html","inthemoon/inthemoon.html","contact/contact.html"]
  var workArray=["inthemoon/inthemoon.html","markrothko/markrothko.html","ikea/ikea.html","innisfree/innisfree.html"]
  var menunum
  var worknum
  var $black=$("<div class='black_bg'></div>")

  $("#menu_list").children().on("click",moveTo)
  function moveTo(){
    menunum=$("#menu_list").children().index($(this))

    $black.css({"top":$(window).innerHeight()})
    $black.appendTo("body")
    $black.animate({"top":0},700,"easeInCubic",function(){
      window.location.href="http://kimjieun.dothome.co.kr/ko/"+menuArray[menunum]
    })
  }

  $(".work_more, .work_more2").children().on("click",moveToWork)
  function moveToWork(){
    $black.css({"top":$(window).innerHeight()})
    $black.appendTo("body")
    $black.animate({"top":0},700,"easeInCubic",function(){
      window.location.href="http://kimjieun.dothome.co.kr/ko/inthemoon/inthemoon.html"
    })
  }

  $("header>div").on("click",moveToHome)
  function moveToHome(){
      $black.css({"top":$(window).innerHeight()})
      $black.appendTo("body")
      $black.animate({"top":0},700,"easeInCubic",function(){
      window.location.href="http://kimjieun.dothome.co.kr/ko/index.html"
    })
  }

  $("#work_list").children().on("click",moveToWorkList)
  function moveToWorkList(){
    worknum=$("#work_list").children().index($(this))

    $black.css({"top":$(window).innerHeight()})
    $black.appendTo("body")
    $black.animate({"top":0},700,"easeInCubic",function(){
      window.location.href="http://kimjieun.dothome.co.kr/ko/"+workArray[worknum]
    })
  }

}
