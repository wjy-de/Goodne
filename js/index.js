$(document).ready(function(){
	$(".center2LT li").eq(0).css({"border-top-color":"#79BE0B","background":"#fff"});
	$(".center2LB li").eq(0).css("display","block");
	$(".center2LT li").eq(0).find(".zhe").css("display","block");
	$(".center2LT li").each(function(index,obj){
		$(this).click(function(){
			$(".center2LT li").css({"border-top-color":"#ebebeb","background":"#fafafa"})
			$(this).css({"border-top-color":"#79BE0B","background":"#fff"});
			$(".center2LT li").find(".zhe").css("display","none");
			$(".center2LT li").eq(index).find(".zhe").css("display","block");
			$(".center2LB li").css("display","none");
			$(".center2LB li").eq(index).css("display","block");
		})
	})
		
	/*返回顶部*/
	jQuery.backtop($(".fixedR"),1000);
	/*返回顶部*/
	
	/**/
//	$(".center-box1").hover(
//		function(){
//			$(this).css("background-position-y","-45px")
//		},
//		function(){
//			$(this).css("background-position-y","0")
//		}
//	)
	$(".ser-sub").click(function(e){
		e.stopPropagation();
		$(".ser-text").css("display","block");
	})

	/*banner轮播图*/
	var banners=$(".banner div");
	banners.eq(0).css("display","block");
	var now=0;
	var t=setInterval(move,3000);
	var flag=true;
	function move(){
		now++;
		if(now>=banners.length){
			now=0;
		}
		banners.css("display","none");
		banners.eq(now).css("display","block");
	}

	function moveL(){
		now--;
		if(now<0){
			now=banners.length-1;
		}
		banners.css("display","none");
		banners.eq(now).css("display","block");
	}
	$("#banner").hover(
		function(){
			clearInterval(t);
			$(".ban-btnL").fadeIn();
			$(".ban-btnR").fadeIn();
		},
		function(){
			t=setInterval(move,3000);
			$(".ban-btnL").fadeOut();
			$(".ban-btnR").fadeOut();
		}
	)

	$(".ban-btnR").click(function(){
		if(flag){
			move();
		}
	})
	$(".ban-btnL").click(function(){
		if(flag){
			moveL();
		}
	})
	/*banner轮播图*/


})
