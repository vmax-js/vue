<template>
  <div class="datePicker" v-click-outside>
    <div class="input">
      <span>
        <i class="iconfont icon-date"></i>
      </span>
      <input type="text" :value="chooseDate" />
    </div>
    <div class="picker" v-if="showPanel">
      <!-- 小尖尖 连接 -->
      <div class="picker-allow"></div>
      <div class="picker-header">
        <span class="iconfont icon-prev-year picker-btn" />
        <span class="iconfont icon-prev-month picker-btn" />
        <span class="date">{{showDate.year}}年{{showDate.month}}月</span>
        <span class="iconfont icon-next-month picker-btn" />
        <span class="iconfont icon-next-year picker-btn" />
      </div>
      <div class="picker-body">
        <div class="picker-week">
          <div v-for="week in ['日','一','二','三','四','五','六']" :key="week">{{ week }}</div>
        </div>
        <div class="picker-day">
          <div v-for="date in showDay" :key="date.getTime()">{{ date.getDate() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 自定义指令
  directives: {
    // 这么做有一个bug 就是div是块级元素 独占一行 需要改变display：inline-block
    //还需要改进 上面一行要短些 需要要将下面的dom脱离文档流display：absolute
    "click-outside": {
      // el 使用这个指令的dom vnode.context 可以拿到vue中的函数
      bind(el, binding, vnode) {
        const vm = vnode.context;
        document.onclick = e => {
          const target = e.target;
          const isElSon = el.contains(target);
          if (isElSon) {
            // 如果vm.showPanel为false才执行
            if (!vm.showPanel) {
              vm.changeShow(true);
              // console.log("show");
            }
            // 一直点击的话 一直执行
            // console.log("show");
          } else {
            if (vm.showPanel) {
              vm.changeShow(false);
              // console.log("hide");
            }
          }
        };
      }
    }
  },
  props: {
    date: {
      type: Date,
      default() {
        return new Date();
      }
    }
  },
  computed: {
    // 处理输入框显示的日期
    chooseDate() {
      const {year,month,date} = this.getYaerMonthDay(this.date);
      return `${year}-${month}-${date}`;
    },
    showDay(){
      const resArr = [];
      let {year,month} = this.showDate;
     
      month = parseInt(month);
      //month加了1 这里要减一个1
      const startDay = new Date(year,month-1,1); 
      const week = startDay.getDay();
      const firstDay = startDay - week * 24 * 60 * 60 * 1000;
      for(let i = 0; i < 42;i++){
        resArr.push(new Date(firstDay + i * 24 * 60 * 60 * 1000));
      }
      return resArr;
    }
  },
  methods: {
    //关于详细日期的显示问题，看我们点击的源对象是否发生在日期组件的上面
    changeShow(flag) {
      this.showPanel = flag;
    },
    getshowDate() {
      const {year,month,date} = this.getYaerMonthDay(this.date);
      this.showDate = {
        year,
        month,
        date
      };
    },
    getYaerMonthDay(dates) {
      const year = dates
        .getFullYear()
        .toString()
        .padStart(4, "0");
      const month = (dates.getMonth() + 1).toString().padStart(2, "0");
      const date = dates.getDate().toString().padStart(2, "0");
      return {
        year,
        month,
        date
      };
    }
  },
  data() {
    return {
      showPanel: false,
      showDate: {
        year: 0,
        month: 0,
        date: 0
      }
    };
  },
  created() {
    this.getshowDate();
  }
};
</script>

<style scoped>
@import "./assets/font.css";
.datePicker {
  /* 解决点击显示div独占一行的问题 */
  display: inline-block;
  /* background-color: red; */
}
.datePicker .input input {
  height: 40px;
  line-height: 40px;
  padding: 0 30px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background-color: #fff;
}
.datePicker .input {
  position: relative;
}
.datePicker .input span {
  position: absolute;
  /* background-color: red; */
  height: 100%;
  line-height: 40px;
  left: 5px;
  width: 25px;
  /* 文本居中 */
  text-align: center;
  /* 日历图标的颜色 */
  color: #c0c4cc;
}
.picker {
  width: 322px;
  height: 329px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  margin-top: 5px;
  /* x y blur spread */
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  /* 防止用这个组件时有背景颜色的干扰 */
  background-color: #fff;
  /* 解决显示问题 */
  /* position: relative; */
  position: absolute;
}
.picker .picker-allow {
  width: 0px;
  height: 0px;
  border: 6px solid transparent;
  border-bottom-color: #e4e7ed;
  position: absolute;
  top: -12px;
  left: 30px;
}
.picker .picker-allow::after {
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  border: 6px solid transparent;
  border-bottom-color: #fff;
  position: absolute;
  top: -5px;
  left: -6px;
}
.picker .picker-header {
  padding-top: 15px;
  padding-bottom: 10px;
  /* border-bottom: 1px solid #e4e7ed; */
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.picker .picker-header .picker-btn {
  margin: 0 5px;
  font-size: 12px;
  color: #303133;
  cursor: pointer;
}
.picker .picker-header .date {
  margin: 0 40px;
  user-select: none;
}
.picker-body {
  padding: 0px 10px 10px 10px;
  /* 用户不能选中 */
  user-select: none;
  color: #606266;
}
.picker-body .picker-week {
  display: flex;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ebeef5;
}
.picker-body .picker-day {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.picker-body .picker-day div {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  /* background: red;  */
  cursor: pointer;
  font-size: 14px;
  margin: 4px 6px;
}
.picker-body .picker-day div:hover {
  color: #4091ff;
}
.picker-body .picker-day div.is-today {
  color: #4091ff;
  font-weight: 700;
}
.picker-body .picker-day div.is-select {
  background-color: #4091ff;
  color: #fff;
  border-radius: 50%;
}
.picker-body .picker-day div.other-month {
  color: #c0c4cc;
}
</style>