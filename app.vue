<template>
    <div id="app">
        <date-picker :date="date"></date-picker>
    </div>
</template>

<script>
import DatePicker from "./DatePicker";
export default {
    components:{
        DatePicker
    },
    data(){
        return {
            date: new Date()
        }
    }
}
</script>

<style scoped>

</style>