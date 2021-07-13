<template>
  <div class="header__component">
    <div class="logodiv">
      <div class="logo">
        <img src="@/assets/newlogo.png" width="300px" alt="" />
        <h3 style="color:white; font-size:18px;font-family:poppins;">An IIT Madras incubated company</h3>
      </div>
      <div class="nav" id="na">
        <b-nav-item-dropdown text="Who we are" style="margin-top: -7px;" right>
        <b-dropdown-item v-scroll-to="'#element1'">About Biomimicry Compass</b-dropdown-item>
        <b-dropdown-item v-scroll-to="'#element2'">What is Biomimicry</b-dropdown-item>
        <b-dropdown-item v-scroll-to="'#element3'">Our Vision and Mission</b-dropdown-item>
        <b-dropdown-item v-scroll-to="'#element4'">People</b-dropdown-item>
      </b-nav-item-dropdown>
        <b-nav-item-dropdown text="What we do" style="color:white; padding-left: 120px; margin-top: -7px" right>
        <b-dropdown-item v-scroll-to="'#element5'" class="navdrop" style="color:black !important">Professional Training</b-dropdown-item>
      </b-nav-item-dropdown>
        <a href="https://medium.com/biomimicry-compass"  style="color: white; padding-left: 120px" target="_blank"
          >Blog</a
        >
        <a v-scroll-to="'#element7'" style="color: white; padding-left: 120px;cursor:pointer"
          >Get In Touch</a
        >
       
       
    
      </div>
    </div>
  </div>
  
</template>
<style>
@import "./Navbar.css";
</style>
<script>

export default {
  name: "CourseNew",
  data() {
    return {
     btn_about:false,
     btn_media:false,
     home:true,
    };
  },
  methods:{
    about_click(){
      if(this.btn_media==true)
       {
         this.btn_media=false;
         this.home=true;
       }
      this.btn_about=!this.btn_about,
      this.home=!this.home
    },
     about_click1(){
       if(this.btn_about==true)
       {
         this.btn_about=false;
         this.home=true;
       }
      this.btn_media=!this.btn_media,
      this.home=!this.home
    }
  }
};
</script>