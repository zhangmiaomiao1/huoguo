function rem(size){
    var clientW=document.documentElement.clientWidth
    var bili=clientW/size;
    var fontSize=bili*100;
    document.getElementsByTagName("html")[0].style.fontSize=fontSize+"px"
}
window.onload=function(){
    rem(1080)
}/**
 * Created by Administrator on 2016/10/31.
 */
