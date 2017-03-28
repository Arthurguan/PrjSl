/**
 * local Store
 */
function setLocalBarcode(barcode){
	window.localStorage.setItem("bc.", barcode);
};
function getLocalBarcode(){
	var bc= window.localStorage.getItem("bc.");
	commonMessage(bc);
};
//wc. wcnStr. bc. un. pw. 
function setLocalStorage(key,value){
	window.localStorage.setItem(key, value);	
};
function getLocalStorage(key){
	var v = localStorage.getItem(key);
	return v == undefined ? null : v;
};
function setLocalUser(value){
	window.localStorage.setItem("un.", value);	
};
function setPassword(value){
	window.localStorage.setItem("pw.", value);	
};
function getLocalUser(){
	//alert(window.localStorage.getItem("un."));
	return window.localStorage.getItem("un.");
};
function getLocalPassWord(){
	return window.localStorage.getItem("pw.");
};
function cleanUserAndPassword(){
	window.localStorage.removeItem("un.");
	window.localStorage.removeItem("pw.");
};
function serverUrl(){
	//serverIp = $("#serverIp").val();
	//serverProject = $("#serverProject").val();
	//serverPort = $("#serverPort").val();
//	serverIp = getLocalStorage("serverIp");
//	serverProject =getLocalStorage("serverProject");
//	serverPort =getLocalStorage("serverPort");
	return getLocalStorage("serverUrl");
	//return "http://" + serverIp + ":" + serverPort + "/" + serverProject + "/";
	//return window.localStorage.getItem("serverUrl");
};
//条码
function getAllBarcode(){
	
};


function setBarcodes(){
	
};
//function getLastBarcode(){
//	return window.localStorage.getItem("lbc.");
//}
//function setLastBarcode(value){
//	window.localStorage.setItem("lbc.", value);	
//}

//function getLocalBarcode(userName){
//	var l=window.localStorage.length;
//	var i=0;
//	var itemKey;
//	for(i;i<l;i++){
//	itemKey=window.localStorage.key(i);
//	if(item.match(/^un[.]/)){
//		window.localStorage.getItem(itemKey);
//	}
//	}
//	
//}

/**
 * 渲染工位选择区域,设置页面
 */

//<label>工作中心1</label>
//<input id="aaaaa" type="checkbox" name="test2" value="1"><label for="aaaaa">Male</label>
//<input id="bbbbb" type="checkbox" name="test2" value="2"><label for="bbbbb">Female</label>
//<input id="ccccc" type="checkbox" name="test2" value="3"><label for="ccccc">N/A </label>
//<br style="clear:both">

var newsWc ='<option value="{{ gid }}">{{ name }}</option>';
var wcHead ='<select id="sel_select"  onchange="alert($(\'#sel_select\').val())"><option value="0">请选择</option>';
var wcFoot ='</select>';

var newsWc2 = '<input id="{{id}}" type="radio" name="wcs" value="{{id}}"><label for="{{id}}">{{name}}</label>';
var wcHead2='<label>{{ workCenterName }}</label>';
var wcFoot2 ='<br style="clear:both">';
var wcHead3 ='<div class="input-group">';
var wcJson;//全局保存wcJson,但不存入本地.

