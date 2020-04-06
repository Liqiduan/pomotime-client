<template>
  <v-container>
    <v-card v-for="task in tasks" :key='task._id'>
      <v-card-title>{{task.title}}</v-card-title>
      <v-card-subtitle>{{task.desc}}</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script lang="ts">
export default {
  name: 'Todolist',
  comptued: {
    tasks: function () {
      return [{
        _id: 0,
        title: "asdf",
        desc: "adf"
      }]
    }
  }
}
</script>
