<template>
  <div class="background3">
    <div>
       <div class="b1">
        <img
          src="@/assets/blocV2.png"
          style="position:relative;"
          id="bv1"
          width="300px" height="250px"
          alt=""
        />  <img
            src="@/assets/cloud1.png"
            id="cloud1"
            alt=""

          />
        <div style="margin-top:-130px">
        
           <img
            src="@/assets/cloud2.png"
            id="cloud2"
            alt=""

          />
         
          <img
            src="@/assets/vision_birds.png" id="birds"
            alt=""

          />
          <img
            src="@/assets/bird1.png" id="bird1"
            alt=""

          />
          <img
            src="@/assets/bird2.png" id="bird2"
            alt=""
          />
          <img
            src="@/assets/bird3.png" id="bird3"
            alt=""
          />
          <img
            src="@/assets/bird4.png" id="bird4"
            alt=""
          />
          <img
            src="@/assets/bird5.png" id="bird5"
            alt=""
          />
          <img
            src="@/assets/bird6.png" id="bird6"
            alt=""
          />
          <img
            src="@/assets/bird7.png" id="bird7"
            alt=""
          />
        </div>
      </div>

    </div>
    <div class="aboutDiv">
      <h2 class="connect3">Our Vision</h2>
      <div class="pdiv">
        <p class="Psec"
        >
         Our Vision is to envision a world guided and mentored by nature’s genius
        </p>
        
      </div>
      <h2 class="connect3">Our Mission</h2>
      <div class="pdiv2" >
        <p class="secp2"
        >
         Our Mission is to create a billion biomimics
        </p>
         <div class="deer">
        <img src="@/assets/deer.png" id="deer"  alt="" />
        
      </div>
      <div class="bear">
        <img src="@/assets/bear.png" id="bear"  alt="" />
        
      </div>
      </div>
      
     
    </div>
    <div class="imgdiv5">
        <img src="@/assets/path.png" id="path" width="1400px" style="position:relative;z-index:0;" height="250px" alt="" />
         <img
            src="@/assets/vision_trees.png" id="t1"
            alt=""

          />
          <img
            src="@/assets/visiontree22.png" id="t2" style="position:relative;z-index:0;"
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
.imgdiv5{
  margin-top: -210px; padding-right: 1170px
}
.pdiv2{
  padding-left:510px;padding-top: 20px
}
.secp2{
 font-size: 30px;
            font-weight: 400;
            color: white;
            text-align: left;
            font-family: poppins;
            width: 600px;
            color: white;
}
.pdiv{
  padding-left:470px;padding-top:20px
}
.Psec{
font-size: 30px;
            font-weight: 400;
            color: white;
            text-align: center;
            font-family: poppins;
            width: 600px;
            color: white;
}
#bird7{
  position: relative;margin-top:-400px;padding-left:1480px;z-index:5;
}
#bird6{
  position: relative;margin-top:-330px;padding-left:1120px;z-index:5;
}
#bird5{
  position: relative;margin-top:-550px;padding-left:1440px;z-index:5;
}
#bird4{
  position: relative;margin-top:-200px;padding-left:1350px;z-index:5;
}
#bird3{
  position: relative;margin-top:-300px;padding-left:1220px;z-index:5;
}

#bird2{
  position: relative;margin-top:-250px;padding-left:1400px
}
#bird1{
  position: relative;margin-top:-300px;padding-left:1300px
}
#birds{
  position: relative;margin-top:-100px;padding-left:100px
}
#cloud2{
  position: relative;margin-top:-300px;width: 65px;
}
#cloud1{
  position: relative;margin-top:-180px;margin-left:-250px;width: 55px;
}
#bear{
width:300px; height:200px;z-index: 8; position:relative;
}
.bear{
  margin-top: -175px; margin-left: 560px;z-index:9;position:relative
}
#deer{
  width:150px; height:130px;
}
.deer{
  margin-top: -0px; margin-left: -1270px;z-index:5;position:relative;
}
#t1{
  position: relative;margin-top:-720px;
  width:320px;margin-left: -25px;
}
#t2{
  position: relative;margin-top:-720px;margin-left:1217px;z-index:3; width:300px;
}
.b1{
  margin-top: -0px; padding-right: 1215px;z-index:2
}
.connect3 {
  padding-top:50px;margin-top:0px;
  font-family: poppins;
  font-size: 50px;
  color: #06245C;
  margin-top: -50px;
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
.background3 {
  background-repeat: no-repeat;
  height: 718px !important;
  background-size: cover;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  background-color: #6891CA !important;
}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
  margin-top:-266px;
}


@media only screen and (max-width: 600px) {
  .pdiv{
  margin-left:-450px;padding-top:20px
}
.Psec{
font-size: 20px;
            font-weight: 400;
            color: white;
            text-align: center;
            font-family: poppins;
            width: 300px;
            color: white;
}
  .pdiv2{
  margin-left:-485px;padding-top: 20px
}
  .secp2{
 font-size: 20px;
            font-weight: 400;
            color: white;
            text-align: center;
            font-family: poppins;
            width: 300px;
            color: white;
}
  #t1{
  position: relative;margin-top:-430px;
  width:160px;margin-right: 160px;
}
#t2{
  position: relative;margin-top:-500px;margin-left:207px;z-index:3; width:140px;
}
  #path{
    width: 350px;
    height: 150px;
  }
  .imgdiv5{
  margin-top: -110px; padding-right: 0px
}
  .background3 {
  background-repeat: no-repeat;
  height: 600px !important;
  background-size: cover;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  background-color: #6891CA !important;
}
#bv1{
  width: 200px;
  height: 200px;
}
.b1{
  margin-top: -121px; padding-right:345px;z-index:2
}
#cloud2{
  position: relative;margin-top:-155px;width: 135px;padding-left: 90px;
}
#cloud1{
  position: relative;margin-top:-180px;margin-left:0px;width: 35px;
}
.connect3 {
  padding-top:50px;margin-top:0px;
  font-family: poppins;
  font-size: 30px !important;
  color: #06245C;
  margin-top: -50px;
  font-weight: 700;
  text-align: center;
}
#bear{
width:100px; height:80px;z-index: 8; position:relative;
}
.bear{
  margin-top: -15px; margin-left: 170px;z-index:9;position:relative
}
#deer{
  width:50px; height:60px;
}
.deer{
  margin-top: 50px; margin-left: -100px;z-index:5;position:relative;
}
#bird7{width: 0px;
  position: relative;margin-top:-40px;padding-left:80px;z-index:5;
}
#bird6{width: 0px;
  position: relative;margin-top:-33px;padding-left:20px;z-index:5;
}
#bird5{width: 0px;
  position: relative;margin-top:-55px;padding-left:40px;z-index:5;
}
#bird4{width: 0px;
  position: relative;margin-top:-20px;padding-left:50px;z-index:5;
}
#bird3{
  width: 0px;
  position: relative;margin-top:-300px;padding-left:20px;z-index:5;
}

#bird2{width: 0px;
  position: relative;margin-top:-20px;padding-left:14px
}
}
</style>