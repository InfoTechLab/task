window.onload=function(){
	var oHd=document.createElement('div');
	document.body.appendChild(oHd);
	oHd.className='hd';
	
	var oBd=document.createElement('div');
	document.body.appendChild(oBd);
	oBd.className='bd';
	
//	创建h3
	var oTitle=document.createElement('h3');
	var title1=document.createTextNode('玩法介绍');
	oTitle.appendChild(title1);
	var oImgList=document.createElement('ul');
	oBd.appendChild(oTitle);
	oBd.appendChild(oImgList);
	oTitle.className='title';
	oImgList.className='imgList';
	
//	创建li,img
	var aLi=[];
	var aImg=[];
	var i=0;
	var j=0;
	for(i=0;i<3;i++){
		j=i+1;
	   aLi[i]=document.createElement('li');
	   aImg[i]=document.createElement('img');
	   aImg[i].setAttribute("src","images/img"+j+".jpg");
		aImg[i].setAttribute("alt","");
	   oImgList.appendChild(aLi[i]);
	   aLi[i].appendChild(aImg[i]);
	}
	
	
	var oLast=document.createElement('div');
	document.body.appendChild(oLast);
	oLast.className='last';
	
//	创建h3,ul	
	var oAward=document.createElement('h3');
	var title2=document.createTextNode('新玩家100%得史诗卡');
	oAward.appendChild(title2);
	var oAwardList=document.createElement('ul');
	oLast.appendChild(oAward);
	oLast.appendChild(oAwardList);
	oAward.className='title award';
	oAwardList.className='awardList';
	
//	创建li,img,p	
	var aList=[];
	var aImgL=[];
	var  aP=[];
	var i=0;
	var j=0;
	for(i=0;i<4;i++){
		j=i+1;
	 aList[i]=document.createElement('li');
	 aImgL[i]=document.createElement('img');
		aImgL[i].setAttribute("src","images/ico"+j+".jpg");
		aImgL[i].setAttribute("alt","");
	 aP[i]=document.createElement('p');
		oAwardList.appendChild(aList[i]);
	   aList[i].appendChild(aImgL[i]);
	   aList[i].appendChild(aP[i]);
	}
	aP[0].innerHTML='飞龙宝宝';
	aP[1].innerHTML='女巫';
	aP[2].innerHTML='王子';
	aP[3].innerHTML='骷髅军团';

};