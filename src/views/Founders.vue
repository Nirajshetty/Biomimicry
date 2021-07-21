<template>
  <div class="background4">
    <div>
      <div class="main">
        <img
          src="@/assets/Vectorblock7.png"
          style="position: relative"
          id="block1"
          width="1280px"
          alt=""
        />
        <h2 class="connect4">Founders</h2>
        <div class="j1">
          <img src="@/assets/jellyfish3.png" id="j1" alt="" />
        </div>
        <div class="plants">
          <img src="@/assets/plants.png" id="plants" alt="" />
        </div>

        <img
          src="@/assets/jellyfish4.png"
          style="position: relative; padding-left: 1480px"
          alt=""
        />
        <div style="margin-top: -300px" class="j5">
          <img src="@/assets/jellyfish5.png" id="j5" alt="" />
        </div>
        <img src="@/assets/plant2.png" id="plant2" alt="" />
      </div>
    </div>
    <div v-if="founderBlock" class="aboutDiv">
      <div class="frs">
        <div class="founderDiv ff1" @click="f1()">
          <img
            src="@/assets/f1.png"
            id="founder1"
            width="150px"
            height="160px"
            alt=""
          />
          <h2 class="fh2">Mrinalini</h2>
          <h2 class="fh2b">Chief Executive Officer</h2>
          <div style="display: flex"></div>
        </div>
        <div class="founderDiv ff1" style="margin-left: 30px" @click="f2()">
          <img
            src="@/assets/f2.png"
            id="founder1"
            width="150px"
            height="160px"
            alt=""
          />
          <h2 class="fh2">Shiva</h2>
          <h2 class="fh2b">Director- Innovation</h2>
        </div>
        <div class="founderDiv ff1" style="margin-left: 30px" @click="f3()">
          <img
            src="@/assets/f3.png"
            id="founder1"
            width="150px"
            height="160px"
            alt=""
          />
          <h2 class="fh2">Shivakumar</h2>
          <h2 class="fh2b">Director- R&D</h2>
        </div>
        <div class="founderDiv ff1" style="margin-left: 30px" @click="f4()">
          <img
            src="@/assets/f4.png"
            id="founder1"
            width="150px"
            height="160px"
            alt=""
          />
          <h2 class="fh2">Satya</h2>
          <h2 class="fh2b">Director- R&D</h2>
        </div>
      </div>
    </div>
    <div v-if="founder1">
      <div class="founderPopup">
        <div>
          <img
            src="@/assets/f1.png"
            id="popup1"
            width="250px"
            height="250px"
            alt=""
          />
          <h2 class="popup2">Mrinalini</h2>
          <h2 class="popup3">CEO</h2>
          <img src="@/assets/social1.png" id="popup4" width="83px" alt="" />
        </div>
        <div class="popup5">
          <div class="close">
            <img
              src="@/assets/close.png"
              id="popup6"
              class="f1close"
              @click="founder()"
              width="43px"
              alt=""
            />
          </div>
          <p class="popup7">
            Engineer - software and embedded systems | INSEAD | Executive leader
            in product management, innovation and strategy | Seeking to make the
            world a bit better using technology | Avid quizzer | Crossword
            enthusiast.
          </p>
        </div>
      </div>
    </div>
    <div v-if="founder2">
      <div class="founderPopup">
        <div>
          <img
            src="@/assets/f2.png"
            id="popup1"
            width="250px"
            height="250px"
            alt=""
          />
          <h2 class="popup2">Shiva Subramaniam</h2>
          <h2 class="popup3">Director- Innovation</h2>
          <img src="@/assets/social1.png" id="popup4" width="83px" alt="" />
        </div>
        <div class="popup5">
          <div class="close">
            <img
              src="@/assets/close.png"
              id="popup6"
              class="f2close"
              @click="founder()"
              width="43px"
              alt=""
            />
          </div>
          <p class="popup7">
            Innovation Champion | Creative Thinker | Over 30 years of experience
            driving learning and development in organizations | Coached the
            Indian National Cricket team and the Delhi Daredevils IPL team on
            creative thinking | Guest faculty at IIT Madras | Firm believer in
            the power of imagination - has a real star for a friend | Ardent
            Manchester United fan.
          </p>
        </div>
      </div>
    </div>
    <div v-if="founder3">
      <div class="founderPopup">
        <div>
          <img
            src="@/assets/f3.png"
            id="popup1"
            width="250px"
            height="250px"
            alt=""
          />
          <h2 class="popup2">Sivakumar M Srinivasan</h2>
          <h2 class="popup3">Director- R&D</h2>
          <img src="@/assets/social1.png" id="popup4" width="83px" alt="" />
        </div>
        <div class="popup5 fff">
          <div class="close">
            <img
              src="@/assets/close.png"
              id="popup6"
              class="f3close"
              @click="founder()"
              width="43px"
              alt=""
            />
          </div>
          <p class="popup7">
            Professor at IIT Madras | Specialises in solid mechanics, smart
            structures and plasticity | Former Dean of Students | Serial creator
            of non-engineering courses for engineering students | Founder of
            Mitr, a counselling and support network for students | Loves to
            teach engineering skills to schoolchildren | Passionate proponent of
            hands-on learning sans textbooks
          </p>
        </div>
      </div>
    </div>
    <div v-if="founder4">
      <div class="founderPopup">
        <div>
          <img
            src="@/assets/f4.png"
            id="popup1"
            width="250px"
            height="250px"
            alt=""
          />
          <h2 class="popup2">Satyanarayanan</h2>
          <h2 class="popup3">Director- R&D</h2>
          <img src="@/assets/social1.png" id="popup4" width="83px" alt="" />
        </div>
        <div class="popup5">
          <div class="close">
            <img
              src="@/assets/close.png"
              id="popup6"
              class="f4close"
              @click="founder()"
              width="43px"
              alt=""
            />
          </div>
          <p class="popup7">
            Professor at IIT Madras | Specialises in fluid mechanics, energy
            recovery and industrial emissions monitoring | Focus on developing
            and commercialising indigenous technologies for process heating and
            HVAC systems | Faculty head of Nirmaan - pre-incubation centre at
            IIT Madras | Cheerleader for student-led startups
          </p>
        </div>
      </div>
    </div>
    <div v-if="founderBlock" class="b6div">
      <img src="@/assets/Vectorblock6.png" id="b6" width="400px" alt="" />
    </div>
    <div v-if="founderBlock" class="j2">
      <img
        src="@/assets/jellyfish2.png"
        id="j2"
        width="150px"
        style=""
        alt=""
      />
    </div>
    <div v-else class="elseJ2">
      <img
        src="@/assets/jellyfish2.png"
        id="elseJ2"
        width="180px"
        style=""
        alt=""
      />
    </div>
    <div class="fjelly">
      <img
        src="@/assets/fjelly.png"
        id="fjelly"
        width="100px"
        style=""
        alt=""
      />
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
    founder() {
      this.founderBlock = !this.founderBlock;
      this.founder4 = false;
      this.founder3 = false;
      this.founder2 = false;
      this.founder1 = false;
    },
  },
};
</script>