//选择的工作中心.
function saveWcs(){
	var id_array=new Array();
	var name_array=new Array();
	var code_array=new Array();
	var wcname_array=new Array();
	$('input[name="wcs"]:checked').each(function(){
	    id_array.push($(this).val());//向数组中添加元素
	    //在json中查出workCenterName,与workCellName,拼成字符串
	    //name_array
		var wc=wcJson[$(this).val()];
	    code_array.push(wc["code"]);
	    wcname_array.push(wc["name"]);
	    name_array.push("["+wc["workCenterName"]+":<font color=\"red\">"+wc["name"]+","+wc["code"]+"</font>]");
	    //将该字符串,用于显示
	    
	});
	var idstr=id_array.join('_|_');//将数组元素连接起来以构建一个字符串
	var nameStr=name_array.join(' ');
	var codestr=code_array.join('_|_');
	var wcnamestr=wcname_array.join('_|_');
	$('#wcLabel').html(nameStr);
	setLocalStorage('wcName.',wcnamestr);
	setLocalStorage('wcCode.',codestr);
	//保存idstr 到本地,
	setLocalStorage('wc.',idstr);
	//保存[工作中心:工作单元]到本地
	setLocalStorage('wcnStr.',nameStr);
	//[工作中心:工作单元用于显示用]
	$.ui.goBack();

	
	
}
function  renderWc2(data){
	wcJson=data;
	var workCenterNameOld;
	var wcHtml;
	var wcsMarkup = "";
	var j=0;
	 for(var i in data){ 
		 var wc = data[i]; 
		 //alert(workCenterNameOld);
		 if(workCenterNameOld!= data[i]["workCenterName"])
		 {
			 wcsMarkup +=wcFoot2;
			 //alert(data[i]["workCenterName"]);
			 workCenterNameOld=data[i]["workCenterName"];
			 wcsMarkup +=Mustache.to_html(wcHead2,wc);
			 //if(j!=0){
				
			 //}
		 }
		 j++;
		 wcsMarkup +=Mustache.to_html(newsWc2,wc); ;
		    
	  } 
	  $("#wcDiv2").html(wcsMarkup);
}
//加载工作单元
function loadWcs(){
	
//	var navsText;
	var userName= getLocalUser();
//	var pw=getLocalPassWord();
	var url=serverUrl();
	alert(url);
	$.ajax({
	url : url + "ext/script/appWorkCells?callback=?",
	dataType : "application/json",
	data : {
		userName:userName
	},
	success : function(data) {
		var wcs = JSON.parse(data);
		//alert(data);
		renderWc2(wcs);		
	},
	error : function(data) {alert("访问服务器失败,请检查网络,或联系管理员===loadWcs.");}
	});
}
function testRenderWc()
{
// var json='[{"001":{"gid":"001","name":"总装1","code":"ZZ1","wcc":"GZDY"}},{"002":{"gid":"002","name":"总装2","code":"ZZ2","wcc":"GZSS"}}]';
 var json='{"402885e74a08b281014a0e36fb850d35":{"id":"402885e74a08b281014a0e36fb850d35","workCenterName":"冲压一区","code":"05-CY1","workCenterCode":"11-CY1","name":"折弯"},"402885e74a08b281014a0e36fb850d36":{"id":"402885e74a08b281014a0e36fb850d36","workCenterName":"冲压一区","code":"06-CY1","workCenterCode":"11-CY1","name":"锯断"},"402885e74a08b281014a0e36fb850d29":{"id":"402885e74a08b281014a0e36fb850d29","workCenterName":"厚开卷一区","code":"05-HKJ1","workCenterCode":"06-HKJ1","name":"折弯"},"402885e74a08b281014a0e36fb850d28":{"id":"402885e74a08b281014a0e36fb850d28","workCenterName":"厚开卷一区","code":"04-HKJ1","workCenterCode":"06-HKJ1","name":"修边"},"402885e74a2db3af014a2e3bb2a80013":{"id":"402885e74a2db3af014a2e3bb2a80013","workCenterName":"门板一线","code":"01-MB1","workCenterCode":"06-MB1","name":"MB1-OP01"},"402885e74a08b281014a0e36fb850d31":{"id":"402885e74a08b281014a0e36fb850d31","workCenterName":"冲压一区","code":"01-CY1","workCenterCode":"11-CY1","name":"剪"},"402885e74a08b281014a0e36fb850d32":{"id":"402885e74a08b281014a0e36fb850d32","workCenterName":"冲压一区","code":"02-CY1","workCenterCode":"11-CY1","name":"冲"},"402885e74a08b281014a0e36fb850d33":{"id":"402885e74a08b281014a0e36fb850d33","workCenterName":"冲压一区","code":"03-CY1","workCenterCode":"11-CY1","name":"压"},"402885e74a08b281014a0e36fb850d34":{"id":"402885e74a08b281014a0e36fb850d34","workCenterName":"冲压一区","code":"04-CY1","workCenterCode":"11-CY1","name":"修边"},"402885e74a2db3af014a32239122003b":{"id":"402885e74a2db3af014a32239122003b","workCenterName":"总装一线","code":"02-ZZ1","workCenterCode":"11-ZZ1","name":"ZZ1-OP02"},"402885e74a2db3af014a2e45c2050016":{"id":"402885e74a2db3af014a2e45c2050016","workCenterName":"总装一线","code":"01-ZZ1","workCenterCode":"11-ZZ1","name":"ZZ1-OP01"},"402885e74a08b281014a0e36fb850d27":{"id":"402885e74a08b281014a0e36fb850d27","workCenterName":"厚开卷一区","code":"03-HKJ1","workCenterCode":"06-HKJ1","name":"压"},"402885e74a08b281014a0e36fb850d26":{"id":"402885e74a08b281014a0e36fb850d26","workCenterName":"厚开卷一区","code":"02-HKJ1","workCenterCode":"06-HKJ1","name":"冲"},"402885e74a08b281014a0e36fb850d25":{"id":"402885e74a08b281014a0e36fb850d25","workCenterName":"厚开卷一区","code":"01-HKJ1","workCenterCode":"06-HKJ1","name":"剪"},"402885e74a55b8de014a710fa3f8030a":{"id":"402885e74a55b8de014a710fa3f8030a","workCenterName":"底架一线","code":"03-DJ1","workCenterCode":"05-DJ1","name":"DJ1-OP03部装下料"},"402885e74a08b281014a0e36fb850d30":{"id":"402885e74a08b281014a0e36fb850d30","workCenterName":"厚开卷一区","code":"06-HKJ1","workCenterCode":"06-HKJ1","name":"锯断"},"402885e74a2db3af014a2e3aca5b0013":{"id":"402885e74a2db3af014a2e3aca5b0013","workCenterName":"底架一线","code":"02-DJ1","workCenterCode":"05-DJ1","name":"DJ1-OP02部装过点"},"402885e74a2db3af014a2e3aca5b0012":{"id":"402885e74a2db3af014a2e3aca5b0012","workCenterName":"底架一线","code":"01-DJ1","workCenterCode":"05-DJ1","name":"DJ1-OP01部装上料"}}';

 //var json ="{\"1231nasdioasrsef\":{gid:'1231nasdioasrsef',code:'123',name:'测试'，workCenterCode:'GZDY'}}";
	//var json ="[{\"1231nasdioasrsef\":{\"gid\":\"1231nasdioasrsef\",\"code\":\"123\",\"name\":\"测试\",\"workCenterCode\":\"GZDY\"}}]";

	//$.parseJSON(json);
 renderWc2($.parseJSON(json));

}
function goSelectWorkCell()
{
//	if(getLocalUser()=='admin')
//	{	
		loadWcs();
		$("#linkWorkCell").click();
//	}else{
//		alert("只有管理员可操作该功能");
//	}
	
}

