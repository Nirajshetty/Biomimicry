<template>
  <div class="background">
    <div>
      <Navbar style="z-index:3;position:relative"/>
       <div style="margin-top: -150px; padding-right: 1200px;z-index:2">
        <img
          src="@/assets/Vectorblock113.png"
          style="position:relative;"
          alt=""
        />
        
      </div>
      <div style="margin-top: -390px; padding-right: 1200px;z-index:2">
        <img
          src="@/assets/blockInside.png"
          style="position:relative;"
          alt=""
        />
        
      </div>
    </div>
    <div class="aboutDiv">
      <h2 class="connect">Consulting and Innovation Services</h2>
      <div style="padding-left: 65px; padding-top: 50px">
        <p
          style="
            font-size: 30px;
            font-weight: 400;
            color: white;
            text-align: left;
            font-family: poppins;
            width: 700px;
            color: #8df5ec;
          "
        >
          We work with businesses and industries to create new, sustainable products, services and processes. Wheather you are seeking innovation or looking for transformative  solutions or driving sustainability, we can provide the tools, processes and resources to help you succeed
        </p>
        
      </div>
      <div style="text-align:center;padding-right:1130px;padding-top:50px">
        <button>Learn More</button>
      </div>
      <div style="margin-top:-550px; padding-left: 430px">
        <img src="@/assets/tree.png" height="850px" alt="" />
      </div>
      <div style="margin-top:-220px; padding-right: 1170px">
        <img src="@/assets/Vectorblock114.png" width="400px" alt="" />
        
      </div>
      <div style="margin-top:-90px; padding-left:750px">
        <img src="@/assets/grass1.png"  alt="" />
        
      </div>
      <div style="margin-top:-90px; padding-left:1200px">
        <img src="@/assets/grass2.png"  alt="" />
        
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
 background: #ffffff;
border-radius: 43.3824px;
  color: #06245C;
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
  margin-top: -100px;
}
</style>