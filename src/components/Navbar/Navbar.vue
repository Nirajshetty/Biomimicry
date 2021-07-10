<template>
  <div class="header__component">
    <div class="logodiv">
      <div class="logo">
        <img src="@/assets/biomimicryLOGO.png" width="300p" alt="" />
      </div>
      <div class="nav" id="na">
        <b-nav-item-dropdown text="Who we are" style="margin-top: -7px;" right>
        <b-dropdown-item href="#" >About Biomimicry Compass</b-dropdown-item>
        <b-dropdown-item href="#">What is Biomimicry</b-dropdown-item>
        <b-dropdown-item href="#">Our Vision and Mission</b-dropdown-item>
        <b-dropdown-item href="#">People</b-dropdown-item>
      </b-nav-item-dropdown>
        <b-nav-item-dropdown text="What we do" style="color:white; padding-left: 120px; margin-top: -7px" right>
        <b-dropdown-item href="#" class="navdrop" style="color:black !important">Professional Training</b-dropdown-item>
        <b-dropdown-item href="#">Consulting and Innovation Services</b-dropdown-item>
      </b-nav-item-dropdown>
        <a href="https://medium.com/biomimicry-compass"  style="color: white; padding-left: 120px" target="_blank"
          >Blog</a
        >
        <router-link to="/" style="color: white; padding-left: 120px"
          >Get In Touch</router-link
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