<template>
  <div class="background">
    <div>
      <Navbar style="z-index: 3; position: relative" />
      <div style="margin-top: -110px; padding-right: 1200px; z-index: 2">
        <img src="@/assets/block111.png" style="position: relative" alt="" />
      </div>
    </div>
    <div class="aboutDiv">
      <div style="margin-left: 50px">
        <h2 class="connect">Professional Training</h2>
        <p
          style="
            font-size: 30px;
            font-weight: 400;
            text-align: left;
            font-family: poppins;
            width: 470px;
            color: #8df5ec;
            padding-top: 50px;
          "
        >
          Our Professional Training Programs teach you how to tap into nature’s
          wisdom and equip you with the tools to apply biomimicry.
        </p>
        <p
          style="
            font-size: 30px;
            font-weight: 400;
            text-align: left;
            font-family: poppins;
            width: 470px;
            color: #8df5ec;
          "
        >
          Our Programsand Workshops are named for the organisms and natural
          systems that inspire us.
        </p>
      </div>
      <div style="padding-left:0px">
        <div style="margin-top:-100px;padding-left:700px">
          <img src="@/assets/training1.png"  width="250px" alt="" />
          <div style="text-align:center;margin-left:10px;margin-top:-70px;z-index:9">
        <button>Know More</button>
      </div>
      <h6 style="color:white;padding-top:40px;font-size:20px;font-family:poppins;">JellyFish Workshop</h6>
        </div>
        <div style="margin-top:-80px;padding-left:100px">
          <img src="@/assets/training2.png"  width="250px" alt="" />
          <div style="text-align:center;margin-left:10px;margin-top:-70px;z-index:9">
        <button>Know More</button>
      </div>
      <h6 style="color:white;padding-top:40px;font-size:20px;font-family:poppins;">Termite Mound Workshop</h6>
        </div>
        <div style="margin-top:-245px;padding-left:700px">
          <img src="@/assets/training3.png" width="250px" alt="" />
          <div style="text-align:center;margin-left:10px;margin-top:-70px;z-index:9">
        <button>Know More</button>
      </div>
      <h6 style="color:white;padding-top:40px;font-size:20px;font-family:poppins;">Cicada Workshop</h6>
        </div>
      </div>
    </div>

    <img
      src="@/assets/block112.png"
      style="margin-right: 1087px; padding-top: 10px"
      alt=""
    />
    <div style="margin-top: -155px;padding-right:1100px">
      <img src="@/assets/frog1.png" style="" alt="" />
    </div>
    <div style="margin-top: -115px;padding-right:1100px">
      <img src="@/assets/frog2.png" style="" alt="" />
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
.founderpText {
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
  font-family: poppins;
  width: 280px;
  padding-left: 30px;
}
.founderDiv {
  width: 312px;
  height: 314px;
  background: #06245c;
  text-align: center;
}
.connect {
  font-family: poppins;
  font-size: 50px;
  color: white;
  margin-top: -100px;
  font-weight: 700;
  text-align: left;
  padding-left: 0px;
  padding-top: 100px;
}
button {
  width: 143.76px;
  height: 45px;
  background: #ffffff;
  border-radius: 43.3824px;
  color: #0e0643;
  font-family: poppins;
  font-size: 15px;
  font-weight: 700;
  border: #06245c;
}
.background {
  background-repeat: no-repeat;
  height: 1000px !important;
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
  margin-top: 0px;
  display: flex;
}
</style>