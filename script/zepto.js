/**
*@fileName:简易绘制扇形图
*@author:ykx
*@time:2016/12/15 9:55
*@disc:基于jq封装
**/
;(function($){
    $.fn.arcProgress = function(settings){
        /*
         *disc:参数描述
         *@param:width,height canvas元素宽高
         *@param:diameter 扇形的半径
         *@param:start 起始位置 left,top,right,bottom四个方向
         *@param:percentage 默认占比
         *@param:bgColor 底层圆的填充色
         *@param:sectorColor 扇形的填充色
         *@param:speed 扇形动画速度
         */
        var defaultSettings = {
            width : 200,
            height : 200,
            diameter : 80,
            start : "top",
            bgColor : 'red',
            sectorColor : 'rgba(55, 55, 55, 1)',
            percentage : 20,
            speed : 1
        }
        settings = $.extend({},defaultSettings,settings);
        this.draw = function(){
            var self = this;
            self.attr('width', settings.width);
            self.attr('height', settings.height);
            CanvasRenderingContext2D.prototype.sector = function(x, y, radius, sDeg, eDeg){//绘制扇形方法(摘要网上的方法)
                //初始保存
                this.save();
                //位移到目标点的位置
                this.translate(x,y);
                this.beginPath();
                //画圆弧
                this.arc(0,0,radius,sDeg,eDeg);
                //再次保存状态
                this.save();
                //选择至起始角度
                this.rotate(eDeg);
                //移动到终点,链接圆心与终点
                this.moveTo(radius,0);
                //连接到圆心
                this.lineTo(0,0);
                //还原
                this.restore();
                //旋转至起始角度
                this.rotate(sDeg);
                //从圆心连接到起点
                this.lineTo(radius,0);
                this.closePath();
                //还原到最初保存的状态
                this.restore();
                return this;//this指代了CanvasRenderingContext2D
            };
            var ctx = self[0].getContext("2d"),startPos = 0;
            var hw = self.width() / 2;
            var hh = self.height() / 2;
            var u = 100;//将圆分为100份
            var a = 0;//起始分数
            
            /*
             *disc:单步绘制扇形
             *@param: ratio占比
             */
            var l = function(ratio){
                //将已经绘制的扇形清除
                ctx.clearRect(0,0,self.width(),self.height());
                //这里绘制背景圆
                
                ctx.fillStyle = settings.bgColor;
                ctx.beginPath();
                ctx.arc(hw,hh,settings.diameter,0,Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                //将占比转化为度数,在100中的占比
                var r = Math.PI / 180 * 360 / u * ratio;
                switch(settings.start) {
                    case 'top':
                        startPos = Math.PI * 1.5;
                        break;
                    case 'right':
                        startPos = 0;
                        break;
                    case 'bottom':
                        startPos = Math.PI * 0.5;
                        break;
                    case 'left':
                        startPos = Math.PI * 1;
                        break;
                    default:
                        startPos = Math.PI * 1.5;
                        break;
                }
                ctx.fillStyle = settings.sectorColor;
               // alert(startPos);
                ctx.sector(hw,hh,settings.diameter,startPos,startPos + r).fill();//这里能够链式调用
            }
            setTimeout(function stepDraw(){
                l(a + 1);//单步绘制
                a += 1;
                if(a < settings.percentage){
                    setTimeout(stepDraw,settings.speed);
                }
            },settings.speed)
        };
        return this.draw();
    }
})