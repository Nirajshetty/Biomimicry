<template>
  <div class="background">
    <div>
      <Navbar />
    </div>
    <div class="aboutDiv">
      <h2 class="connect">About Biomimicry Compass</h2>
      <div style="padding-left: 865px; padding-top: 50px">
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
          Biomimicry Compass provides professional training, education and consulting to enable innovation using nature’s design strategies and engineering principles. 

Biomimicry Compass is an IIT Madras incubated company.
        </p>
      </div>
      <div style="margin-top: -500px; padding-right: 760px">
        <img src="@/assets/aboutnew.png" width="600p" alt="" />
      </div>
      <div style="margin-top: -300px; padding-left: 985px">
        <img
          src="@/assets/block1.png"
          style="position:relative;z-index:-1"
          width="550px"
          alt=""
        />
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
  padding-top: 150px;
  font-weight: 700;
  padding-left: 800px;
}

.background {
  background-repeat: no-repeat;
  height: 721px !important;
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