$(document).ready(function(){
	
	//最上面的
	var head=$(".head")
	
	 $(window).scroll(function(){
   
	  var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层
        if($("#banner").offset().top<=obj.scrollTop)
        {
          head.css("display","block")
        }
        else 
        {
           head.css("display","none")

        }
})
	
	
	
	
	
	
//	回到顶部

		jQuery.backtop($(".backtop"),500)
		 $(window).scroll(function(){
 
  	  var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层
        if($("#banner").offset().top<=obj.scrollTop+100)
        {
           $(".backtop").css("display","block")
        }
        else 
        {
           $(".backtop").css("display","none")

        }
  })
//轮播图
		var lunbo=$("#lunbo")
		var div=$("#jiedian")
		var imgbox=$(".imgbox")
		div.slice(4).addClass("block");
		var ww=imgbox.width()+20;
		var flag=true;
		var img1=$(".img1")	
		var now=0;
		var next=0
    function nmove(){
    	now++;
//  	if(now==6){
//  		now=0;
//  		return;
//  	}
    	 if(now-next==5||now==5){
    		now=0;
    		for(var i=0;i<4;i++){
    	 	var first=div.children().first();
      		var last=div.children().last();
      		last.insertBefore(first);
    	 	}
    		div.css("left",-4*ww)
    	 	div.animate({left:0},1000,"linear",function(){
//  	 	$(this).css("left",0);
    	 	flag=true;
    	 	
    		 })
    	 }
    	  else {
    	  
    	 	div.animate({left:-ww},550,"linear",function(){
    	 	$(this).children().first().appendTo(this)
    	 	$(this).css("left",0);
    	 	flag=true;
    	 	
    		 })
    	 }
    	  
     }
  function nmovel(){
		next++;
  		if(next-now==5||next==5){
  			next=0;
  			div.animate({left:-4*ww},"linear",function(){
  			for(var i=0;i<4;i++){
    		$(this).children().first().appendTo(this)}
    		$(this).css("left",0);
    		flag=true;
    		
    	})
  		}
  		else{
	  		var first=div.children().first();
	      	var last=div.children().last()
	      	last.insertBefore(first)
	      	div.css({left:-ww})
	      	div.animate({left:0},"linear",function(){
	      		flag=true;
	      	})
  		}
  		console.log(next)
      }
		var jiantou1=$("#jiantou1")
		var jiantou2=$("#jiantou2")
		jiantou1.click(function(){
			if(flag)
			{nmovel()}
			flag=true;
		})
		jiantou2.click(function(){
			if(flag)
			{nmove()}
			flag=true;
		})
   			var t=setInterval(nmove,2000)
   			
   			lunbo.hover(function(){
   				clearInterval(t)
   			},function(){
   				t=setInterval(nmove,2000)
   			})
 		
   		var jt=$(".jt")
   			jt.hover(function(){clearInterval(t)},function(){t=setInterval(t)})
 			
 		
 	//choose
 	var lis=$(".row4 .tab ul li");
 	var zz=$("span",lis);
 	tabcontent=$(".tab-content")
 	lis.eq(0).css({"background":"#fff","border-top-color":"#79be0b"});
 	zz.eq(0).css("display","block")
 	tabcontent.eq(0).css("display","block")
 	lis.click(function(){
 		lis.css({"background":"#fafafa","border-top-color":"#ebebeb"});
 		tabcontent.css("display","none")
 		var index=lis.index($(this))
 		lis.eq(index).css({"background":"#fff","border-top-color":"#79be0b"});
 		zz.eq(index).css("display","block")
 		tabcontent.eq(index).css("display","block")
 	})
 	
function banner(){
		var now=0;
		$("#banner li").eq(0).children().addClass('bagin');
		function move (){
			var next=now+1;
			if(next>$("#banner li").size()-1){
				next=0;
			}
			if(now==1){
				$("#banner .srdz").removeClass('srdz');
			}
			$("#banner li").eq(now).animate({opacity:0},500).children().removeClass('bagin').delay(500).end().end().eq(next).css('opacity',1).children().addClass('bagin');
			now=next;
			if(next==1){
				$("#banner li").eq(1).children(".ts").removeClass('bagin').addClass('srdz');
			}
		}
		function moveback(){
			var next=now-1;
			if(next<0){
				next=$("#banner li").size()-1;
			}
			$("#banner li").eq(now).animate({opacity:0},500).children().removeClass('bagin').delay(500).end().end().eq(next).css('opacity',1).children().addClass('bagin');
			now=next;
		}
		var t=setInterval(move,5000)
		$("#banner").hover(function(){
			$("#banner .btnr,#banner .btnl").animate({opacity:0.3})
			clearInterval(t)
		},function(){
			$("#banner .btnr,#banner .btnl").animate({opacity:0});
			t=setInterval(move,8000)
		})
		$("#banner .btnl").click(moveback);
		$("#banner .btnr").click(move);
	}
	banner();
})