/**
 * 渲染Nav区域,导航栏
 */
//var newsNav = "<h2>{{ title }}</h2><p>{{ url }}</p>"
var newsNav ='<li  class="icon cloud"><a href="#mainPage" onclick="setMainPage(\'{{ url }}\',\'{{ type }}\',\'{{ title }}\')" id="nav_tab0" style="padding-top: 8px;">{{ title }}</a></li>';
var navHead ='<ul class="list">';
var navFoot ='</ul>';
function renderNav(navs) {
	var navsMarkup = "",
            navHtml;
	    navsMarkup +=navHead;
	    if(navs)
	    {
	    	 navs.forEach(function (nav) {
	             navHtml = Mustache.to_html(newsNav, nav);
	             navsMarkup += navHtml;
	         });
	         navsMarkup +=navFoot;
	         $("#navDiv").html(navsMarkup);
	    }
       
    };
function testLoadNav()
{
	//Type 0:没有扫描, 1:有扫描, 2:有拍照, 3,有扫描,也有拍照
	var navsText='[{ "title":"生产采集" , "url":"dbts/acqData.html","type":1 },{ "title":"模块装配" , "url":"dbts/acqAssembly.html","type":2  },{ "title":"下线报工" , "url":"dbts/acqOffline.html","type":0  },{ "title":"返修判定" , "url":"dbts/acqRepair.html","type":1 },{ "title":"返修处理" , "url":"dbts/acqRepairProcess.html","type":1 },{ "title":"ANDON报警" , "url":"dbts/andonAlarm.html","type":1 },{ "title":"国内件入库" , "url":"dbts/internalIn.html","type":1 },{ "title":"国外件入库" , "url":"dbts/externalIn.html","type":1 }]';
	
	renderNav(JSON.parse(navsText));	
};
//加载菜单
function loadNav(){
	//var navsText='{"navs": [{ "title":"Bill" , "url":"http://www.baidu.com" },{ "title":"George" , "url":"http://www.baidu.com" },{ "title":"Thomas" , "url":"http://www.baidu.com" }]}';
	
	var navsText;
	var un= getLocalUser();
	var pw=getLocalPassWord();
	var url=serverUrl();
	$.ajax({
	url : serverUrl() + "ext/script/appUrls?callback=?",
	//dataType : "text",
	dataType : "jsonp",
	data : {
		un:un,
		pw:pw,
		url:url
	},
	success : function(data) {

		var navsArray = JSON.parse(data);
		renderNav(navsArray);		
	},
	error : function(data) {alert("访问服务器失败,请检查网络,或联系管理员."+data);}
	});
	//$.get("http://localhost:8030/mestar-web/" + "ext/script/appUrls?callback=?",function(res){console.log(res)});
	//var navsText='[{ "title":"Baidu" , "url":"http://www.baidu.com" },{ "title":"Sina" , "url":"http://www.sina.com.cn" },{ "title":"Taobao" , "url":"http://www.taobao.com" }]';
//	var req=new XMLHttpRequest();
//	req.onreadystatechange = function
	
};


