<script>
import BaseDataChild from "./BaseDataChild";
import BaseIf from "./BaseIf";
import BaseModel from "./BaseModel";
export default {
  data() {
    return {
      content: "tantasn"
    };
  },

  components: {
    BaseDataChild,
    BaseIf,
    BaseModel
  },
  directives: {
    slice: {
      bind(el, binding, vnode) {
        // console.log(binding);
        let { value, expression, arg = 5, modifiers } = binding;
        // console.log(vnode);
        // console.log(modifiers);
        if (modifiers.number) {
          value = value.replace(/[^0-9]/g, "");
        }

        const context = vnode.context;
        // console.log(context);
        el.value = value.slice(0, arg);
        context[expression] = el.value.slice(0, arg);
      },
      update(el, binding, vnode) {
        // const {value,expression} = binding;
        // const context = vnode.context;
        // el.value = context[expression];
        let { value, arg, expression, modifiers } = binding;
        const { context } = vnode;

        // console.log(value);
        if (typeof value === "number") {
          value = String(value);
        }
        if (modifiers.number) {
          value = value.replace(/[^0-9]/g, "");
        }
        el.value = value.slice(0, arg);
        context[expression] = value.slice(0, arg);
        el.oninput = function() {
          let { value } = el;
          context[expression] = value.slice(0, arg);
          el.value = value.slice(0, arg);
        };
      }
    }
  },

  render(createElement) {
    return createElement(
      "div",
      {
        class: {
          foo: true,
          bar: false
        },
        style: {
          color: "red",
          fontSize: "14px"
        },
        attrs: {
          id: "test"
        }
      },
      [
        "xxx",
        createElement("base-data-child", {
          props: {
            name: "basedatachild组件"
          },
          //原生事件
          nativeOn: {
            click: function() {
              console.log("native click");
            }
          }
        },[createElement('p','默认插槽'),
            createElement('div',{
                slot:'child'
            },'具名插槽')]),
        createElement("p", {
          domProps: {
            innerHTML: "<span>domPropsInnerHTML</span>"
          },
          on: {
            click: function() {
              console.log("p点击");
            }
          }
        }),
        createElement("input", {
          directives: [
            {
              name: "slice",
              value: this.content,
              expression: "content",
              arg: 5,
              modifiers: {
                number: true
              }
            }
          ]
        }),
        this.content,
        createElement("base-if", {
          props: {
            items: ["ran",'you','best']
          }
        }),
        createElement('base-model')
      ]
    );
  }
};
</script>