<style scoped>
.close{
  margin-right: -50px;
}
.popup7 {
  font-size: 20px;
  font-weight: 400;
  font-family: poppins;
  color: white;
}
#popup6 {
  position: relative;
  margin-left: 300px;
  margin-top: -40px;
  cursor: pointer;
}
.popup5 {
  width: 350px;
  text-align: left;
  padding-top: 50px;
  padding-left: 60px;
}
#popup4 {
  position: relative;
  padding-left: 50px;
  padding-top: 10px;
}
.popup2 {
  font-size: 30px;
  font-family: poppins;
  font-weight: 500;
  color: white;
  padding-left: 50px;
}
#popup1 {
  justify-content: center;
  text-align: center;
  border-radius: 150px;
  margin-top: 50px;
  margin-left: 50px;
}
.elseJ2 {
  margin-top: -107px;
  margin-right: 1110px;
}
#block1 {
  margin-left: -240px;
}
.main {
  margin-left: 0;
}
#founder1 {
  justify-content: center;
  text-align: center;
  border-radius: 150px;
  margin-top: -50px;
  padding-bottom: 13px;
}
.frs {
  display: flex;
  justify-content: center;
  padding-top: 150px;
  text-align: center;
}
.fjelly {
  margin-top: -127px;
  margin-left: 1410px;
}
.j2 {
  margin-top: -167px;
  margin-right: 700px;
}
.founderPopup {
  width: 730px;
  height: 470px;
  background: #23457d;
  border-radius: 60px;
  z-index: 9;
  position: relative;
  margin-top: -420px;
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
  width: 250px;
  height: 190px;
  background: #06245c;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
}
.connect4 {
  font-family: poppins;
  font-size: 50px;
  color: #06245c;
  margin-top: -150px;
  font-weight: 700;
  text-align: center !important;
  padding-left: 0px;
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
  height: 740px;
  background-size: cover;
  background-position: center;
  background-color: #6891ca !important;
  margin-top: 0px;
}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
  margin-top: -420px;
}
#j1 {
  position: relative;
  padding-left: 1300px;
}
.plants {
  margin-top: -30px;
}
#plants {
  position: relative;
  padding-left: 1480px;
}
.j5 {
  margin-top: -300px;
}
#j5 {
  position: relative;
  margin-left: -1400px;
  padding-bottom: 50px;
}
#plant2 {
  position: relative;
  margin-left: -1460px;
}
#b6 {
  margin-left: -1117px;
  margin-top: 22px;
}
.fh2 {
  font-size: 22px;
  font-weight: 500;
  color: white;
  font-family: poppins;
}
.fh2b {
  font-size: 21px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.72);
  font-family: poppins;
}
.popup3 {
  font-size: 25px;
  font-family: poppins;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.72);
  padding-left: 50px;
  font-style: italic;
}
 .f3close {
    margin-right: 40px;
  }
