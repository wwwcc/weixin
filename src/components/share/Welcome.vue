<template>
  <div class="welcome" :class="{hide:hide}">
     <img src="https://sinacloud.net/vue-wechat/images/welcome.jpg" alt="6666">
  </div>
</template>


<script>
export default {
  name:'Welcome',
 data(){
   return{
     hide:false
   }
 },
  created(){
      setTimeout(()=>{
          this.hide=true;
      },1000)
  }
}
</script>

 <style scoped>
  .welcome{
    /* border: 3px solid red; */
    top: 0;
    bottom: 0;
    left: 0;
    background: #000b17;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 6;
  }
  .welcome img{
    /* border: 3px solid rebeccapurple; */
    top: -3px;
    bottom: 0;
    width: 100%;
  }
</style>


