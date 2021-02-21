import {request1} from "./request";

export function getDetail(iid){
  return request1({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommends(){
  return request1({
    url:'/recommend'
  })
}


export class Goods {
  constructor(itemInfo,columns,services) {
    this.oldPrice = itemInfo.oldPrice
    this.newPrice = itemInfo.price
    this.title = itemInfo.title
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.dec = itemInfo.desc
    this.realPrice = itemInfo.lowNowPrice

  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.score = shopInfo.score
    this.sells = shopInfo.cSells
    this.goodsCount = shopInfo.cGoods
    this.fans = shopInfo.cFans
  }
}

export class GoodsParams {
  constructor(info,rule) {
    this.rule_title = rule.key || "";
    this.rule_dec = rule.disclaimer || "";
    this.image = info.images ? info.images[0] : "";
    this.size = rule.tables;
    this.info_title = info.key
    this.infos = info.set;
  }
}
