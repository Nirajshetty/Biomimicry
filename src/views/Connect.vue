<template>
  <div class="background7">
    <div>
      <div style="margin-top: -112px; padding-right: 1435px; z-index: 2">
        <img
          src="@/assets/blockTraining2.png"
          style="position: relative"
          width="409px"
          alt=""
        />
        <img
          src="@/assets/bird55.png"
          style="position: relative; margin-top: -300px; padding-left: 100px"
          alt=""
        />
        <img
          src="@/assets/bird66.png"
          style="position: relative; margin-top: -550px"
          alt=""
        />
        <img
          src="@/assets/bird77.png"
          style="position: relative; margin-top: -550px; padding-left: 190px"
          alt=""
        />
      </div>
      <div style="margin-top: -403.5px; padding-right: 1205px; z-index: 2">
        <img src="@/assets/blockInside.png" style="position: relative" alt="" />
      </div>
      <h2
        style="
          font-size: 50px;
          color: #0e0643e5;
          margin-top: -200px;
          font-family: poppins;
        "
      >
        Stay Connected
      </h2>
    </div>
    <div class="aboutDiv">
      <div>
        <h2 class="connect7">Biomimicry Compass</h2>
        <h3  style="font-size:20px;font-family:poppins;font-weight:300;margin-left:-170px;color:#06245c;">An IIT Madras incubated company</h3>
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
          consulting to enable innovation using nature’s design strategies and
          engineering principles
        </p>
        <div style="display:flex;margin-left:20px;padding-top:30px">
          <img src="@/assets/social1.png" style="position: relative;padding-right:20px" alt="" />
          <img src="@/assets/social2.png" style="position: relative;padding-right:20px" alt="" />
          <img src="@/assets/social3.png" style="position: relative;padding-right:20px" alt="" />
          <img src="@/assets/social4.png" style="position: relative;padding-right:20px" alt="" />
          <img src="@/assets/social5.png" style="position: relative" alt="" />
        </div>
      </div>
      <div style="padding-left: 300px">
        <h2 class="connect7" style="margin-left: -5px;padding-bottom:30px">Get In Touch</h2>
        <div>
          <div style="display:flex;padding-bottom:50px">
            <input type="text" class="connectInput"  placeholder="First Name"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" class="connectInput" placeholder="Last Name"/>
          </div>
          <div style="display:flex;padding-bottom:50px">
            <input type="text" class="connectInput"  placeholder="Email Address"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" class="connectInput" placeholder="Contact Number"/>
          </div>
          <div style="display:flex;">
            <textarea type="text" class="connectInput"  placeholder="Message"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div style="margin-top:20px">
            <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top: -201px; padding-left: 1050px">
      <img src="@/assets/penguin.png" style="position: relative" alt="" />
    </div>
        <div style="margin-top: -50px">

      <p
        style="
          color:#FFFFFF;
          font-size: 20px;
          font-family: poppins;
          font-weight: 300;
        "
      >
        Biomimicry Compass All rights reserved
      </p>
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
.connectInput{
  border-bottom: solid 1px white;
  border-top: none;
  border-right: none;
  border-left: none;
  background: #6891ca ;
  font-family: poppins;
  color: white;
  padding-bottom: 20px;
}
textarea{
  border-bottom: solid 1px white;
  border-top:solid 1px white !important;
  border-right:solid 1px white !important;
  border-left:solid 1px white !important;
  width: 250px;
  height: 80px;
}
input:focus{
  outline: none;
}
textarea:focus{
  outline: none;
}
input::placeholder{
  padding-bottom: 10px;
  color: white;
}
textarea::placeholder{
  padding-bottom: 10px;
  color: white;
}
.connect7 {
  font-family: poppins;
  font-size: 35px;
  color: #06245c;
  padding-top: 450px;
  font-weight: 700;
  text-align: left;
}
button {
  width: 130px;
  height: 40px;
  background: #06245c;
  border-radius: 43.3824px;
  color: white;
  font-family: poppins;
  font-size: 18px;
  font-weight: 700;
  border: #06245c;
}
.background7 {
  background-repeat: no-repeat;
  background-size: cover;
  height: 718px !important;
  background-position: center;
  background-color: #6891ca !important;
  margin-top: 112.5px;
}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
  display: flex;
  margin-top: -350px;
}
</style>