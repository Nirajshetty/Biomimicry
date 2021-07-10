<template>
  <div id="app">
    <Navbar />
      <Home class="section"/>
      <About class="section"/>
      <WhatIsBiomimicry class="section"/>
      <Vision class="section"/>
      <Founders class="section"/>
      <Training class="section"/>
      <Consulting class="section"/>
      <Connect class="section"/>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import About from "@/views/About.vue";
import Connect from "@/views/Connect.vue";
import Consulting from "@/views/Consulting.vue";
import Founders from "@/views/Founders.vue";
import Home from "@/views/Home.vue";
import Training from "@/views/Training.vue";
import Vision from "@/views/Vision.vue";
import WhatIsBiomimicry from "@/views/What-is-Biomimicry.vue";
export default {
  name:'app',
  components: {
    Navbar,
    About,
    Connect,
    Consulting,
    Founders,
    Home,
    Training,
    Vision,
    WhatIsBiomimicry
  },
  data() {
    return {};
  },
};
</script>