@media only screen and (max-width: 600px) {
  .close {
    margin-left: -190px;
  }
  .founderPopup {
    width: 300px;
    height: 270px;
    background: #23457d;
    border-radius: 30px;
    z-index: 9;
    position: relative;
    margin-top: -180px;
    margin-left: 25px;
    display: flex;
  }
  .popup7 {
    font-size: 10px;
    font-weight: 400;
    font-family: poppins;
  }
  #popup6 {
    position: relative;
    margin-left: 85px;
    margin-top: -90px;
    cursor: pointer;
    width: 20px;
  }
  .popup5 {
    width: 150px;
    text-align: left;
    padding-top: 50px;
    padding-left: 5px;
  }
  #popup4 {
    position: relative;
    padding-left: 10px;
    padding-top: 0px;
    width: 30px;
  }
  .popup3 {
    font-size: 15px;
    font-family: poppins;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.72);
    padding-left: 10px;
    font-style: italic;
  }
  .popup2 {
    font-size: 17px;
    font-family: poppins;
    font-weight: 500;
    color: white;
    padding-left: 10px;
  }
  #popup1 {
    justify-content: center;
    text-align: center;
    border-radius: 150px;
    margin-top: 50px;
    margin-left: 10px;
    width: 90px;
    height: 90px;
  }
  #elseJ2 {
    width: 50px;
  }
  .elseJ2 {
    margin-top: 100px;
    margin-right: 220px;
  }
  #founder1 {
    justify-content: center;
    text-align: center;
    border-radius: 30px;

    padding-bottom: 0px;
    width: 70px;
    height: 70px;
  }
  .frs {
    display: block;
    justify-content: center;
    padding-top: 125px;
    text-align: center;
    text-align: center;
    padding-left: 80px;
  }
  .fjelly {
    margin-top: -80px;
    margin-left: 250px;
  }
  #fjelly {
    width: 30px;
  }
  #j1 {
    position: relative;
    width: 70px;
    padding-left: 30px;
    margin-left: 220px;
    margin-top: 25px;
  }
  .j1 {
    padding-left: 30px;
  }
  .j5 {
    margin-top: 100px;
  }
  #j5 {
    position: relative;
    margin-left: 00px;
    padding-bottom: 50px;
    width: 30px;
    margin-top: 250px;
  }
  #plant2 {
    position: relative;
    margin-left: 0px;
    width: 30px;
    margin-top: -30px;
  }
  .main {
    margin-top: -67px;
    padding-right: 1200px;
    z-index: 2;
  }
  #block1 {
    width: 320px;
    margin-left: 1px;
  }
  .background4 {
    background-repeat: no-repeat;
    height: 990px !important;
    background-size: cover;
    background-position: center;
    background-color: #6891ca !important;
    margin-top: 67.1px;
  }
  .plants {
    margin-top: 0px;
  }
  #plants {
    position: relative;
    padding-left: 10px;
    width: 30px;
    margin-left: 320px;
  }

  #b6 {
    margin-left: -247px;
    margin-top: -68px;
    width: 100px;
  }
  .j2 {
    margin-top: -60px;
    margin-right: 50px; position: relative;
    z-index: 0;
  }
  #j2 {
    margin-top: 10px;
    margin-left: -130px;
    width: 35px;
    position: relative;
    z-index: -1;
  }
  .connect4[data-v-6aac4ade] {
    font-family: poppins;
    font-size: 30px;
    color: #06245c;
    /* margin-top: -150px; */
    font-weight: 700;
    text-align: center !important;
    /* padding-left: 650px; */
    margin: auto;
    margin-left: 120px;
    margin-top: -45px;
  }
  .founderDiv {
    width: 130px;
    height: 85px;
    background: #06245c;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 50px;
  }
  .ff1 {
    margin-left: 30px;
  }
  .fh2 {
    font-size: 16px;
    font-weight: 500;
    color: white;
    font-family: poppins;
  }
  .fh2b {
    text-align: center;
    width: 110px;
    font-size: 13px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.72);
    font-family: poppins;
    margin-left: 10px;
  }
  .f1close {
    margin-right: -40px;
  }
  .f2close {
    margin-right: 8px;
  }
  .f3close {
    margin-right: -20px;
  }
  .fff {
    margin-right: 35px;
  }
  .f4close {
    margin-right: -20px;
  }
}
</style>