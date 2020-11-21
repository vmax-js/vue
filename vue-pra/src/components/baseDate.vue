
<script>
import BaseDateChild from "./baseDateChild";
import BaseIfFor from './BaseIfFor';
import BaseModel from "./BaseModel.vue"
// render函数的使用
export default {
  data() {
    return {
      content: "shanshanf"
    };
  },
  // <div class style>
  directives: {
    slice: {
      bind(el, binding, vnode) {
        const vm = vnode.context;
        let { value, expression, arg, modifiers } = binding;

        if (modifiers.number) {
          value = value.replace(/[^0-9]/g, "");
        }

        el.value = value.slice(0, arg);
        vm[expression] = value.slice(0, arg);

        el.oninput = function(e) {
          let inputVal = el.value;

          if (modifiers.number) {
            inputVal = inputVal.replace(/[^0-9]/g, "");
          }

          el.value = inputVal.slice(0, arg);
          vm[expression] = inputVal.slice(0, arg);
        };
      },
      update(el, binding, vnode) {
        const vm = vnode.context;
        let { value, arg, expression, modifiers } = binding;

        if (modifiers.number) {
          value = value.replace(/[^0-9]/g, "");
        }

        el.value = value.slice(0, arg);
        vm[expression] = value.slice(0, arg);
      }
    }
  },
  components: {
    BaseDateChild,
    BaseIfFor,
    BaseModel
  },
  render(createElment) {
    return createElment(
      "div",
      {
        class: {
          foo: true,
          bar: false
        },
        style: {
          color: "red",
          fontSize: "16px"
        },
        attrs: {
          id: "foo"
        }
      },
      [
        "文本子节点",
        createElment("base-date-child", {
          // 组件 props
          props: {
            myProp: "组件props"
          },
          // 监听组件的原生事件
          nativeOn: {
            click: function() {
              console.log("nativeOn");
            }
          }
        }),
        createElment("div", {
          // dom属性
          domProps: {
            innerHTML: "dom属性"
          },
          // 事件监听器
          on: {
            click: function() {
              console.log("事件监听器");
            }
          }
        }),
        createElment("input", {
          // <input v-slice:5.number="content">
        //   自定义指令
          directives: [
            {
              name: "slice", // v-slice
              value: this.content,
              expression: "content",//v-slice ='content'
              arg: 5,
              modifiers: {
                number: true
              }
            }
          ]
        }),
        this.content,
        // 模拟 v-if v-for
        createElment('base-if-for',{
            props:{
                items:['tan','dfsd','dfsdf','dfsdfs']
            }
        }),
        createElment('base-model')
      ]
    );
  }
};
</script>