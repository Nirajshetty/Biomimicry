<template>
  <div class="background7">
    <div>
      <div style="margin-top: -110px; padding-right: 1435px; z-index: 2">
        <img
          src="@/assets/Vectorblock120.png"
          style="position: relative"
          width="457px"
          alt=""
        />
        <img
          src="@/assets/bird55.png"
          style="position: relative; margin-top: -200px; padding-left: 150px"
          alt=""
        />
        <img
          src="@/assets/bird66.png"
          style="position: relative; margin-top: -400px"
          alt=""
        />
        <img
          src="@/assets/bird77.png"
          style="position: relative; margin-top: -400px; padding-left: 350px"
          alt=""
        />
      </div>
      <h2 style="font-size: 50px; color: #0e0643e5; margin-top: -200px;font-family: poppins;">
        Stay Connected
      </h2>
    </div>
    <div class="aboutDiv">
      <div>
          <h2 class="connect7">Biomimicry Compass</h2>
          <p
            style="
              font-size: 25px;
              font-weight: 400;
              color: white;
              text-align: left;
              font-family: poppins;
              width: 450px;
              color: white;
            "
          >
            Biomimicry Compass provides professional training, education and
            consulting to enable innovation using nature’s design strategiesand
            engineering principles
          </p>
      </div>
      <div style="padding-left:300px">
        <h2 class="connect7" style="margin-left:-5px">Get In Touch</h2>
        <div style="display: flex;">
          
         <img
          src="@/assets/Vectoremail.png"
          style="position: relative;"
          width="25px"
          height="20px"
          alt=""
        />
        <p style="font-size:25px;padding-left:50px;color:white;margin-top:-7px;font-family: poppins;">Innovate@biomimicrycompass.com</p>
        </div>
        <div style="display: flex">
         <img
          src="@/assets/Vectormessage.png"
          style="position: relative;"
            width="25px"
          height="25px"
          alt=""
        />
        <p style="font-size:25px;color:white;padding-left:50px;margin-top:-7px;font-family: poppins;">Send us a message</p>
        </div>
      </div>
    </div>
    <div style="padding-top:50px;">
        <p style="color:#8DF5EC;font-size:20px;font-family:poppins;font-weight:400;">Biomimicry Compass is an IIT Madras incubated company</p>
         <p style="color:white;font-size:20px;font-family:poppins;font-weight:300;">Biomimicry Compass All rights reserved</p>
    </div>
    <div style="margin-top:-201px;padding-left:1050px;">
       <img
          src="@/assets/penguin.png"
          style="position: relative;"
          alt=""
        />
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
.connect7 {
  font-family: poppins;
  font-size: 35px;
  color: #8df5ec;
  padding-top: 450px;
  font-weight: 700;
  text-align: left;
}
button {
  width: 263.76px;
  height: 59px;
  background: #06245c;
  border-radius: 43.3824px;
  color: white;
  font-family: poppins;
  font-size: 25px;
  font-weight: 700;
  border: #06245c;
}
.background7 {
  background-repeat: no-repeat;
  background-size: cover;
  height: 718px !important;
  background-position: center;
  background-color: #2c4e7e;
  margin-top: 105px;
}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
  display: flex;
  margin-top: -400px;
}
</style>