<script>
export default {
  data() {
    return {
      value: "tantna"
    };
  },
  render(h) {
    return h(
      "div",
      {
        class: {
          name: true
        }
      },
      [
        h("input", {
          attrs: {
            value: this.value
          },
          on:{
              input:(e)=>{
                  this.value = e.target.value;
              }
          }
        }),
        this.value
      ]
    );
  }
};
</script>