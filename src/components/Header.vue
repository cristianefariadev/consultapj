<template>
  <div class="header">
    <div class="titulo">
      <h1>Pesquisa CNPJ</h1>
      <h2>Encontre os dados dos seus clientes</h2>
    </div>
    <Form/>
  </div>
</template>

<script>
import Form from './Form.vue'

export default {
  name: 'Header',
  components: {
    Form
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #592E96;
  padding: 1rem 0;
  min-height: 340px;
}

.titulo {
  text-align: center;
  margin: 24px auto;
  color: #fff;
}

h1{
  font-weight: 300;
  font-size: 3rem;
}

h2{
  color: gainsboro;
  font-weight: 400;
  font-size: 1.25rem;
}

</style>
