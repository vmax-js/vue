<script>
export default {
  data() {
    return {
      value: "tscn321"
    };
  },
  render(h) {
    //   var self  = this;
    return h("div", {

    }, [h("input",{
        attrs:{
            value:this.value
        },
        on:{
            
            // input:function(e){
            //     //this -> null
            //     // console.log(e.target.value);
                
            //     self.value = e.target.value;

            // }
            input:(e)=>{
                this.value = e.target.value;
            }
        }
    },), this.value]);
  }
};
</script>