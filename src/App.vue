<template>
  <div id="app">
    <Header :poiInfo="poiInfo" />
    <Nav/>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
export default {
  name: 'App',
  data(){
    return{
      poiInfo:{

      }
    }
  },
  components: {
    Header,
    Nav
  },
  created(){
    fetch("/api/goods").then(res=>{
      return res.json()
    }).then(res=>{
      console.log(res)
      this.poiInfo=res.data.poi_info
    })
  }

}
</script>

<style>

</style>