/**
 * 设置主界面URL
 * @param url
 */




var lasturl;
var urltime = new Date().getTime();
//添加参数
function addUrlParameter(sourceUrl, parameterName, parameterValue, replaceDuplicates)
{
    if ((sourceUrl == null) || (sourceUrl.length == 0)) sourceUrl = document.location.href;
    var urlParts = sourceUrl.split("?");
    var newQueryString = "";
    if (urlParts.length > 1)
    {
    	//var parameters = urlParts[1].split("&");//
    	var parameters = urlParts[urlParts.length-1].split("&");//
    	for (var i=0; (i < parameters.length); i++)
    	{
    		var parameterParts = parameters[i].split("=");
    		if (!(replaceDuplicates && parameterParts[0] == parameterName))
    		{
    			if (newQueryString == ""){}
    				//newQueryString = "?";
    			else
    				newQueryString += "&";
    			newQueryString += parameterParts[0] + "=" + parameterParts[1];
    		}
    	}
    }
    if (newQueryString == ""){}
    	//newQueryString = "?";
    else
    	newQueryString += "&";
    newQueryString += parameterName + "=" + parameterValue;
    var newurl="";
    if (urlParts.length > 1){
    	
    	for(var j=0;j<urlParts.length-1;j++){
    		newurl=newurl+urlParts[j]+"?";
    	}
    	 return newurl + newQueryString;
    }else{
    	 return urlParts[0] + "?"+newQueryString;
    }
   
}
//更改参数原只有 url
function test(){
	var url="http://www.baidu.com?xx=xx&yy=yy?abc=abc";
	//var url="http://www.baidu.com"
		alert(url.indexOf("&wcs=", 0));
	if(url.indexOf("&wcs=", 0)==-1){
	//不存在wcs参数添加wcs参数
		url=url+"";
	}
	//url=
	url=addUrlParameter(url,"wcs","abc",true);
	alert(url);
	//没有是-1
	
}


