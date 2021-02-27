<template lang="html">
<v-container class="my-5">
<v-row>
  <v-col cols="6">
<v-card>
  <v-card-title>
    Event title
  </v-card-title>
  <v-card-text>
Informtation
  </v-card-text>
</v-card>
</v-col>

<v-col cols="4">
  <v-card>
      <v-card-text>
<TodoList />
</v-card-text>
</v-card>
</v-col>
</v-row>


</v-container>
</template>

<script>
import TodoList from "@/components/Todo/TodoList"
export default {

components:{
    TodoList
},
}
</script>

<style lang="css" scoped>
</style>
