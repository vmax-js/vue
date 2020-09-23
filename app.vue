<template>
    <div>
        xxx
        {{ msg }}
        <base-son/>
    </div>
</template>

<script>
import baseSon from './Son';
export default {
    components:{
        baseSon
    },
    data(){
        return {
            msg: "我是爸爸"
        }
    }
}
</script>

<style scoped>
div{
    color: red;
}
</style>