<template lang="html">
  <v-list-item>
  <span v-if="todo.status === 'done'" class="done">{{ todo.title }}</span>
  <span v-else> {{ todo.title }}</span>

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
      this.$emit("delete-todo", todo.id);
    }
}
}
</script>

<style lang="css" scoped>
.done{
  background-color: #4CAF50;
}
</style>
