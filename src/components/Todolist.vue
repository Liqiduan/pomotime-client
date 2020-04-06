<template>
  <v-container>
    <v-card v-for="task in tasks" :key='task._id'>
      <v-card-title>{{task.title}}</v-card-title>
      <v-card-subtitle>{{task.description}}</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import {computed} from '@vue/composition-api'
import {useFind} from 'feathers-vuex'

export default {
  name: 'Todolist',

  setup(props, context) {
    const {Task} = context.root.$FeathersVuex.api
    const params = computed(() => {
      return {
        query: {}
      }
    })

    const data = useFind({
      model: Task,
      params: params,
      })
    return {
      tasks: data.items
    }
  }
}
</script>
