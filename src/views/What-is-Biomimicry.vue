<template>
  <div class="background1">
    <div>
       <div style="margin-top: -10px; padding-left: 965px;z-index:2">
        <img
          src="@/assets/block3.png"
          style="position:relative;"
          width="550px"
          alt=""
        />
      </div>
    </div>
    <div class="aboutDiv">
      <h2 class="connect1" style="padding-left:20px !important;padding-top:0px !important;">What is Biomimicry?</h2>
      <div style="padding-left: 65px; padding-top: 50px">
        <p
          style="
            font-size: 30px;
            font-weight: 400;
            color: white;
            text-align: left;
            font-family: poppins;
            width: 600px;
            color: #8df5ec;
          "
        >
          Biomimicry Compass provides professional training, education and consulting to enable innovation using nature’s design strategies and engineering principles
        </p>
        
      </div>
      <div style="text-align:center;padding-right:1130px;padding-top:50px;z-index: 17 !important;position: relative;">
        <button>Know More</button>
      </div>
      <div style="margin-top: -500px; padding-left: 700px">
        <img src="@/assets/ecosystem.png" width="650px" alt="" />
      </div>
      <div style="margin-top: -213px; padding-right: 1170px">
        <img src="@/assets/block2.png" width="400px" height="250px" alt="" />
        
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: "CourseNew",
  components: {  },
  data() {
    return {};
  },
};
</script>






<style scoped>
.connect1 {
  font-family: poppins;
  font-size: 50px;
  color: white;
  margin-top: -100px !important;
  margin-left: 40px;
  font-weight: 700;
  padding-left: 60px !important;
  text-align: left;
}
button {
 width: 263.76px;
height: 59px;
 background: #06245C;
border-radius: 43.3824px;
  color: white;
  font-family: poppins;
  font-size: 25px;
  font-weight: 700;
  border: #06245C;
}
.background1 {
  background-repeat: no-repeat;
  background-size: cover;
height: 718px !important;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  margin-top: 10px !important;
  background-color: #2c4e7e !important;
}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
}
</style>