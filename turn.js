window.onload=function(){
    //为音乐标签添加src
    // document.querySelector(".audio").src="./song/再回首.mp3";
    // //添加音乐的歌名
    // document.querySelector('.musicname').innerHTML ="再回首"

    //添加音乐数组
    let musicList=[
         "../song/再回首.mp3",
         "../song/magic.mp3",
         "../song/富士山下.mp3",
         "../song/关键词.mp3",
         "../song/红玫瑰.mp3",
         "../song/千千万万.mp3"
    ]
     let titleList=["再回首","magic","富士山下","关键词","红玫瑰","千千万万"]
     let imageList=["../photo/1.jpg","../photo/2.jpeg","../photo/3.jpg","../photo/4.jpg","../photo/5.jpeg","../photo/6.jpeg"]
     let artList=["再回首<br>云遮断归途<br>再回首<br>荆棘密布<br>今夜不会再有难舍的旧梦<br>曾经与你有的梦<br>今后要向谁述说",
                      "我看过沙漠下暴雨<br>看过大海亲吻鲨鱼<br>看过黄昏追逐黎明<br>没看过你<br>我知道美丽会老去<br>生命之外还有生命",
                      "一生一世等一天需要代价<br>谁都只得那双手<br>靠拥抱亦难任你拥有<br>要拥有必先懂失去怎接受",
                      "有一种踏实<br>是你心中有我名字<br>落叶的位置<br>谱出一首诗<br>时间在消逝<br>我们的故事开始",
                      "得不到永远在骚动,被偏爱的都有恃无恐",
                      "穿越人海为见你一面"]
     //初始化
     var num=5;
    //  document.querySelector(".audio").src=musicList[num];
    //  document.querySelector(".musicname").innerHTML=titleList[num];
    //选择器的封装复用
   function fn(name){
     return  document.querySelector(name)
   }
   fn(".audio").src=musicList[num];
   fn(".musicname").innerHTML=titleList[num];
   fn(".okk").src=imageList[num];
   fn(".pk").src=imageList[num];
   fn(".article").innerHTML=artList[num];
   fn(".audio").ontimeupdate=function(){
    console.log(111)
   }
    var audio=fn(".audio")
    //播放
    fn(".play").onclick=function(){
        if(audio.paused){
            audio.play()
            fn(".pk").style.animationPlayState='running';
        }
    }

    fn(".pause").onclick=function(){
        if(audio.played){
            audio.pause()
            fn(".pk").style.animationPlayState='paused';
        }
    }
    //实现上一首功能
    fn(".prev").onclick=function(){
        
        num--;
        if (num<0){
        num=musicList.length-1
        }
        fn(".audio").src=musicList[num];
        fn(".musicname").innerHTML=titleList[num];
        fn(".okk").src=imageList[num];
        fn(".article").innerHTML=artList[num];
        fn(".pk").src=imageList[num];
        audio.play();
        fn(".pk").style.animationPlayState='running';
    }
    //实现下一首功能
    fn(".next").onclick=function(){
        
        num++;
        if (num>5){
        num=num-6;
        }
        fn(".audio").src=musicList[num];
        fn(".musicname").innerHTML=titleList[num];
        fn(".okk").src=imageList[num];
        fn(".article").innerHTML=artList[num];
        fn(".pk").src=imageList[num];
        audio.play();
        fn(".pk").style.animationPlayState='running';
    }
    fn(".musicname").onclick=function(){
        fn(".lyric").style.display='block';
    }
    fn(".footer-img").onclick=function(){
        fn(".lyric").style.display='none';
    }
    //播放列表  播放6首歌曲
     fn(".song1").onclick=function(){
        fn(".audio").src=musicList[0];
        fn(".musicname").innerHTML=titleList[0];
        fn(".okk").src=imageList[0];
        fn(".article").innerHTML=artList[0];
        fn(".pk").src=imageList[0];
        audio.play();
        fn(".pk").style.animationPlayState='running';
     }
     fn(".song2").onclick=function(){
        fn(".audio").src=musicList[1];
        fn(".musicname").innerHTML=titleList[1];
        fn(".okk").src=imageList[1];
        fn(".article").innerHTML=artList[1];
        fn(".pk").src=imageList[1];
        audio.play();
        fn(".pk").style.animationPlayState='running';
     }
     fn(".song3").onclick=function(){
        fn(".audio").src=musicList[2];
        fn(".musicname").innerHTML=titleList[2];
        fn(".okk").src=imageList[2];
        fn(".article").innerHTML=artList[2];
        fn(".pk").src=imageList[2];
        audio.play();
        fn(".pk").style.animationPlayState='running';
     }
     fn(".song4").onclick=function(){
        fn(".audio").src=musicList[3];
        fn(".musicname").innerHTML=titleList[3];
        fn(".okk").src=imageList[3];
        fn(".article").innerHTML=artList[3];
        fn(".pk").src=imageList[3];
        audio.play();
        fn(".pk").style.animationPlayState='running';
     }
     fn(".song5").onclick=function(){
        fn(".audio").src=musicList[4];
        fn(".musicname").innerHTML=titleList[4];
        fn(".okk").src=imageList[4];
        fn(".article").innerHTML=artList[4];
        fn(".pk").src=imageList[4];
        audio.play();
        fn(".pk").style.animationPlayState='running';
     }
     fn(".song6").onclick=function(){
        fn(".audio").src=musicList[5];
        fn(".musicname").innerHTML=titleList[5];
        fn(".okk").src=imageList[5];
        fn(".article").innerHTML=artList[5];
        fn(".pk").src=imageList[5];
        audio.play();
        fn(".pk").style.animationPlayState='running';
     }

     //音量的部分
     var yl=fn(".yl") ;
     yl.onmouseenter=function(){
        fn(".volume").style.display='block'
     } ;
     yl.onclick=function(){
        fn(".volume").style.display='none'
     } 
     var volume=fn(".volume")
     volume.onchange=function(){
        audio.volume=volume.value;
     }
   
}
