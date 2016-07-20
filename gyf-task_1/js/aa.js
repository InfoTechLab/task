//window.onload=function(){
//	var body=document.getElementsByTagName("body")[0];
//	var bg=document.createElement("div");
//	bg.className="background";
//	body.appendChild(bg);/*创建div节点，套用样式，这样背景就加在了页面上*/
//	
//	var title_1=document.createElement("h3");
//	title_1.innerHTML="玩法介绍";
//	title_1.className="title";
//	body.appendChild(title_1);  /*添加标题*/
//	
//	var ul_1=document.createElement("ul");
//	ul_1.className="imgs";/*1.很重要的一步，添加了整个的样式*/
//	var li=[];/*2.创建数组*/
//	var imgs=[];
//	for(var i=0;i<3;i++){
//		li[i]=document.createElement("li");
//		imgs[i]=document.createElement("img");
//		imgs[i].src="images/img"+(i+1)+".jpg";/*3.图片路径和css里的不一样，注意写法，注意是(i+1)*/
//		imgs[i].alt=i+1;
//		li[i].appendChild(imgs[i]);/*4.添加的顺序不能变，先里后外*/
//		ul_1.appendChild(li[i]);	
//	}
//	body.appendChild(ul_1);
//
//	var title_2=document.createElement("h3");
//	title_2.innerHTML="新玩家得史诗卡";
//	title_2.className="title";
//	body.appendChild(title_2);
//	
//	var ul_2=document.createElement("ul");
//	ul_2.className="imgs";
//	var li_2=[];
//	var imgs_2=[];
//	var p=[];
//	var pText=["飞龙宝宝","女巫","王子"];
//	for(var j=0;j<3;j++){
//		li_2[j]=document.createElement("li");
//		imgs_2[j]=document.createElement("img");
//		p[j]=document.createElement("p");
//		p[j].innerHTML=pText[j];
//		imgs_2[j].src="images/ico"+(j+1)+".jpg";
//		imgs_2[j].alt=j+1;
//		li_2[j].appendChild(imgs_2[j]);
//		li_2[j].appendChild(p[j]);
//		ul_2.appendChild(li_2[j]);	
//	}
//	body.appendChild(ul_2);
//}


/*用jQuery实现*/
$(function(){
	var $body=$("body");
	var $bg=$("<div class='background'></div>");/*直接创建并且套用了样式*/
	$bg.appendTo($body);     /*背景创建完了，注意是appendTo*/
	
	var $h3_1=$("<h3 class='title'>玩法介绍</h3>");
	$h3_1.appendTo($body);
	var $ul_1=$("<ul class='imgs'></ul>");
	var $li_1=[];
	var $imgs_1=[];
	for(var i=0;i<3;i++){
		$li_1[i]=$("<li></li>");
		$imgs_1[i]=$("<img>");
		$imgs_1[i].attr("src","images/img"+(i+1)+".jpg");
		$imgs_1[i].attr("alt",i+1);
		$imgs_1[i].appendTo($li_1[i]);
		$li_1[i].appendTo($ul_1);
	}
	$ul_1.appendTo($body);
});