var historys=[];
historys.push("功能页面");
//加载菜单到主页面
function setMainPage(url,type,title){
//	alert(type);
//	$("#mainButton").bind("click",function(){
//		$("#mainIframe").attr("src","");
//		$("#mainIframe").attr("src", url);
//	});
	//Type 0:只有主页面, 1:有扫描, 2:有拍照, 3,有扫描,也有拍照
	//alert(url);
	//if(getLocalStorage("wc.")!=""){
		//---url=addUrlParameter(url,"wcs",getLocalStorage("wc."),true);
	//}
	//拼接设备ID参数
//	url=addUrlParameter(url,"deviceId",device.uuid,true);
	//记录点击url的时间戳
	//---urltime = new Date().getTime();
	//---url=addUrlParameter(url,"urltime",urltime,true);
	//alert(url);
	
	//---$("#mainIframe").removeClass('mainIframe1');
	if(url.indexOf("!")>0){
		var un= getLocalUser();
		var pw=getLocalPassWord();
		url=serverUrl()+"autoLoginController!login.m?_u=" +un+ "&_p=" +pw  + "&_to=" + url+"&un=" +un+ "&pw=" +pw; 
		url=addUrlParameter(url,"wcs",getLocalStorage("wc."),true);
		url=addUrlParameter(url,"deviceId",device.uuid,true);
		urltime = new Date().getTime();
		url=addUrlParameter(url,"urltime",urltime,true);
		$("#mainIframe").removeClass('mainIframe1');
		$("#mainIframe").attr("src", url);
	}else{
		$("#mainIframe").attr("src", url);
	}
		var srcUrl=url.split("/");
	setLocalStorage("srcUrl",srcUrl[1]);
	//新页面打开<东风贝尔的项目使用>
	//window.open(url, '_blank', 'location=no');	
//	if(type==0){
//		//alert(0);
//		$("#tabScan").bind("singleTap",function(){
//			//alert("该页面.未注册该功能.");
//		  });
//		$("#tabPic").bind("singleTap",function(){
//			//alert("该页面.未注册该功能.");
//		  });
//	}else if(type==1){
//		//alert(1);
//		//$('#tabScan').style.display = 'block';
//		//$('#mainPage').attr('data-footer', 'footerui_t1');
//		//$().serialize();
//		//$('#at2').click();
//		//$("#tabScan").onclick("alert()");
//		//$("#tabScan").attr("onclick","alert()");
//		//$("#tabScan").bind("singleTap",function(){
//		$("#tabScan").bind("singleTap",function(){
//			scan();
//		  });
//		$("#tabPic").bind("singleTap",function(){
//			//alert("该页面.未注册该功能.");
//		  });
//	}else if(type==2){
//		
//		//$('#tabPic').style.display = 'block';
//		//$('#at2').click();
//		
//		$("#tabScan").bind("singleTap",function(){
//			//alert("该页面.未注册该功能.");
//		  });
//		$("#tabPic").bind("singleTap",function(){
//			capturePhoto();
//		  });
//	}else if(type==3){
//		//alert(3);
//		//$('#tabScan').style.display = 'block';
//		//$('#tabPic').style.display = 'block';
//		//$('#at2').click();
//		$("#tabScan").bind("singleTap",function(){
//			scan();
//		  });
//		$("#tabPic").bind("singleTap",function(){
//			capturePhoto();
//		  });
//	}
	$.ui.setTitle(title);
	lasturl=url;//记录url,供扫码等操作
	$('#tabMain').text(title);
	
	//appendMessage('url',url);	
	//alert(url);
	//$("#mainButton").click();

}

function goBackTitle(){

	//history.go(-1);
	//递归去掉连续且重复的元素
	historys=myMethod(historys);
	historys.pop()
	$.ui.setTitle(historys[historys.length-1]);
}
function myMethod(historys){
			var arr1=new Array();
		for(var i=0;i<historys.length;i++){
			if(historys[i]==historys[i+1]){
			
				}else{
				arr1.push(historys[i]);
			}
		}
		return arr1;
		
	}
/*
 * 拍照的代码去掉,暂时不需要. var pictureSource; //设定图片来源 var destinationType; //选择返回数据的格式
 * document.addEventListener("deviceready", onDeviceReady, false); //
 * Cordova准备好了可以使用了 function onDeviceReady() { // alert("摄像头开始准备");
 * pictureSource = navigator.camera.PictureSourceType; destinationType =
 * navigator.camera.DestinationType; // alert("摄像头准备完毕！"); }
 */
