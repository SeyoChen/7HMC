$(function(){
	function thissize(){
		var sam_w=$('body').width();
		var h =sam_w/750;
		$('html').css('font-size',100*h);
	}
	thissize();
	$(window).on('resize',function(){
		thissize();
	})
});