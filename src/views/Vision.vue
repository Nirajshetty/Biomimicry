<template>
  <div class="background">
    <div>
      <Navbar style="z-index:3;position:relative"/>
       <div style="margin-top: -110px; padding-right: 1200px;z-index:2">
        <img
          src="@/assets/block4.png"
          style="position:relative;"
          width="350px"
          alt=""
        />
          <img
            src="@/assets/bird1.png"
            style="position: relative;margin-top:-550px;padding-left:1300px"
            alt=""
          />
          <img
            src="@/assets/bird2.png"
            style="position: relative;margin-top:-400px;padding-left:1400px"
            alt=""
          />
          <img
            src="@/assets/bird3.png"
            style="position: relative;margin-top:-550px;padding-left:1220px"
            alt=""
          />
          <img
            src="@/assets/bird4.png"
            style="position: relative;margin-top:-600px;padding-left:1450px"
            alt=""
          />
          <img
            src="@/assets/bird5.png"
            style="position: relative;margin-top:-800px;padding-left:1480px"
            alt=""
          />
          <img
            src="@/assets/bird6.png"
            style="position: relative;margin-top:-600px;padding-left:1120px"
            alt=""
          />
          <img
            src="@/assets/bird7.png"
            style="position: relative;margin-top:-600px;padding-left:1480px"
            alt=""
          />
      </div>

    </div>
    <div class="aboutDiv">
      <h2 class="connect">Our Vision</h2>
      <div style="padding-left:470px;padding-top:50px">
        <p
          style="
            font-size: 30px;
            font-weight: 400;
            color: white;
            text-align: center;
            font-family: poppins;
            width: 600px;
            color: #8df5ec;
          "
        >
         Our Vision is to envision a world guided and mentoredby nature’s genius
        </p>
        
      </div>
      <h2 class="connect" style="padding-top:50px">Our Mission</h2>
      <div style="padding-left:510px;padding-top: 50px">
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
         Our Mission is tocreate a billion biomimics
        </p>
         <div style="margin-top: -130px; margin-left: -1270px;z-index:5;position:relative">
        <img src="@/assets/deer.png" width="200px" height="200px" alt="" />
        
      </div>
      <div style="margin-top: -160px; margin-left: 560px;z-index:5;position:relative">
        <img src="@/assets/bear.png" width="400px" height="250px" alt="" />
        
      </div>
      </div>
      <div style="margin-top: -240px; padding-right: 1170px">
        <img src="@/assets/path.png" width="1400px" height="250px" alt="" />
        
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

  font-weight: 700;
  text-align: center;
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
  margin-top:-420px;
}
</style>