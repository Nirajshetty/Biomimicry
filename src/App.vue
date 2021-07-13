<template>
  <div id="app">
      <Home/>
      <About id="element1"/>
      <WhatIsBiomimicry id="element2"/>
      <Vision id="element3"/>
      <Founders id="element4"/>
      <Training id="element5"/>
      <Connect id="element7"/>
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
import About from "@/views/About.vue";
import Connect from "@/views/Connect.vue";
import Founders from "@/views/Founders.vue";
import Home from "@/views/Home.vue";
import Training from "@/views/Training.vue";
import Vision from "@/views/Vision.vue";
import WhatIsBiomimicry from "@/views/What-is-Biomimicry.vue";
export default {
  name:'app',
  components: {
    About,
    Connect,
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
