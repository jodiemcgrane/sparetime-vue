<!--
@Date:   2021-05-11T10:33:15+01:00
@Last modified time: 2021-05-11T13:54:43+01:00
-->



<template lang="html">
  <div>
    <v-text-field
    type="text"
    class="input"
    placeholder="Enter Todo"
    solo
    append-icon="mdi-comment-edit-outline"
    v-model="todo"
    v-on:keyup.enter="addNewTodo()"
    ></v-text-field>
  <v-list>
<TodoItem v-on:complete-todo="completeTodo" v-on:delete-todo="deleteTodo" v-for="item in list" :todo="item" :key="item.id"/>
  </v-list>
</div>
</template>

<script>
import axios from "axios"
import TodoItem from "./TodoItem"
export default {
  name: 'TodoList',

  props: [

  ],
  components:{
    TodoItem
  },

  data(){
    return{

      list: [],
      todo: ''
    }
  },
  mounted(){
  this.event_id = this.$route.params.id
    this.getTodos();
  },
  methods: {
    getTodos(){
      let token = localStorage.getItem('token');

      axios.get(`http://sparetime.project:8000/api/events/${this.event_id}/todos`, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.list = response.data.data;


        })
    },
    addNewTodo() {
      if(!this.todo){
        alert("Please enter a todo");
      }
      let token = localStorage.getItem('token');
      axios.post(`http://sparetime.project:8000/api/events/${this.event_id}/todos`, {
          title: this.todo,
          description: this.todo
        }, {
          headers: {
            Authorization: "Bearer " + token
          }
        }).then(response => {
                console.log(response.data);
                this.$router.go()
              })
              .catch(error => {
                console.log(error)
               console.log(error.response.data)
              });
    },
    completeTodo(todo){
      console.log(todo);
      let token = localStorage.getItem('token');

      axios.put(`http://sparetime.project:8000/api/events/${this.event_id}/todos/${todo.id}`, {
          title: todo.title,
          description: todo.title,
          status: "done"
        }, {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      ).then(response => {
              console.log(response.data);
                this.$router.go()
            })
            .catch(error => {
              console.log(error)
             console.log(error.response.data)
            })
    },

    deleteTodo(todo){
      let token = localStorage.getItem('token');
      axios.delete(`http://sparetime.project:8000/api/todos/${todo}`, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
            this.$router.go()
        })
        .catch(error => {
          console.log(error)
        })
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
