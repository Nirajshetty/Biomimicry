<template>
  <div class="background">
    <div>
      <Navbar style="z-index: 3; position: relative" />
      <div style="margin-top: -110px; padding-right: 1200px; z-index: 2">
        <img
          src="@/assets/Vectorblock7.png"
          style="position: relative"
          alt=""
        />
        <img
          src="@/assets/jellyfish3.png"
          style="position: relative; padding-left: 1300px"
          alt=""
        />
        <div style="margin-top: -30px">
          <img
            src="@/assets/plants.png"
            style="position: relative; padding-left: 1480px"
            alt=""
          />
        </div>

        <img
          src="@/assets/jellyfish4.png"
          style="position: relative; padding-left: 1480px"
          alt=""
        />
        <div style="margin-top: -200px">
          <img
            src="@/assets/jellyfish5.png"
            style="position: relative; margin-left: -200px"
            alt=""
          />
        </div>
        <img
          src="@/assets/plant2.png"
          style="position: relative; margin-left: -260px"
          alt=""
        />
      </div>
    </div>
    <div class="aboutDiv">
      <h2 class="connect">Founders</h2>
      <div style="display: flex; justify-content: center; padding-top: 150px;text-align:center;">
        <div class="founderDiv">
          <img
            src="@/assets/founder.png"
            style="justify-content:center;text-align:center;border: 10px solid #06245c;border-radius:150px;margin-top:-100px"
            alt=""
          />
          <h2 style="font-size:25px;font-weight:500;color:white;font-family:poppins">Mrinalini</h2>
          <h2 style="font-size:25px;font-weight:400;color:rgba(255, 255, 255, 0.72);font-family:poppins">Chief Executive Officer</h2>
          <p class="founderpText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eget elit tincidunt augue pretium viverra urna, vitae vestibulum. Tempus, egestas dolor elementum tellus ante.</p>
          <div style="display:flex">
          <h1 style="color:white;font-weight:bold;text-align:left !important;padding-left:20px;padding-right:90px">in</h1>
          <button>Know More</button>
          </div>
        </div>
        <div class="founderDiv" style="margin-left: 30px">
          <img
            src="@/assets/founder.png"
            style="justify-content:center;text-align:center;border: 10px solid #06245c;border-radius:150px;margin-top:-100px"
            alt=""
          />
          <h2 style="font-size:25px;font-weight:500;color:white;font-family:poppins">Shivakumar</h2>
          <h2 style="font-size:25px;font-weight:400;color:rgba(255, 255, 255, 0.72);font-family:poppins">Director- Innovation</h2>
          <p class="founderpText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eget elit tincidunt augue pretium viverra urna, vitae vestibulum. Tempus, egestas dolor elementum tellus ante.</p>
          <h1 style="color:white;font-weight:bold">in</h1>
        </div>
        <div class="founderDiv" style="margin-left: 30px">
          <img
            src="@/assets/founder.png"
            style="justify-content:center;text-align:center;border: 10px solid #06245c;border-radius:150px;margin-top:-100px"
            alt=""
          />
          <h2 style="font-size:25px;font-weight:500;color:white;font-family:poppins">Shiva</h2>
          <h2 style="font-size:25px;font-weight:400;color:rgba(255, 255, 255, 0.72);font-family:poppins;">Director- R&D</h2>
          <p class="founderpText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eget elit tincidunt augue pretium viverra urna, vitae vestibulum. Tempus, egestas dolor elementum tellus ante.</p>
  <h1 style="color:white;font-weight:bold">in</h1>
        </div>
        <div class="founderDiv" style="margin-left: 30px">
          <img
            src="@/assets/founder.png"
            style="justify-content:center;text-align:center;border: 10px solid #06245c;border-radius:150px;margin-top:-100px"
            alt=""
          />
          <h2 style="font-size:25px;font-weight:500;color:white;font-family:poppins">Satya</h2>
          <h2 style="font-size:25px;font-weight:400;color:rgba(255, 255, 255, 0.72);font-family:poppins">Director- R&D</h2>
      
          <p class="founderpText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eget elit tincidunt augue pretium viverra urna, vitae vestibulum. Tempus, egestas dolor elementum tellus ante.</p>
          <h1 style="color:white;font-weight:bold">in</h1>
  
        </div>
      </div>
    </div>
  
          <img
            src="@/assets/Vectorblock6.png"
            style="margin-right:900px;margin-top:25px"
            alt=""
          />
          <div style="margin-top:-250px">  <img
            src="@/assets/jellyfish2.png"
            style=""
            alt=""
          /></div>
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
.founderpText{
font-size:15px;
font-weight:500;
color:rgba(255, 255, 255, 0.72);
font-family:poppins;
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
  text-align: center;
}
button {
  width: 143.76px;
  height: 45px;
  background: #ffffff;
  border-radius: 43.3824px;
  color: #0E0643;
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
  margin-top: -550px;
}
</style>