function capturePhoto() {
	//alert("拍照....");
	var uploadPhoto = function(imageURI) {
		//alert(imageURI);
		var options = new FileUploadOptions();
		options.fileKey = "file";// 用于设置参数，对应form表单里控件的name属性，这是关键，废了一天时间，完全是因为这里，这里的参数名字，和表单提交的form对应
		options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
		// 如果是图片格式，就用image/jpeg，其他文件格式上官网查API
		options.mimeType = "image/jpeg";
		options.chunkedMode = false;
		var params = {};
		params.deviceId = device.uuid;//将设备id当作参数传过去
		params.url = lasturl;//将当前url当作参数传过去
		params.urltime = urltime;//将点击url的时间戳当作参数传过去
		options.params = params;
		// options.mimeType =
		// "multipart/form-data";//这两个参数修改了，后台就跟普通表单页面post上传一样
		// enctype="multipart/form-data"
		// 这里的uri根据自己的需求设定，是一个接收上传图片的地址
		var uri = encodeURI(serverUrl() + "ext/uploadPhoto");
		// 显示上传进度
	    var showUploadingProgress = function( progressEvt ){
	        if( progressEvt.lengthComputable ){
	            navigator.notification.progressValue( Math.round( ( progressEvt.loaded / progressEvt.total ) * 100) );
	        }
	    };
		var ft = new FileTransfer();
		ft.onprogress = showUploadingProgress;
		// alert("开始上传...");
		//navigator.notification.alert("开始上传...", null, "进行中", "确认");
		navigator.notification.progressStart("", "当前上传进度");
		ft.upload(imageURI, uri, function(r) {
			navigator.notification.progressStop();
			if(200==r.responseCode){
				navigator.notification.alert("上传成功!", null, "Done", "确认");
			}
//			alert("上传成功!");
		}, function(error) {
			alert("An error has occurred: Code = " + error.code
					+"<br/>upload error source " + error.source
					+"<br/>upload error target " + error.target);
		}, options, true);
	},
	onFail = function(message) {
		//alert('Failed because: ' + message);
		navigator.notification.alert(message, null, "Fail", "确认");
	},
	options = {
		quality:50,
		destinationType:navigator.camera.DestinationType.FILE_URI,// 这里要用FILE_URI，才会返回文件的URI地址
		// destinationType : Camera.DestinationType.DATA_URL,
		sourceType:Camera.PictureSourceType.CAMERA,
		// allowEdit : true,
		//targetWidth:400,
		//targetHeight:300,
		encodingType:Camera.EncodingType.PNG,
		saveToPhotoAlbum:false,
		correctOrientation:true
	};
	navigator.camera.getPicture(uploadPhoto, onFail, options);
}

function mainPageClick()
{
	setMainPage("main.html","1","菜单主页");
}

/*function scan() {
	 cordova.plugins.barcodeScanner.scan(function(result) {
		//document.getElementById("headScan0").value = result.text;
		//校验扫描结果
		//TODO 跳转
		var un= getLocalUser();
		if(result.text!=null&&result.text!='')  
		{
			//setLocalBarcode(result.text);
			refreshMainFill();
			var url =lasturl+"&bc="+result.text+"&un="+un;
			//
			
//			appendMessage("URL:", ""+url);
		    //alert(url);//KIM测试
			//TODO
			$("#mainIframe").attr("src", url);
			//appendMessage("系统",url);
		}

		appendMessage("系统", "扫描条码:"+result.text);
			
			//window.localStorage.setItem("scanBarcodeInput", result.text);
			//var newVal=getLocalStorage("scanBarcodeInput");
				//alert(result.text);
//				window.mainIframe.clearBarcodeInput();
//				
//				//延迟500毫米
//				setTimeout(function(){
			        var resultTxt = result.text;
					appendMessage(1,resultTxt.substr(resultTxt.length-7)+"--")
					window.mainIframe.barcodeInputRefresh(resultTxt);
//					
//				},500);
				
			
			
			//alert("page.js:"+result.text);
			//alert(result.text);
			
		}
		//return result.text;
		//refreshMainFill();
	}, function(error) {
		alert("Scan failed: " + error);
	});
}*/

function headClose() {
	// AppServer.alertMessage("提示", "调用关闭!");
	// $.ui.showMask('调用关闭...')
}

function commonMessage(message) {
	$("#afui").popup(message);
}

