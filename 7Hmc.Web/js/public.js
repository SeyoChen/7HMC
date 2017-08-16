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












});























