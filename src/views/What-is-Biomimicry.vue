<template>
  <div class="background1">
    <div>
      <div class="imageDiv">
        <img
        id="b3"
          src="@/assets/block3.png"
          style="position: relative"
          width="550px"
          alt=""
        />
      </div>
    </div>
    <div class="aboutDiv">
      <div  class="connect1">
      <h2 style="font-weight: 700;"
       
      >
        What is Biomimicry?
      </h2>
      </div>
      <div class="divP">
        <p class="p">
          Biomimicry is a practice that learns from and translates the
          strategies found in nature to solve a range of human challenges.
        </p>
      </div>
      <div class="divButton">
        <button>Know More</button>
      </div>
      <div class="divImg2">
        <img src="@/assets/newWIB.png" width="550px" alt="" />
      </div>
      <div class="divImg3">
        <img id="vb1" src="@/assets/visionB1.png" width="300px" height="200px" alt="" />
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






<style scoped>
.divImg3{
  margin-top: -121px; padding-right: 1220px
}
.divImg2{
margin-top: -430px; padding-left: 900px
}
.divButton{
   text-align: center;
          padding-right: 1187px;
          padding-top: 0px;
          z-index: 17 !important;
          position: relative;
}
.p{
   font-size: 30px;
            font-weight: 400;
            color: white;
            text-align: left;
            font-family: poppins;
            width: 600px;
            color: white;
}
.divP{
  padding-left: 65px; padding-top: 50px
  }
.imageDiv {
  margin-top: -10px;
  padding-left: 965px;
  z-index: 2;
}
.connect1 {
  font-family: poppins;
  font-size: 50px !important;
  color: #06245c;
  margin-top: -100px !important;
  margin-left: 40px;
  font-weight: 700;
  padding-left: 60px !important;
  text-align: left;
  padding-left: 20px !important;
  padding-top: 0px !important;
}
button {
  width: 200px;
  height: 59px;
  background: #06245c;
  border-radius: 43.3824px;
  color: white;
  font-family: poppins;
  font-size: 25px;
  font-weight: 700;
  border: #06245c;
}
h2{
  font-size: 50px;
}
.background1 {
  background-repeat: no-repeat;
  background-size: cover;
  height: 718px !important;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  margin-top: 10px !important;
  background-color: #6891ca !important;
}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
}


@media only screen and (max-width: 600px) {
  .background1 {
  background-repeat: no-repeat;
  background-size: cover;
  height: 718px !important;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  margin-top: 10px !important;
  background-color: #6891ca !important;
}
  #vb1{
    width: 200px;
    height: 150px;
  }
#b3{
  width: 300px;
}
.imageDiv {
  margin-top: -9.25px;
  padding-left: 98px;
  z-index: 2;
}
.connect1 {
  font-family: poppins;
  font-size: 30px;
  color: #06245c;
  margin-top: 100px !important;
  margin-left: 20px;
  font-weight: 700;
  padding-left: 60px !important;
  text-align: left;
  padding-left: 10px !important;
  padding-top: 0px !important;
}
.p{
   font-size: 20px;
            font-weight: 400;
            color: white;
            text-align: center;
            font-family: poppins;
            width: 300px;
            color: white;
}
.divP{
  padding-left: 20px; padding-top: 10px
  }
  .divImg3{
  margin-top: 195px;
}
.divImg2{
margin-top: -450px; padding-left: 0px
}
button {
  width: 130px;
  height: 40px;
  background: #06245c;
  border-radius: 43.3824px;
  color: white;
  font-family: poppins;
  font-size: 20px;
  font-weight: 700;
  border: #06245c;
}
.divButton{
   text-align: center;
          padding-right: 10px;
          padding-top: 0px;
          z-index: 17 !important;
          position: relative;
}
h2{
  font-size: 30px;
}
}





</style>