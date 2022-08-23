function btn_func(data){


	for(let q=1 ; q<=4 ; q++){
		if(q==data){
			$(".first").addClass("slide"+q);
			$(".btn"+q).addClass("active");
		}
		else{
			$(".first").removeClass("slide"+q);	
			$(".btn"+q).removeClass("active");
		}
	}
}