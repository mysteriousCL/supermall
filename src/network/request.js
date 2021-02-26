import axios from "axios";


export function request(config){
  //1.创建实例
  const instance = axios.create({
    baseURL:'',
    timeout:5000
  })
  //2.拦截器的使用
  // 请求成功与失败时的拦截器
  instance.interceptors.request.use((config)=>{
    return config
  },(err)=>{
    return err
  })
  // 响应成功与失败时的拦截器
  instance.interceptors.response.use(response=>{
    return response.data
  },err=>{
    return err
  })

  // instance(config) 内部直接返回一个promise
  //3.返回实例
  return instance(config)
}

export function request1(config){

  //1.创建实例
  const instance1 = axios.create({
    baseURL:'',
    timeout:5000
  })

  instance1.interceptors.request.use((config)=>{
    return config
  },(err)=>{
    return err
  })

  instance1.interceptors.response.use(response=>{

    return response.data
  },err=>{
    return err
  })

  return instance1(config)
}
