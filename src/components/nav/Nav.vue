<template>
    <div>
        <div class="nav">
            <router-link to="/goods" class="nav-item">点餐</router-link>
            <router-link to="/ratings" class="nav-item">评价</router-link>
            <router-link to="/sellers" class="nav-item">商家</router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  border-bottom: 1px solid #e4e4e4;
}
.nav-item {
  flex: 1;
  text-align: center;
  color: #666;
}
.active {
  color: #daa520;
  position: relative;
}
.active::after{
    content: '';
    position:absolute;
    width: 20px;
    height: 2px;
    background-color: #daa520;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
}
</style>