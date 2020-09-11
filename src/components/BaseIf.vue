<script>
export default {
    props:{
        items:Array
    },
    mounted(){
        console.log(this.$refs);
    },
    render(h){
        if(this.items.length){
            return h('ul',this.items.map(item => h('li',{
                key:item,
                ref:'li', //导致this.$refs为最后一个对象
                refInFor:'li' //导致this.$refs为数组
            },item)));
        } else{
            return h('p','No items Found');
        }
    }
}
</script>