function alertMessage(message) {
	$("#afui").popup({
		title : "警告!",
		message : message,
		cancelText : "取消",
		cancelCallback : function() {
			console.log("alert,取消");
		},
		doneText : "确认",
		doneCallback : function() {
			console.log("alert,确认");
		},
		cancelOnly : false
	});
}
function jump(next){
	var nextInp = document.getElementById(next);
	var event = arguments.callee.caller.arguments[0] || window.event;
	if(event.keyCode == 13){//判断是否按了回车，enter的keycode代码是13，想看其他代码请猛戳这里。
	nextInp.focus();
	}
};
//$('#loginbutton').click()
function jumpButton(next){
	var nextInp = document.getElementById(next);
	var event = arguments.callee.caller.arguments[0] || window.event;
	if(event.keyCode == 13){//判断是否按了回车，enter的keycode代码是13，想看其他代码请猛戳这里。
	
		//window.setTimeout(function() { nextInp.click(); }, 500);
		
	}
};

//function login(message) {
//	$("#afui")
//			.popup(
//					{
//						title : "系统登录",
//						message : "用户名: <input id='uname' onkeydown='jump(\"pw\")' type='text' class='af-ui-forms'><br>密码: <input id='pw' onkeydown='jump(\"action\")'  type='password' class='af-ui-forms' style='webkit-text-security:disc'><span style='color:red' id='loginMessage'>"+message+"</span>",
//						cancelText : "取消",
//						cancelCallback : function() {
//							//登出系统
//							//navigator.app.exitApp();
//						},
//						doneText : "确定",
//						doneCallback : function() {
////							alert("Logging in")
//							//KIM
//							//校验用户名,密码,先
//							var username=$("#uname").val();
//							var pw=$("#pw").val();
//							checkUser(username,pw);
//							//alert(2);
//						},
//						cancelOnly : false
//					});
//	var username = getLocalUser();
//	if(username!=''){
//		$("#uname").val(username);
//		//$("#pw").val(getLocalPassWord());
//	}
//	//var username=$("#uname").val();
//}

function logintest(){		    

	var username=$("#uname").val();
	var pw=$("#pw").val();
	
	setLocalStorage("username",username);
	
	try {
		checkUser(username,pw);
	} catch (e) {
		$.ui.hideMask();
		alert(e);
	}
	
	
    var username = getLocalStorage("username",username);
    
    if(username!=''){
	$("#uname").val(username);
    }

}
//保存最后尝试登录的用户名
function savelogin(){
	var username=$("#uname").val();
	setLocalStorage("username",username);
}

function checkUser(un,pw){
	var url=serverUrl();
	var result;
	//alert(serverUrl() + "ext/script/appLogin?callback=?");
	$.ui.showMask("正在登录...");
	$.ajax({
	//url : serverUrl() + "ext/script/appLogin?callback=?",
	 url : serverUrl()+"ext/script/appLoginFetchUrls?callback=?",//请求合并
	dataType : "jsonp",
	async:false,
	data : {
		un:un,
		pw:pw
	},
	success : function(data) {	
		$.ui.hideMask();
		result = JSON.parse(data);	
		if(result.result.indexOf('error:') == 0){//约定,错误的信息error:
			//showMask("用户名或密码不正确!");
			//login(result.result);//
			alert(result.result);
		}else{
			updateVersion(getLocalStorage("serverUrl"));
			setLocalUser(un);
			setPassword(result.result);//存储加载后的密码		
			setLocalStorage("navs.", data);//urls的json串. 
			
			//TODO 停顿
			setTimeout("window.location.href = 'index.html'",1000);
			//window.location.href = 'index.html';
			//var navsArray = JSON.parse(data);
			
			/*var ajaxRequest = $.ajax({
				url : serverUrl() + "ext/script/appUrls?"+"pw="+result.result+"&un="+un+"&url=noUrl&callback=?",
				//dataType : "text",
				timeout : 10000, //超时时间设置，单位毫秒
				dataType : "jsonp",
//				data : {
//					un:un//,
//					//pw:result.result//,
//					//url:url
//				},
				success : function(data) {
					//alert(data);
					$.ui.hideMask();
					window.location.href = 'index.html';
					//var navsArray = JSON.parse(data);
					//alert(data);
					setLocalStorage("navs.", data);//urls的json串.
//					renderNav(navsArray);	
					
					
				},
				error : function(data) {
					$.ui.hideMask();
					alert("访问服务器失败,请检查网络,或联系管理员.");
					
				},
				complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
					alert(status);
				if(status=='timeout'){//超时,status还有success,error等值的情况
					$.ui.hideMask();
					ajaxRequest.abort();
				  alert("连接服务器超时!");
				}
				}
				});*/
			
			//loadNav();
			//加载工作单元
			//loadWcs();
			
			 
		}
	},
	error : function(data) {
		flag=1;
		$.ui.hideMask();
		//login("访问服务器超时,请检查网络设置."+data);
		alert("访问服务器超时,请检查网络设置."+data);
	}
	});
	
}

