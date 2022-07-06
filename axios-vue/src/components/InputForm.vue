<template>
  <h2 class="pb-2 border-bottom">Додати нотатку</h2>
  <form @submit.prevent="() => {
    storeTodoList([nameTodo, descriptionTodo])
    nameTodo = ''
    descriptionTodo = ''
  }">
    <div class="mb-3">
      <label for="exampleInputHeader" class="form-label">Заголовок</label>
      <input type="name" class="form-control" id="exampleInputHeader" aria-describedby="nameHelp"
        placeholder="Вкажіть заголовок нотатки" v-model="nameTodo">
      <div id="nameHelp" class="form-text">Заголовок нотатки є обов'язковим</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputDescription" class="form-label">Зміст</label>
      <textarea class="form-control" id="exampleInputDescription" placeholder="Вкажіть зміст нотатки"
        v-model="descriptionTodo"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Додати</button>
  </form>
</template>

<script>
// import api from '@/services/Api.js'
import { mapActions } from 'vuex'
export default {
  data: function () {
    return {
      nameTodo: '',
      descriptionTodo: ''
    }
  },
  mounted() {
  },
  methods: mapActions(['storeTodoList']),
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
