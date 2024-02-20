// 1.获取元素
const result=document.querySelector('.result')
const input=document.querySelector('.search')
const  ul=document.querySelector('.resultList')
//2.监听事件 获得焦点
input.addEventListener('focus',function(){
  result.style.display='block';
})
//3.监听事件  失去焦点
input.addEventListener('blur',function(){
  result.style.display='none';
})