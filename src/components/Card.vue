<template>
  <div class="card">
    <!--<div class="vazio">
      <img src="../assets/ilustracao-busca.svg" alt="Ilustração busca">
      <p>Faça sua pesquisa!</p>
    </div>-->
    <div class="busca">
      <li>
        Resultados de:
        <strong>32.198.165/00001-65</strong>
      </li>
      <p>
        Situação:
        <strong>Ativa</strong>
      </p>
      <p>
        Razão Social:
        <strong>Cristiane F Faria</strong>
      </p>
      <p>
        Nome Fantasia:
        <strong>Cristiane Faria UX Developer</strong>
      </p>
      <p>
        Data de abertura:
        <strong>27/02/2020</strong>
      </p>
      <p>
        Endereço:
        <strong>Av. 136 Goiânia</strong>
      </p>
      <p>
        Telefone:
        <strong>(62) 99670-2659</strong>
      </p>
      <p>
        E-mail:
        <strong>Falecom@cristianefaria.com</strong>
      </p>
      <p>
        label Sócios:
        <strong>Cristiane Faria</strong>
      </p>
      <p>
        Capital Social:
        <strong>R$ 5.000,00</strong>
      </p>
    </div>
  </div>
</template>

<!--
// <script>
// import Content from './Content.vue'

// export default {
//   name: 'Card',
//   components: {
//     Content
//   }
// }
</script>
-->
<style scoped>

.card {
  background-color:#fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: -80px auto 32px;
  max-width: 600px;
  padding: 24px;
  border-radius: 4px;
}

.vazio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 50vh;
  padding: 24px 0;
}

.vazio img {
  height: 180px;
  padding-bottom: 24px;
}

p{
  margin-bottom: 16px;
}

</style>
