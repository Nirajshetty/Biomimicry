<template>
  <div>
    <b-navbar toggleable="lg" class="navbar"  >
      <b-navbar-brand href="#" >
        <img  src="@/assets/newlogo.png" width="300px" alt="" />
        <h3 class="classTitle">
          An IIT Madras incubated company
        </h3>
      </b-navbar-brand>

      <b-navbar-toggle class="navToggle" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" id="na">
          <b-navbar-nav>
            <b-nav-item-dropdown class="navItem" text="Who we are" right no-caret>
              <b-dropdown-item v-scroll-to="'#element1'"
                >About Biomimicry Compass</b-dropdown-item
              >
              <b-dropdown-item v-scroll-to="'#element2'"
                >What is Biomimicry</b-dropdown-item
              >
              <b-dropdown-item v-scroll-to="'#element3'"
                >Our Vision and Mission</b-dropdown-item
              >
              <b-dropdown-item v-scroll-to="'#element4'"
                >People</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
             class="navItem"
              text="What we do"
              right
              no-caret
            >
              <b-dropdown-item
                v-scroll-to="'#element5'"
                >Professional Training</b-dropdown-item
              >
            </b-nav-item-dropdown>

            <b-nav-item href="https://medium.com/biomimicry-compass" target="_blank"  class="navItem">Blog</b-nav-item>
            <b-nav-item v-scroll-to="'#element7'"  class="navItem">Get In Touch</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
      btn_about: false,
      btn_media: false,
      home: true,
    };
  },
  methods: {
    about_click() {
      if (this.btn_media == true) {
        this.btn_media = false;
        this.home = true;
      }
      (this.btn_about = !this.btn_about), (this.home = !this.home);
    },
    about_click1() {
      if (this.btn_about == true) {
        this.btn_about = false;
        this.home = true;
      }
      (this.btn_media = !this.btn_media), (this.home = !this.home);
    },
  },
};
</script>