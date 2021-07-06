<template>
  <div class="header__component">
    <div class="logodiv">
      <div class="logo">
        <img src="@/assets/biomimicryLOGO.png" width="300p" alt="" />
      </div>
      <div class="nav" id="nav">
        <router-link to="/"  style="color: white">Who We Are</router-link>
        <p  style="color: white; padding-left: 120px;font-weight:bold;cursor:pointer;"
          >What We Do</p>
        <router-link to="/" style="color: white; padding-left: 120px"
          >Blog</router-link
        >
        <p  style="color: white; padding-left: 120px;font-weight:bold;cursor:pointer;" 
          >Get In Touch</p>
       
    
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