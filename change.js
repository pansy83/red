//初始数据
const data=[
    {url:'http://p1.music.126.net/QQ1jyxktSmpgbRe515_WpA==/109951169314388865.jpg'},
    {url:'http://p1.music.126.net/-iofc34iRtGVdYBCV7IUQg==/109951169314385993.jpg'},
    {url:'http://p1.music.126.net/p5ErYFU6864esn0BAyuk1g==/109951169314388945.jpg'},
    {url:'http://p1.music.126.net/Kpxk7Gz2rRkesrQfFAAFXg==/109951169314397285.jpg'},
    {url:'http://p1.music.126.net/DgSn1JCq9a13NkBvbQ5MJQ==/109951169314394893.jpg'},
    {url:'http://p1.music.126.net/s5LGT1eBMaCgMAp--_VIhg==/109951169314406066.jpg'}
]
function toggle(){
    img.src=data[i].url
    //1.5更换小圆点
    document.querySelector('.indicator .active').classList.remove('active')
    document.querySelector(`.indicator li:nth-child(${i+1})`).classList.add('active')
}

// 获取元素
const img=document.querySelector('.box3-img')
// 1.右按钮业务
//1.1获取右侧按钮
const right=document.querySelector('.box3-right')
let i=0
//1.2注册点击事件
right.addEventListener('click',function(){
    i++
    // 1.6判断条件 如果大于5 就复原为0 
    if(i>=5){
        i=0}
    toggle()
    //1.3得到对应的对象
    // console.log(data[i])
}
    )
// 2.左按钮业务
//2.1获取左侧按钮
const left=document.querySelector('.box3-left')

//2.2注册点击事件
left.addEventListener('click',function(){
    i--
    // 2.6判断条件 如果小于0 就复原到7
    if(i<0){
        i=7
    }
    //2.3得到对应的对象
    // console.log(data[i])
    toggle()}
    )
    //3.自动播放模块
    let timer=setInterval(function(){
        right.click()
    },3000)
    //4.鼠标经过大盒子，停止定时器
    const box3=document.querySelector('.box3')
    //注册事件
    box3.addEventListener('mouseenter',function(){
        //停止定时器
        clearInterval(timer)
    })
   //5.鼠标离开大盒子，开启定时器
   //注册事件
   box3.addEventListener('mouseleave',function(){
    //停止定时器
    clearInterval(timer)
    //开启定时器
    timer=setInterval(function(){
        right.click()
    },3000)
   })
 