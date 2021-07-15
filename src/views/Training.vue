<template>
  <div>
    <div class="background5" v-if="training">
      <div>
        <div style="margin-top: -114px; padding-right: 850px; z-index: 2">
          <img
            src="@/assets/block111.png"
            style="position: relative"
            alt=""
            width="450px"
          />
        </div>
      </div>
      <div class="aboutDiv">
        <div style="margin-left: 50px">
          <h2 class="connect5">Professional Training</h2>
          <p
            style="
              font-size: 30px;
              font-weight: 400;
              text-align: left;
              font-family: poppins;
              width: 470px;
              color: white;
              padding-top: 50px;
            "
          >
            Our Professional Training Programs teach you how to tap into
            nature’s wisdom and equip you with the tools to apply biomimicry.
          </p>
          <p
            style="
              font-size: 30px;
              font-weight: 400;
              text-align: left;
              font-family: poppins;
              width: 470px;
              color: white;
            "
          >
            Our Programsand Workshops are named for the organisms and natural
            systems that inspire us.
          </p>
        </div>
        <div style="padding-left: 0px">
          <div style="margin-top: -155px; padding-left: 700px">
            <img src="@/assets/training1.png" width="210px" alt="" />
            <div
              style="
                text-align: center;
                margin-left: 10px;
                margin-top: 10px;
                z-index: 9;
              "
            >
              <h6 style="color: white; font-size: 20px; font-family: poppins">
                JellyFish Workshop
              </h6>
              <button @click="t1()">Know More</button>
            </div>
          </div>
          <div style="margin-top: -80px; padding-left: 100px">
            <img src="@/assets/training2.png" width="210px" alt="" />
            <div
              style="
                text-align: center;
                margin-left: 10px;
                margin-top: 10px;
                z-index: 9;
              "
            >
              <h6 style="color: white; font-size: 20px; font-family: poppins">
                Termite Mound Workshop
              </h6>
              <button @click="t2()">Know More</button>
            </div>
          </div>
          <div style="margin-top: -165px; padding-left: 700px">
            <img src="@/assets/training3.png" width="210px" alt="" />

            <div
              style="
                text-align: center;
                margin-left: 10px;
                margin-top: 10px;
                z-index: 9;
              "
            >
              <h6 style="color: white; font-size: 20px; font-family: poppins">
                Cicada Workshop
              </h6>
              <button @click="t3()">Know More</button>
            </div>
          </div>
        </div>
      </div>

      <img
        src="@/assets/blockTraining.png"
        style="
          margin-top: -235px;
          margin-right: 1110px;
          z-index: 0;
          padding-top: 0px;
        "
        alt=""
      />
      <div
        style="
          margin-top: -172px;
          z-index: 0;
          position: relative;
          padding-right: 1200px;
        "
      >
        <img src="@/assets/frog1.png" style="" alt="" />
      </div>
      <div
        style="
          margin-top: -115px;
          z-index: 0;
          position: relative;
          padding-right: 1150px;
        "
      >
        <img src="@/assets/frog2.png" style="" alt="" />
      </div>
    </div>
    <div class="backgroundWorkshop" v-if="workshop1">
      <div style="display: flex">
        <div style="width: 10%">
          <img
            src="@/assets/workshop1.png"
            style="padding-top: 200px; padding-left: 60px"
            width="370px"
            alt=""
          />
          <img
            src="@/assets/blockTraining.png"
            style="
              margin-top: -0px;
              margin-right: 1110px;
              z-index: 0;
              padding-top: 0px;
            "
            alt=""
          />
          <div
            style="
              margin-top: -168px;
              z-index: 0;
              position: relative;
              padding-right: 1000px;
            "
          >
            <img src="@/assets/frog1.png" style="" alt="" />
          </div>
          <div
            style="
              margin-top: -105px;
              z-index: 0;
              position: relative;
              padding-right: 1150px;
            "
          >
            <img src="@/assets/frog2.png" style="margin-left: 150px" alt="" />
          </div>
        </div>
        <div style="width: 90%">
          <div style="display: flex">
            <div style="margin-left: 325px">
              <h2
                style="
                  font-size: 55px;
                  font-family: poppins;
                  font-weight: 500;
                  padding-top: 70px;
                  padding-right: 300px;
                  color: #06245c;
                "
              >
                Jellyfish Workshop
              </h2>
            </div>
            <div style="">
              <img
                src="@/assets/close.png"
                style="cursor:pointer;text-align-left;margin-top:60px;margin-left:210px"
                @click="founder()"
                width="43px"
                alt=""
              />
            </div>
          </div>
          <h3
            style="
              font-size: 34px;
              font-family: poppins;
              font-weight: 500;
              padding-top: 0px;
              padding-right: 340px;
              color: white;
            "
          >
            Biomimicry For Innovation
          </h3>
          <p
            style="
              font-size: 25px;
              font-family: poppins;
              font-weight: 400;
              margin-top: 20px;
              color: white;
              text-align: left;
              width: 1000px;
              margin-left: 325px;
            "
          >
            A custom program for teams that are seeking innovation for a
            specific challenge or looking for new ideas and fresh thinking.
            Teams gain a new perspective that can help innovation across their
            organization
          </p>
          <div style="margin-left: 365px; width: 1000px">
            <ol type="1">
              <li>
                Discover the process to weave nature’s ingenious solutions into
                problem solving
              </li>
              <li>Discover the tools to design new solutions</li>
              <li>
                A framework for innovating on new products and processes, and
                reimagining existing systems
              </li>
              <li>Future- proof the organization</li>
            </ol>
          </div>
          <div style="display: flex; padding-left: 330px">
            <img src="@/assets/req.png" width="30px" height="30px" alt="" />
            <p
              style="
                font-size: 25px;
                font-family: poppins;
                font-weight: 400;
                margin-top: -3px;
                color: white;
                text-align: left;
                width: 1000px;
                padding-left: 10px;
              "
            >
              Based on requirement
            </p>
          </div>
          <div style="display: flex; padding-left: 330px">
            <img src="@/assets/tool.png" width="30px" height="30px" alt="" />
            <p
              style="
                font-size: 25px;
                font-family: poppins;
                font-weight: 400;
                margin-top: -3px;
                color: white;
                text-align: left;
                width: 1000px;
                padding-left: 10px;
              "
            >
              Teams looking for innovation tools and processes
            </p>
          </div>
          <button style="margin-left: 1150px">Learn More</button>
        </div>
      </div>
    </div>

    <div class="backgroundWorkshop" v-if="workshop2">
      <div style="display: flex">
        <div style="width: 10%">
          <img
            src="@/assets/workshop2.png"
            style="padding-top: 200px; padding-left: 60px"
            width="370px"
            alt=""
          />
          <img
            src="@/assets/blockTraining.png"
            style="
              margin-top: -0px;
              margin-right: 1110px;
              z-index: 0;
              padding-top: 0px;
            "
            alt=""
          />
          <div
            style="
              margin-top: -168px;
              z-index: 0;
              position: relative;
              padding-right: 1000px;
            "
          >
            <img src="@/assets/frog1.png" style="" alt="" />
          </div>
          <div
            style="
              margin-top: -105px;
              z-index: 0;
              position: relative;
              padding-right: 1150px;
            "
          >
            <img src="@/assets/frog2.png" style="margin-left: 150px" alt="" />
          </div>
        </div>
        <div style="width: 90%">
          <div style="display: flex">
            <div style="margin-left: 320px">
              <h2
                style="
                  font-size: 55px;
                  font-family: poppins;
                  font-weight: 500;
                  padding-top: 70px;
                  padding-right: 300px;
                  color: #06245c;
                "
              >
                Termite Mound Workshop
              </h2>
            </div>
            <div style="">
              <img
                src="@/assets/close.png"
                style="cursor:pointer;text-align-left;margin-top:60px;margin-left:60px"
                @click="founder()"
                width="43px"
                alt=""
              />
            </div>
          </div>
          <h3
            style="
              font-size: 34px;
              font-family: poppins;
              font-weight: 500;
              padding-top: 0px;
              padding-right: 240px;
              color: white;
            "
          >
            Solve Problems Using Biomimicry
          </h3>
          <p
            style="
              font-size: 25px;
              font-family: poppins;
              font-weight: 400;
              margin-top: 20px;
              color: white;
              text-align: left;
              width: 1000px;
              margin-left: 325px;
            "
          >
            Designed to help participants develop the practice of Biomimicry,
            the workshop offers a project-based learning experience.
            Participants discover a new way of thinking
          </p>
          <div style="margin-left: 365px; width: 1000px">
            <ol type="1">
              <li>
                Learn how to solve problems using the practice of biomimicry
              </li>
              <li>Discover the tools to design new solutions</li>
              <li>
                Design a solution for a selected problem by applying the
                biomimicry process
              </li>
              <li>
                Bring sustainable innovation inspired by nature into their work
              </li>
            </ol>
          </div>
          <div style="display: flex; padding-left: 330px">
            <img src="@/assets/req.png" width="30px" height="30px" alt="" />
            <p
              style="
                font-size: 25px;
                font-family: poppins;
                font-weight: 400;
                margin-top: -3px;
                color: white;
                text-align: left;
                width: 1000px;
                padding-left: 10px;
              "
            >
              4 weeks
            </p>
          </div>
          <div style="display: flex; padding-left: 330px">
            <img src="@/assets/tool.png" width="30px" height="30px" alt="" />
            <p
              style="
                font-size: 25px;
                font-family: poppins;
                font-weight: 400;
                margin-top: -3px;
                color: white;
                text-align: left;
                width: 1000px;
                padding-left: 10px;
              "
            >
              Researchers, Entrepreneurs and Innovators looking for
              out-of-the-box solutions.
            </p>
          </div>
          <button style="margin-left: 1150px">Learn More</button>
        </div>
      </div>
    </div>

    <div class="backgroundWorkshop" v-if="workshop3">
      <div style="display: flex">
        <div style="width: 10%">
          <img
            src="@/assets/workshop3.png"
            style="padding-top: 200px; padding-left: 60px"
            width="370px"
            alt=""
          />
          <img
            src="@/assets/blockTraining.png"
            style="
              margin-top: -0px;
              margin-right: 1110px;
              z-index: 0;
              padding-top: 0px;
            "
            alt=""
          />
          <div
            style="
              margin-top: -168px;
              z-index: 0;
              position: relative;
              padding-right: 1000px;
            "
          >
            <img src="@/assets/frog1.png" style="" alt="" />
          </div>
          <div
            style="
              margin-top: -105px;
              z-index: 0;
              position: relative;
              padding-right: 1150px;
            "
          >
            <img src="@/assets/frog2.png" style="margin-left: 150px" alt="" />
          </div>
        </div>
        <div style="width: 90%">
          <div style="display: flex">
            <div style="margin-left: 320px">
              <h2
                style="
                  font-size: 55px;
                  font-family: poppins;
                  font-weight: 500;
                  padding-top: 70px;
                  padding-right: 300px;
                  color: #06245c;
                "
              >
                Cicada Workshop
              </h2>
            </div>
            <div style="">
              <img
                src="@/assets/close.png"
                style="cursor:pointer;text-align-left;margin-top:60px;margin-left:240px"
                @click="founder()"
                width="43px"
                alt=""
              />
            </div>
          </div>
          <h3
            style="
              font-size: 34px;
              font-family: poppins;
              font-weight: 500;
              padding-top: 0px;
              padding-right: 340px;
              color: white;
            "
          >
            Introduction To Biomimicry
          </h3>
          <p
            style="
              font-size: 25px;
              font-family: poppins;
              font-weight: 400;
              margin-top: 20px;
              color: white;
              text-align: left;
              width: 1000px;
              margin-left: 325px;
            "
          >
            Start your journey in biomimicry with this introductory program.
            Learn what the practice of biomimicry can offer you. Explore the
            possibilities of how you can use biomimicry in innovation, research
            or entrepreneurship
          </p>
          <div style="margin-left: 365px; width: 1000px">
            <ol type="1">
              <li>Understand the essential principles of Biomimicry</li>
              <li>
                Learn how to apply the Biomimicry thinking methodology in your
                life and work
              </li>
              <li>
                See how nature's genius has inspired businesses to innovate and
                reinvent their thinking
              </li>
            </ol>
          </div>
          <div style="display: flex; padding-left: 330px">
            <img src="@/assets/req.png" width="30px" height="30px" alt="" />
            <p
              style="
                font-size: 25px;
                font-family: poppins;
                font-weight: 400;
                margin-top: -3px;
                color: white;
                text-align: left;
                width: 1000px;
                padding-left: 10px;
              "
            >
              3 Hours
            </p>
          </div>
          <div style="display: flex; padding-left: 330px">
            <img src="@/assets/tool.png" width="30px" height="30px" alt="" />
            <p
              style="
                font-size: 25px;
                font-family: poppins;
                font-weight: 400;
                margin-top: -3px;
                color: white;
                text-align: left;
                width: 1000px;
                padding-left: 10px;
              "
            >
              Individuals and teams who want to learn what biomimicrycan offer
              them.
            </p>
          </div>
          <button style="margin-left: 1150px">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CourseNew",
  components: {},
  data() {
    return {
      training: true,
      workshop1: false,
      workshop2: false,
      workshop3: false,
    };
  },
  methods: {
    t1() {
      this.training = false;
      this.workshop1 = true;
      this.workshop2 = false;
      this.workshop3 = false;
    },
    t2() {
      this.training = false;
      this.workshop2 = true;
       this.workshop1 = false;
      this.workshop3 = false;
    },
    t3() {
      this.training = false;
      this.workshop3 = true;
       this.workshop2 = false;
      this.workshop1 = false;
    },
    founder() {
      this.workshop1 = false;
      this.workshop2 = false;
      this.workshop3 = false;
      this.training = true;
    },
  },
};
</script>






<style scoped>
li {
  display: list-item;
  list-style-position: inside;
  color: white;
  font-size: 25px;
  font-weight: 400;
  font-family: poppins;
  text-align: left;
  padding-top: 10px;
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
  width: 312px;
  height: 314px;
  background: #06245c;
  text-align: center;
}
.connect5 {
  font-family: poppins;
  font-size: 50px;
  color: #06245c;
  margin-top: -100px;
  font-weight: 700;
  text-align: left;
  padding-left: 0px;
  padding-top: 100px;
}
button {
  width: 143.76px;
  height: 40px;
  background: #06245c;
  border-radius: 43.3824px;
  color: #ffffff;
  font-family: poppins;
  font-size: 15px;
  font-weight: 700;
  border: #06245c;
}
.background5 {
  background-repeat: no-repeat;
  background-size: cover;
  height: 718px !important;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  background-color: #6891ca !important;
  margin-top: 110px;
}
.backgroundWorkshop {
  background-repeat: no-repeat;
  background-size: cover;
  height: 718px !important;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  background-color: #6891ca !important;
  margin-top: 0px;
}
.aboutDiv {
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 8;
  margin-top: 0px;
  display: flex;
}
</style>