<template>
  <div class="background">
  
    <div class="aboutDiv">
      <h2 class="connect" style="margin-left:690px">About Biomimicry Compass</h2>
      <div style="padding-left: 805px; padding-top: 50px">
        <p
          style="
            font-size: 30px;
            font-weight: 400;
            color: white;
            text-align: left;
            font-family: poppins;
            width: 600px;
            color: white;
          "
        >
         Biomimicry Compass provides professional training, education and consulting to enable innovation using nature’s design strategies and engineering principles.
        </p>
      </div>
      <div style="margin-top: -405px; padding-right: 760px">
        <img src="@/assets/aboutnew.png" alt="" />
      </div>
      <div style="margin-top: -284px; padding-left: 965px">
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


export default {
  name: "CourseNew",
  components: {  },
  data() {
    return {};
  },
};
</script>






<style >
.connect {
  font-family: poppins;
  font-size: 50px;
  color: #06245C;
  padding-top: 150px !important;
  font-weight: 700;
}

.background {
  background-repeat: no-repeat;
height: 718px !important;
  background-size: cover;
  background-position: center;

  background-color: #6891CA;

}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
}
</style>