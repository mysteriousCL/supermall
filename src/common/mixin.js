import {BACKTOPSHOWPOSITION} from "./const";
import MoveTop from "components/content/moveTop/MoveTop";
export const backTop= {
  data(){
    return {
      is_back_show:false,
    }
  },
  methods:{
    //返回顶部
    moveTop(){
      this.$refs.scroll.bs.scrollTo(0,0,300)
    },
    // 判断是否显示返回顶部按钮
    backShow(y){
      this.is_back_show = y < BACKTOPSHOWPOSITION
    },
  },
  components:{
    MoveTop
  }
}
