<template>
  <div class="background4">
    <div>
      <div style="margin-top: -67px; padding-right: 1200px; z-index: 2">
        <img
          src="@/assets/Vectorblock7.png"
          style="position: relative"
          width="1280px"
          alt=""
        />
        <h2 class="connect4">Founders</h2>
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
    <div v-if="founderBlock" class="aboutDiv">
      <div
        style="
          display: flex;
          justify-content: center;
          padding-top: 150px;
          text-align: center;
        "
      >
        <div class="founderDiv" @click="f1()">
          <img
            src="@/assets/f1.png"
            style="
              justify-content: center;
              text-align: center;
              border-radius: 150px;
              margin-top: -70px;
              padding-bottom: 13px;
            "
            width="187px"
            height="200px"
            alt=""
          />
          <h2
            style="
              font-size: 25px;
              font-weight: 500;
              color: white;
              font-family: poppins;
            "
          >
            Mrinalini
          </h2>
          <h2
            style="
              font-size: 25px;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.72);
              font-family: poppins;
            "
          >
            Chief Executive Officer
          </h2>
          <div style="display: flex"></div>
        </div>
        <div class="founderDiv" style="margin-left: 30px" @click="f2()">
          <img
            src="@/assets/f2.png"
            style="
              justify-content: center;
              text-align: center;
              border-radius: 150px;
              margin-top: -70px;
              padding-bottom: 20px;
            "
            width="187px"
            height="200px"
            alt=""
          />
          <h2
            style="
              font-size: 25px;
              font-weight: 500;
              color: white;
              font-family: poppins;
            "
          >
            Shiva
          </h2>
          <h2
            style="
              font-size: 25px;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.72);
              font-family: poppins;
            "
          >
            Director- Innovation
          </h2>
        </div>
        <div class="founderDiv" style="margin-left: 30px" @click="f3()">
          <img
            src="@/assets/f3.png"
            style="
              justify-content: center;
              text-align: center;
              border-radius: 150px;
              margin-top: -70px;
              padding-bottom: 25px;
            "
            width="187px"
            height="200px"
            alt=""
          />
          <h2
            style="
              font-size: 25px;
              font-weight: 500;
              color: white;
              font-family: poppins;
            "
          >
            Shivakumar
          </h2>
          <h2
            style="
              font-size: 25px;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.72);
              font-family: poppins;
            "
          >
            Director- R&D
          </h2>
        </div>
        <div class="founderDiv" style="margin-left: 30px" @click="f4()">
          <img
            src="@/assets/f4.png"
            style="
              justify-content: center;
              text-align: center;
              padding-bottom: 25px;
              border-radius: 150px;
              margin-top: -70px;
            "
            width="187px"
            height="200px"
            alt=""
          />
          <h2
            style="
              font-size: 25px;
              font-weight: 500;
              color: white;
              font-family: poppins;
            "
          >
            Satya
          </h2>
          <h2
            style="
              font-size: 25px;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.72);
              font-family: poppins;
            "
          >
            Director- R&D
          </h2>
        </div>
      </div>
    </div>
    <div v-if="founder1">
      <div class="founderPopup">
        
        <div>
          <img
            src="@/assets/f1.png"
            style="
              justify-content: center;
              text-align: center;
              border-radius: 150px;
              margin-top: 50px;
              margin-left:50px
              
            "
            width="250px"
            height="250px"
            alt=""
          />
          <h2 style="font-size:30px;font-family:poppins;font-weight:500;color:white;padding-left:50px;">Mrinalini</h2>
          <h2 style="font-size:25px;font-family:poppins;font-weight:400;color:rgba(255, 255, 255, 0.72);padding-left:50px;font-style:italic;">CEO</h2>
          <img src="@/assets/social1.png" style="position: relative;padding-left:50px;padding-top:10px" width="83px" alt="" />
        </div>
        <div style="width:350px;text-align:left;padding-top:50px;padding-left:60px">
          <img src="@/assets/close.png" style="position: relative;margin-left:300px;margin-top:-40px;cursor:pointer;" @click="founder()" width="43px" alt="" />
          <p style="font-size:20px;font-weight:400;font-family:poppins;color:white;">Engineer - software and embedded systems | INSEAD | Executive leader in product management, innovation and strategy | Seeking to make the world a bit better using technology | Avid quizzer | Crossword enthusiast.</p>
        </div>
      </div>
    </div>
    <div v-if="founder2">
      <div class="founderPopup">
        
        <div>
          <img
            src="@/assets/f2.png"
            style="
              justify-content: center;
              text-align: center;
              border-radius: 150px;
              margin-top: 50px;
              margin-left:50px
              
            "
            width="250px"
            height="250px"
            alt=""
          />
          <h2 style="font-size:30px;font-family:poppins;font-weight:500;color:white;padding-left:50px;">Shiva Subramaniam</h2>
          <h2 style="font-size:25px;font-family:poppins;font-weight:400;color:rgba(255, 255, 255, 0.72);padding-left:50px;font-style:italic;">Director- Innovation</h2>
          <img src="@/assets/social1.png" style="position: relative;padding-left:50px;padding-top:10px" width="83px" alt="" />
        </div>
        <div style="width:370px;text-align:left;padding-top:50px;padding-left:60px">
          <img src="@/assets/close.png" style="position: relative;margin-left:300px;margin-top:-40px;cursor:pointer;" @click="founder()" width="43px" alt="" />
          <p style="font-size:20px;font-weight:400;font-family:poppins;color:white;">Innovation Champion | Creative Thinker | Over 30 years of experience driving learning and development in organizations | Coached the Indian National Cricket team and the Delhi Daredevils IPL team on creative thinking | Guest faculty at IIT Madras | Firm believer in the power of imagination - has a real star for a friend | Ardent Manchester United fan.</p>
        </div>
      </div>
    </div>
    <div v-if="founder3">
      <div class="founderPopup">
        
        <div>
          <img
            src="@/assets/f3.png"
            style="
              justify-content: center;
              text-align: center;
              border-radius: 150px;
              margin-top: 50px;
              margin-left:50px
              
            "
            width="250px"
            height="250px"
            alt=""
          />
          <h2 style="font-size:30px;font-family:poppins;font-weight:500;color:white;padding-left:50px;">Sivakumar M Srinivasan</h2>
          <h2 style="font-size:25px;font-family:poppins;font-weight:400;color:rgba(255, 255, 255, 0.72);padding-left:50px;font-style:italic;">Director- R&D</h2>
          <img src="@/assets/social1.png" style="position: relative;padding-left:50px;padding-top:10px" width="83px" alt="" />
        </div>
        <div style="width:350px;text-align:left;padding-top:50px;padding-left:60px">
          <img src="@/assets/close.png" style="position: relative;margin-left:260px;margin-top:-40px;cursor:pointer;" @click="founder()" width="43px" alt="" />
          <p style="font-size:20px;font-weight:400;font-family:poppins;color:white;">Professor at IIT Madras | Specialises in solid mechanics, smart structures and plasticity | Former Dean of Students | Serial creator of non-engineering courses for engineering students | Founder of Mitr, a counselling and support network for students | Loves to teach engineering skills to schoolchildren | Passionate proponent of hands-on learning sans textbooks</p>
        </div>
      </div>
    </div>
    <div v-if="founder4">
      <div class="founderPopup">
        
        <div>
          <img
            src="@/assets/f4.png"
            style="
              justify-content: center;
              text-align: center;
              border-radius: 150px;
              margin-top: 50px;
              margin-left:50px
              
            "
            width="250px"
            height="250px"
            alt=""
          />
          <h2 style="font-size:30px;font-family:poppins;font-weight:500;color:white;padding-left:50px;">Satyanarayanan</h2>
          <h2 style="font-size:25px;font-family:poppins;font-weight:400;color:rgba(255, 255, 255, 0.72);padding-left:50px;font-style:italic;">Director- R&D</h2>
          <img src="@/assets/social1.png" style="position: relative;padding-left:50px;padding-top:10px" width="83px" alt="" />
        </div>
        <div style="width:350px;text-align:left;padding-top:50px;padding-left:60px">
          <img src="@/assets/close.png" style="position: relative;margin-left:300px;margin-top:-40px;cursor:pointer;" @click="founder()" width="43px" alt="" />
          <p style="font-size:20px;font-weight:400;font-family:poppins;color:white;">Professor at IIT Madras | Specialises in fluid mechanics, energy recovery and industrial emissions monitoring | Focus on developing and commercialising indigenous technologies for process heating and HVAC systems | Faculty head of Nirmaan - pre-incubation centre at IIT Madras | Cheerleader for student-led startups</p>
        </div>
      </div>
    </div>
    <div v-if="founderBlock">
      <img
        src="@/assets/Vectorblock6.png"
        style="margin-right: 900px; margin-top: -22px"
        width="400px"
        alt=""
      />
    </div>
    <div v-if="founderBlock" style="margin-top: -167px; margin-right: 500px">
      <img src="@/assets/jellyfish2.png" width="180px" style="" alt="" />
    </div>
    <div v-else style="margin-top: -107px; margin-right: 1110px">
      <img src="@/assets/jellyfish2.png" width="180px" style="" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "CourseNew",
  components: {},
  data() {
    return {
      founderBlock: true,
      founder1: false,
      founder2: false,
      founder3: false,
      founder4: false,
    };
  },
  methods: {
    f1() {
      this.founderBlock = !this.founderBlock;
      this.founder1 = true;
    },
    f2() {
      this.founderBlock = !this.founderBlock;
      this.founder2 = true;
    },
    f3() {
      this.founderBlock = !this.founderBlock;
      this.founder3 = true;
    },
    f4() {
      this.founderBlock = !this.founderBlock;
      this.founder4 = true;
    },
    founder(){
       this.founderBlock = !this.founderBlock;
      this.founder4 = false;
       this.founder3 = false;
        this.founder2 = false;
         this.founder1 = false;
    }
  },
};
</script>






<style scoped>
.founderPopup {
  width: 730px;
  height: 470px;
  background: #23457d;
  border-radius: 60px;
  z-index: 9;
  position: relative;
  margin-top: -470px;
  margin-left: 400px;
  display: flex;
}
.founderpText {
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
  font-family: poppins;
  width: 280px;
  padding-left: 30px;
}
.founderDiv {
  width: 278px;
  height: 230px;
  background: #06245c;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
}
.connect4 {
  font-family: poppins;
  font-size: 50px;
  color: #06245c;
  margin-top: -150px;
  font-weight: 700;
  text-align: center !important;
  padding-left: 650px;
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
.background4 {
  background-repeat: no-repeat;
  height: 740px !important;
  background-size: cover;
  background-position: center;
  background-color: #6891ca !important;
  margin-top: 67.1px;
}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
  margin-top: -450px;
}
</style>