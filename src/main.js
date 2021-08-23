let html = document.querySelector('#html') // 通过css选择器找到这个元素
let style = document.querySelector('#style')
let string1 = `
/*为了展示我的部分前端学习成果，接下来我将实时演示绘制一幅太极图。
首先，准备一个div作为太极图的底*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来进行div到太极图的转换*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
    background: linear-gradient(90deg, rgba(255,255,255,1) 
    0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加中心球*/
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 
    0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 
    0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;
let n = 0;
let string2 = '';
let step = () => {
    setTimeout(() => {
        if (string1[n] == "\n") {
            string2 += "<br>" // 对换行进行转义
        }
        else if (string1[n] == " ") {
            string2 += "&nbsp" // 对空格进行转义
        }
        else {
            string2 += string1[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string1.substring(0, n);
        window.scrollTo(0, 66666);
        html.scrollTo(0, 66666);
        if (n < string1.length - 1) {
            n += 1;
            step();
        }
    }, 50)
}
step();


