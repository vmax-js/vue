<script>
export default {
    props:{
        items:{
            type:Array
        }
    },
    mounted(){
        console.log(this.$refs);
    },
    render(h){
        if(this.items.length){
            return h('ul',this.items.map(item=>h('li',{
                key:item,
                ref:'li',
                refInFor:true
            },item)))
        } else {
            return h('p','no found items');
        }
    }
}
</script>