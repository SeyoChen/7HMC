$(function(){
    
    //CloseBtn
    var boxComment=$(".Commentbox");//上划的外框--评论
    var boxBuynow=$(".Buynowbox");//上划的外框--立即购买
    var boxBuyteam=$(".Buyteambox");//上划的外框--组队购买
    var cover=$(".Cover");
    
    $(".Close1").on('click', function () {
        boxComment.animate({'bottom':"-100%"},500).delay(500).hide(500);
        cover.hide();
    });
    $(".Close2").on('click', function () {
        boxBuynow.animate({'bottom':"-100%"},500).delay(500).hide(500);
        cover.hide();
    });
    $(".Close3").on('click', function () {
        boxBuyteam.animate({'bottom':"-100%"},500).delay(500).hide(500);
        cover.hide();
    });
    
	//Bomd Comment
	var commentBtn=$(".Comment");
	var courseHeight=$(".Bomdcomment .Course");
	var winHeight;
	commentBtn.on('click',function(){
		winHeight=$(window).height();
		courseHeight.height(winHeight/4);
		boxComment.css({'display':'block'}).animate({'bottom':'0'},500);
		cover.show();
	});
	//Bomd Buynow
	var buynowBtn=$(".Buynow");
	buynowBtn.on('click',function(){
		winHeight=$(window).height();
		courseHeight.height(winHeight/4);
		boxBuynow.css({'display':'block'}).animate({'bottom':'0'},500);
		cover.show();
	});
	//Bomd Buyteam
	var buyteamBtn=$(".Buyteam");
	buyteamBtn.on('click',function(){
		winHeight=$(window).height();
		courseHeight.height(winHeight/4);
		boxBuyteam.css({'display':'block'}).animate({'bottom':'0'},500);
		cover.show();
	});

	
	
	
	
	//区分不同的加减区域 点击事件
	Number();
	//商品数量加减
	function Number(){
		var num=parseInt($(".Num").html());
		var reduce=$(".Reducebtn");//减号
		var add=$(".Addbtn");//加号
		
		reduce.on('click',function(){
			if(num==0){
				reduce.addClass("No");
				return false;
			}else if(num==1){
				reduce.addClass("No");
				num=Reduce(num);
				$(this).siblings(".Num").html(num);
			}else{
				num=Reduce(num);
				$(this).siblings(".Num").html(num);
			}
		});
		add.on('click',function(){
			num=Add(num);
			$(this).siblings(".Num").html(num);
		});
	}
	
	//加
	function Add(num){
		num+=1;
		return num;
	}

	//减
	function Reduce(num){
		num-=1;
		return num;
	}



});























