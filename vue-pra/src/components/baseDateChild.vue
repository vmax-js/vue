<template>
  <div class="child">{{ myProp }}</div>
</template>

<script>
export default {
    props:{
        myProp:{
            type: String,
            require:true
        }
    }
};
</script>
 
 <style scoped>
</style>