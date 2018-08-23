<template>
  <div id="app" class="has-background-danger">
    <HeaderItem></HeaderItem>
    <div id="back-ground" class="box has-background-white">
      <!-- <img src="./assets/logo.png"> -->
      <router-view/>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
        Copyright (c) 2018 Takumi Ito
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem'
export default {
  name: 'App',
  components: {
    HeaderItem
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#back-ground {
  margin: 4%;
  border-radius: 2%;
}

</style>
