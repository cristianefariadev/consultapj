<template>
  <div class="form">
    <input type="text" placeholder="Digite o CNPJ" />
    <button @click.prevent.stop="getCnpj()"
      type="submit"><img src="../assets/icon-search.svg" alt="Icone Search">
    </button>
  </div>
</template>

<script>
const jsonp = require('jsonp')
export default {
  name: 'Form',

  data () {
    return {
      cnpj: '32198189000165',
      loading: true,
      errored: false
    }
  },

  methods: {
    getCnpj () {
      jsonp(`https://www.receitaws.com.br/v1/cnpj/${this.cnpj}`, null, (err, data) => {
        if (err) {
          console.error(err.message)
        } else {
          console.log(data)
        }
      })
    }
  }
}

</script>
<style scoped>
.form {
  max-width: 600px;
  display: flex;
  flex-direction: row;
  margin: 40px auto 20px;
}
@media screen and (max-width: 660px) {
   .form {
    margin-left: 24px;
    margin-right: 24px;
  }
}
input {
  flex: 1;
  border: 1px solid #eee;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 18px;
}
button {
  background: #DB2E79;
  border: 0;
  padding: 0 16px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
}
button[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
