<template lang="html">
  <div>
    <v-text-field
    type="text"
    class="input"
    placeholder="Enter Todo"
    solo
    append-icon="mdi-comment-edit-ouotline"
    v-model="todo"
    v-on:keyup.enter="addNewTodo()"
    ></v-text-field>
  <v-list>
<TodoItem v-on:complete-todo="completeTodo" v-on:delete-todo="deleteTodo" v-for="item in list" :todo="item" :key="item.id"/>
  </v-list>
</div>
</template>

<script>

import TodoItem from "./TodoItem"
export default {
  name: 'TodoList',

  components:{
    TodoItem
  },

  data(){
    return{

      list: [{
          id: 1,
          text: "Clean the house",
          done: true
        },
        {
          id: 2,
          text: "Ignore the work you have to do",
          done: false
        },
        {
          id: 3,
          text: "Do all of the work you ignored and panic",
          done: false
        }
      ],
      todo: ''
    }
  },
  methods: {
    addNewTodo() {
      if(!this.todo){
        alert("Please enter a todo");
      }
      const newId = Math.max.apply(null, this.list.map(t =>t.id))+1;
      this.list.push({
        id: newId,
        text: this.todo,
        done: false
      });
      this.todo = "";
      this.saveTodo();
    },
    completeTodo(todo){
      const todoIndex = this.list.indexOf(todo);
      this.list[todoIndex].done = true;
      this.saveTodo();
    },
    deleteTodo(todo){
      const todoIndex = this.list.indexOf(todo);
      if(this.list[todoIndex] === todo){
      this.list.splice(todoIndex, 1);
      alert("You are about to deleted a ToDo");
      this.saveTodo()
    }
  },
    saveTodo() {
      let parsed = JSON.stringify(this.list);
      localStorage.setItem('list', parsed);
    }


  }

}
</script>

<style lang="css" scoped>
</style>
