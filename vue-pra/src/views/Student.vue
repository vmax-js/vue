<template>
    <div class="student">
        <student-add />
        <hr>
        <student-list />
    </div>
</template>

<script>
import StudentList from '@/components/StudentList.vue';
import StudentAdd from '@/components/StudentAdd.vue';
export default {
    // beforeRouteEnter(to,from,next){
    //     // 没有this
    //     // 可以发送请求
    
    //     // vm相当于this
    //     next(vm=>{
    //         // console.log(vm.$axios)
    //         // console.log(vm.name)
    //     });
    // },
    // data(){
    //     return {
    //         name:'Tscn'
    //     }
    // }
    components:{
        StudentList,
        StudentAdd
    }
}
</script>