function updateVersion(UpdateUrl){
	appendMessage("debug",UpdateUrl);
	var updateApp = cordova.require('com.beyond.plugins.updateapp.updateapp');
	updateApp.checkAndUpdate(UpdateUrl+"ext/updateApp");
	//[{'verCode':2,'verName':'1.1','apkPath':'http://27.17.43.38/App.apk'}]
};

function setStartParams(){
	//alert("哈喽");
	if(document.getElementById("toggle1").checked){
		serverIpWai = $("#serverIp").val();
		serverProjectWai = $("#serverProject").val();
		serverPortWai = $("#serverPort").val();
		//储存到本地
		setLocalStorage("serverIpWai",serverIpWai);
		setLocalStorage("serverProjectWai",serverProjectWai);
		setLocalStorage("serverPortWai",serverPortWai);
		var thisServerUrl ="http://" + serverIpWai + ":" + serverPortWai + "/" + serverProjectWai + "/";
		
	}else{

		serverIp = $("#serverIp").val();
		serverProject = $("#serverProject").val();
		serverPort = $("#serverPort").val();
		//储存到本地
		setLocalStorage("serverIp",serverIp);
		setLocalStorage("serverProject",serverProject);
		setLocalStorage("serverPort",serverPort);
		var thisServerUrl ="http://" + serverIp + ":" + serverPort + "/" + serverProject + "/";
	}
	
	
	//var thisServerUrl ="http://" + serverIp + ":" + serverPort + "/" + serverProject + "/";
	//alert(thisServerUrl);
	setLocalStorage("serverUrl",thisServerUrl);
	
}

function saveServerInfo(){
	    setStartParams();
		//alert(getLocalStorage("serverUrl")+"fsdfsdfdsf");
	    //检测升级
	    updateVersion(getLocalStorage("serverUrl"));//20150609
		alert( $("#saveEdit").html() + "成功！");
		//window.location.href = 'login.html';
		$.ui.goBack();
	}


function showMask(text) {
	// 2S的Mask
	$.ui.showMask(text);
	window.setTimeout(function() { $.ui.hideMask(); }, 2000);
}

function appendMessage(type,message){
	$("#messageList").prepend(''+type+'|&nbsp;'+message+'');
}
function resetMessage(){
	$("#messageList").html('<li>系统|&nbsp;这是日志消息<li>');
}
function scan() {
	
	 cordova.plugins.barcodeScanner.scan(function(result) {
		//document.getElementById("headScan0").value = result.text;
		//校验扫描结果
		//TODO 跳转
		var un= getLocalUser();
		//alert("un:"+un);
		if(result.text!=null&&result.text!='')  
		{
			//setLocalBarcode(result.text);
			/*refreshMainFill();
			var url =lasturl+"&bc="+result.text+"&un="+un;
			//
			
//			appendMessage("URL:", ""+url);
		    //alert(url);//KIM测试
			//TODO
			$("#mainIframe").attr("src", url);
			//appendMessage("系统",url);
		}

		appendMessage("系统", "扫描条码:"+result.text);*/
			
			//window.localStorage.setItem("scanBarcodeInput", result.text);
			//var newVal=getLocalStorage("scanBarcodeInput");
				//alert(result.text);
//				window.mainIframe.clearBarcodeInput();
//				
//				//延迟500毫米
//				setTimeout(function(){
			        var resultTxt = result.text;
					appendMessage(1,resultTxt.substr(resultTxt.length-7)+"--")
					//alert("resultTxt:"+resultTxt);
					window.mainIframe.barcodeInputRefresh(resultTxt);
//					
//				},500);
				
			
			
			//alert("page.js:"+result.text);
			//alert(result.text);
			
		}
		//return result.text;
		//refreshMainFill();
	}, function(error) {
		alert("Scan failed: " + error);
	});
}
