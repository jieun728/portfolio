$(document).ready(function(){

  ShowBg()

  homeHeight()
  showMenu()

})

function ShowBg(){
  var $black=$("<div class='black_bg'></div>")
  $black.appendTo("body")
  $black.animate({"top":-$(window).innerHeight()},700,"easeInCubic",function(){
    showText()
    currentPage()
  })
}

function currentPage(){
  $("header>div").addClass("selected_menu")
}

function showText(){
  var textNum=$("#home_title").children().size()

  for(var i=0; i<textNum; i++){
    $("#home_title").children().css({"opacity":0,"top":300})
    $("#home_title").children().eq(i).animate({"opacity":1,"top":0},500+(150*i),"easeOutCubic")
  }
}

function homeHeight(){
  $("#home").css({"height":$(window).innerHeight()})
}

function showMenu(){
  var menuArray=["In the moon","Mark rothko","IKEA","innisfree"]
  var num

  $("#work_list").children().on("mouseenter",function(){
    num=$("#work_list").children().index($(this))
    var $menu=$("<span class='work_title'>"+menuArray[num]+"</span>")
    $menu.appendTo($("#work_list").children().eq(num))
    $menu.stop()
    $menu.animate({"top":-40,"opacity":1},500,"easeOutCubic")
  })
  $("#work_list").children().on("mouseleave",function(){
    $(".work_title").stop()
    $(".work_title").animate({"top":-20,"opacity":0},700,"easeOutCubic")
  })
}

