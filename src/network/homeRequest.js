import {request,request1} from "./request";

//首页的请求都封装在这里,进行统一的管理

export function homeRequestMultidata(){
  return request({
    url:'/home/multidata',
  })
}
export function homeRequestData(type,page){
  return request1({
    url:'/home/data',
    params:{
      type,page
    }
  })
}
