var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');
var items = document.querySelectorAll('.item');
//for 循环绑定点击事件
for(var i=0;i < lis.length;i++){
    lis[i].setAttribute('index',i);
    lis[i].onclick = function() {
        //
        for(var i=0;i < lis.length;i++){
            lis[i].className = '';
        }
        //留下现在需要用的
        this.className = 'current';
        //下面显示内容模块
        var index = this.getAttribute('index');
        console.log(index);
        //去掉其他的 item，让这些隐藏起来
        //只留下当前的 item，让它显示出来
        for(var i=0;i<items.length;i++){
            items[i].style.display='none';
        }
        items[index].style.display = 'block';
    }
}