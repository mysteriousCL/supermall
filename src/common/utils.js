export function debounce(fn,delay,immediate=false){
  let timer = null;
  return function(){
    timer && clearTimeout(timer);
    if(immediate && !timer){

      fn.apply(this,arguments);
      timer = setTimeout(()=>{
        timer = null
      },delay)

    }else{

      timer = setTimeout(()=>{
        fn.apply(this,arguments)
        timer = null
      },delay)
    }
  }
}

export function throttle(func, wait, options) {
  // options 配置是否立即/延迟执行
// 忽略开始函数的的调用，可传入{leading: false}。,
// 忽略结尾函数的调用，可传入{trailing: false}
// 两者不能共存，否则函数不能执行
  let timeout, context, args, result;
  let previous = 0;
  if (!options) options = {};
  let later = function() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  let throttled = function() {
    let now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  }

  return throttled;
}
