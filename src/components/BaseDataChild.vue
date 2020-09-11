<template>
    <div class="child">{{ name }}
        <slot name='child'></slot>
        <slot></slot> 
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type:String
        }
    },
}
</script>