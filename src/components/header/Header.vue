<template>
    <div class="header">
       {{poiInfo.name}}
    </div>
</template>

<script>
    export default {
        props:{
            poiInfo:{
                type:Object,
                default:{}
            }
        },
       components:{
       } 
    }
</script>

<style scoped>

</style>