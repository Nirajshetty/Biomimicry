<template>
  <div class="background">
    <div>
      <Navbar style="z-index:3;position:relative"/>
       <div style="margin-top: -150px; padding-left: 965px;z-index:2">
        <img
          src="@/assets/block3.png"
          style="position:relative;"
          width="550px"
          alt=""
        />
      </div>
    </div>
    <div class="aboutDiv">
      <h2 class="connect">What is Biomimicry?</h2>
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
      <div style="text-align:center;padding-right:1130px;padding-top:50px">
        <button>Know More</button>
      </div>
      <div style="margin-top: -430px; padding-left: 700px">
        <img src="@/assets/ecosystem.png" width="750px" alt="" />
      </div>
      <div style="margin-top: -200px; padding-right: 1170px">
        <img src="@/assets/block2.png" width="400px" height="250px" alt="" />
        
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  name: "CourseNew",
  components: { Navbar },
  data() {
    return {};
  },
};
</script>






<style >
.connect {
  font-family: poppins;
  font-size: 50px;
  color: white;
  padding-top: 50px;
  font-weight: 700;
  padding-left: 60px;
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
.background {
  background-repeat: no-repeat;
  height: 100% !important;
  background-size: cover;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  background-color: #2c4e7e;
}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
}
</style>