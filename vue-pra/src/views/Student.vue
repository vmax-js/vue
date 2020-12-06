<template>
    <div class="student">
        学生信息
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to,from,next){
        // 没有this
        // 可以发送请求
    
        // vm相当于this
        next(vm=>{
            console.log(vm.$axios)
            console.log(vm.name)
        });
    },
    data(){
        return {
            name:'Tscn'
        }
    }
}
</script>