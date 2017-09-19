/*
* @Author: 宏达
* @Date:   2017-09-19 16:28:31
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-19 18:05:46
*/
function $(select,ranger){
	ranger=ranger?ranger:document;
	var first=select.charAt(0);
	if(first=='.'){
       return document.getElementsByClassName(select.substring(1),ranger);
	}else if(first=='#'){
       return document.getElementById(select.substring(1));
	}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
	   return document.getElementsByTagName(select,ranger);
	}
}