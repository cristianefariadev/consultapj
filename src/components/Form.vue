<template>
  <div class="form">
    <input type="text" placeholder="Digite o CNPJ" />
    <button type="submit"><img src="../assets/icon-search.svg" alt="Icone Search"></button>
  </div>
</template>

<script>
export default {
  name: 'Form'
}

</script>
<style scoped>
.form {
  max-width: 600px;
  display: flex;
  flex-direction: row;
  margin: 40px auto 20px;
}
input {
  flex: 1;
  border: 1px solid #eee;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 16px;
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
