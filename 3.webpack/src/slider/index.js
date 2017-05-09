export default class Slider{
    //向当前页面中插入一个slider
    render(){
        let div = document.createElement('div');
        div.className = 'wrapper';
        let ul = document.createElement('ul');
        ul.className = 'sliders';
        //这是源图片路径
        let images = [require('./images/1.jpg'),require('./images/2.jpg'),require('./images/3.jpg')];
        let lis = images.map(function(image){
            let li =  document.createElement('li');
            li.className = 'slider';
            li.innerHTML  = `<img src="${image}">`;
            return li;
        });
        lis.forEach(function(li){
            ul.appendChild(li);
        });
        div.appendChild(ul);
        document.body.appendChild(div);
    }
}