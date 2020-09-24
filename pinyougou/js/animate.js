function animate(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        // 必须放在定时器内，否则obj.offsetLeft是一个定值
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        // 到指定条件停止定时器
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            // 在结束时判断有无回调函数，有则执行
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}