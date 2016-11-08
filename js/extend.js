jQuery.extend({
	backtop:function(obj,time){	
	obj.on("click",function(){
		var top=$(window).scrollTop();
		var src={aa:top};
		$(src).animate({aa:0},{
			duration:time,
			step:function(){
				$(window).scrollTop(src.aa)
			}
		})
	})}
})
	jQuery.fn.extend({
		mousewheel:function(up,down){
			
			this.each(function(index,obj){
			if(obj.attachEvent){
        	obj.attachEvent("onmousewheel",scrollFun);  //给ie添加滚轮事件
      			}
      		else{
	        obj.addEventListener("mousewheel",scrollFun,false);    //给谷歌添加滚轮事件
	        obj.addEventListener("DOMMouseScroll",scrollFun,false);  //给火狐添加滚轮事件
      			}
      function scrollFun(e){
          var e=e||window.event;
          if(e.preventDefault){
            e.preventDefault();
          }
          else{
            e.returnValue=false;
          }
          var num=e.detail||e.wheelDelta;
          if(num==120||num==-3)    //判断滚轮事件向上
          {
            up.call(obj);   //改变this指针
          }
          else if(num==-120||num==3)     //判断滚轮事件向下
          {
            down.call(obj);
          }
      }
			
		})}
	})