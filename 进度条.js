//获取元素
let audio=document.querySelector('.audio');
let progress=document.querySelector('.progress');
let progressContainer=document.querySelector('progress-container');
function updateProgress() {  
    const percent = (audio.currentTime / audio.duration).toFixed(2) * 100;  
    progress.style.width = percent + '%';  
  }  
  audio.ontimeupdate = updateProgress();
  //进度条做不来