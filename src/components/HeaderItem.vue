<template id="header">
  <nav class="navbar is-transparent">
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="#education">
          Education
        </a>
        <a class="navbar-item" href="#awards">
          Award
        </a>
        <a class="navbar-item" href="#publications">
          Publications
        </a>
        <a class="navbar-item" href="#activities">
          Activities
        </a>
        <!--  <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/documentation/overview/start/">
          Docs
          </a>
          <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="/documentation/overview/start/">
          Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
          Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
          Columns
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
          Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
          Form
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
          Elements
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
          Components
          </a>
          </div> -->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p>
              <a id="email-button" class="button is-primary" v-clipboard:copy="message">
                <span class="icon">
                  <i class="fa fa-envelope"> </i>
                </span>
              </a>
              </p>
              <p class="control">
              <a class="button" href="https://langsmith.co.jp/">
                <span class="icon">
                  <img src="../assets/logo_web.png" alt="Langsmith">
                </span>
              </a>
              </p>
            </div>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

export default {
  data () {
    return {
      message: 't-ito@ecei.tohoku.ac.jp'
    }
  }
}
</script>

<style scoped>

</style>
