<template lang="html">
  <v-list-item>
  <span v-if="todo.done" class="done">{{ todo.text }}</span>
  <span v-else> {{ todo.text }}</span>

  <v-spacer></v-spacer>
  <v-btn icon color="success" @click="completeTodo(todo)"><v-icon>mdi-comment-check-outline</v-icon></v-btn>
  <v-btn icon color="error"  @click="deleteTodo(todo)"><v-icon>mdi-comment-remove-outline</v-icon></v-btn>
  </v-list-item>

</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  methods: {
    completeTodo(todo) {
      this.$emit("complete-todo", todo);
    },
    deleteTodo(todo){
      this.$emit("delete-todo", todo);
    }
}
}
</script>

<style lang="css" scoped>
.done{
  background-color: #4CAF50;
}
</style>
