<template>
  <div class="background">
    <div class="aboutDiv">
      <h2 class="connect">About Biomimicry Compass</h2>
      <div class="aboutPdiv">
        <p class="aboutP">
          Biomimicry Compass provides professional training, education and
          consulting to enable innovation using nature’s design strategies and
          engineering principles.
        </p>
      </div>
      <div class="aboutImage1">
        <img src="@/assets/aboutnew.png" width="450" alt="" />
      </div>
      <div class="aboutBlock" >
        <img id="imgBlock"
          src="@/assets/block1.png"
          style="position: relative; z-index: -1"
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
  components: {},
  data() {
    return {};
  },
};
</script>






<style >
.connect {
  font-family: poppins;
  font-size: 50px;
  color: #06245c;
  padding-top: 150px !important;
  font-weight: 700;
  margin-left: 400px;
}
.aboutBlock{
  margin-top: -146px; padding-left: 965px
}
.aboutP {
  font-size: 30px;
  font-weight: 400;
  color: white;
  text-align: left;
  font-family: poppins;
  width: 600px;
  color: white;
}
.aboutPdiv{
  padding-left: 655px; padding-top: 50px
}
.aboutImage1 {
  margin-top: -355px;
  padding-right: 800px;
}
.background {
  background-repeat: no-repeat;
  height: 718px !important;
  background-size: cover;
  background-position: center;

  background-color: #6891ca;
}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
}



@media only screen and (max-width: 600px) {
 .background {
    background-size: cover;
    height: 596px !important;
    background-size: 800px 1245px;
    background-position: center;
    min-width: 100%;
    min-height: 100%;
  }
  .connect {
    font-family: poppins;
    font-size: 30px;
    color: #06245c;
    padding-top: 50px !important;
    font-weight: 700;
    margin-left: 0px;
  }
  .aboutImage1 {
    margin-top: -400px;
    padding-right: 0px;
  }
.aboutP {
    font-size: 20px;
    font-weight: 400;
    color: white;
    text-align: center;
    font-family: poppins;
    width: 300px;
    color: white;
}
.aboutPdiv{
  padding-left: 25px; padding-top: 260px
}
.aboutBlock{
  margin-top: 85px; padding-left: 28%;
}
#imgBlock{
  width: 250px;
}
}
</style>
