<template>
  <div class="background">
    <Navbar style="transform: rotateY(180deg);position:relative" />
    <div>
      <div class="HomeTitle">
        <p >
          Meet your 3.8-billion-year-old teachers: Sharks, geckos, fungi and
          termites.
        </p>
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






<style scoped>
.connect {
  font-family: poppins;
  font-size: 80px;
  color: white;
  padding-top: 50px;
  font-weight: 700;
}
.connectDiv {
  display: flex;
  font-family: poppins;
  z-index: 8;
  font-weight: 600;
}
.HomeTitle {
  font-size: 40px;
  font-weight: 700;
  color: white;
  width: 826px;
  text-align: center;
  font-family: poppins;
  padding-left: 1%;
  transform: rotateY(180deg);
  text-align: center; margin-left: 355px; padding-top: 200px
}
.background {
  background-repeat: no-repeat;
  background-size: cover;
  height: 722px !important;
  background-size: 1520px;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
  background-image: url("https://s3-alpha-sig.figma.com/img/00ef/8f82/66de6b8a2d58b6507a9822d14af5f25d?Expires=1626652800&Signature=CpaKqYlU3tgA3TFJ7EnvkB8VG8WD-l1lzFy69ht5FbMNJAB0KjeG-fzSAeOLLwukHDzLKhQucvDKkfJ7to9LMupZUKGeperaxkw8VhsUBd5a-N4RQiOpP1pdUp-ehPnXqVRHeViSvn9t6JLn6FEdZwE2ufgn4Alh8w2XFmWBvGkbSYRr1mFvLZpIGfhwpb4WpMXzqGEySnkWSFkpdHp~UxlIcmRIHxzNi-FkZICbDmP19dRySSIHgmzSAgTJKFhRw5njGwVbVno5kd7KFsb3jyp5xqBHICELPpME3RgtHwmsWFFKjEiVrPayFPpB1mme4q-0k8ykOAwwezkTuHo5ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  transform: rotateY(180deg);
}

.connect_container {
  width: 718px;
  height: 420px;
  background: #ffffff;
  box-shadow: 0px 0px 24px rgba(229, 229, 229, 0.75);
  border-radius: 5px;
  margin-top: 60px;
}
template {
  background: url("../assets/logo.png");
  background: tomato;
}
::placeholder {
  color: #b0b0b0;
}
input {
  width: 577px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  font-family: poppins;
}
input:focus {
  outline-color: #66bb6a;
}
textarea:focus {
  outline-color: #66bb6a;
}
textarea {
  width: 577px;
  height: 153px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  font-family: poppins;
}
button {
  width: 263.76px;
  height: 59px;
  background: #ffffff;
  border-radius: 43.3824px;
  color: black;
  font-family: poppins;
  font-size: 25px;
  font-weight: 700;
  border: #ffffff;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  /* Styles */
  .logodiv {
    width: 50px;
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  /* Styles */
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
}

/* iPhone 4 ----------- */
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .background {
    background-repeat: no-repeat;
    background-size: cover;
    height: 722px !important;
    background-size: 800px 1245px;
    background-position: center;
    min-width: 100%;
    min-height: 100%;
    background-image: url("https://s3-alpha-sig.figma.com/img/00ef/8f82/66de6b8a2d58b6507a9822d14af5f25d?Expires=1626652800&Signature=CpaKqYlU3tgA3TFJ7EnvkB8VG8WD-l1lzFy69ht5FbMNJAB0KjeG-fzSAeOLLwukHDzLKhQucvDKkfJ7to9LMupZUKGeperaxkw8VhsUBd5a-N4RQiOpP1pdUp-ehPnXqVRHeViSvn9t6JLn6FEdZwE2ufgn4Alh8w2XFmWBvGkbSYRr1mFvLZpIGfhwpb4WpMXzqGEySnkWSFkpdHp~UxlIcmRIHxzNi-FkZICbDmP19dRySSIHgmzSAgTJKFhRw5njGwVbVno5kd7KFsb3jyp5xqBHICELPpME3RgtHwmsWFFKjEiVrPayFPpB1mme4q-0k8ykOAwwezkTuHo5ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    transform: rotateY(180deg);
  }
  .HomeTitle {
    font-size: 30px;
    font-weight: 700;
    color: white;
    width: 456px;
    text-align: center;
    font-family: poppins;
    transform: rotateY(180deg);
    margin-left:20px;
    position:absolute;
   margin-top: -1.4375rem;
   padding-top: 0px;
   margin: auto;
  padding: 10px;
  }
}
</style>