<template>
  <div id="app">
    <Header/>
    <Card/>
    <Footer/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Card,
    Footer

  }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button, p {
    color: #222;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
  }
  button {
    cursor: pointer;
  }
</style>
