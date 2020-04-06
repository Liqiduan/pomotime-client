<template>
  <v-container>
    <v-card v-for="task in tasks" :key='task._id'> 
      <v-card-title>
        <v-btn icon outlined class="mr-2">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-text-field
          v-model="task.title"
          label="Title"
          single-line
          />
        <v-spacer/>
        <v-rating 
          dense
          :value="task.done"
          :length="task.estimated"
          ></v-rating>
      </v-card-title>

      <v-card-subtitle>
        <Taskchip type="squashed" :task="task"></Taskchip>
        <Taskchip type="internalInterruptions" :task="task"></Taskchip>
        <Taskchip type="externalInterruptions" :task="task"></Taskchip>
      </v-card-subtitle>

    </v-card>
  </v-container>
</template>

<script lang="ts">
import {computed} from '@vue/composition-api'
import {useFind} from 'feathers-vuex'

import Taskchip from './Taskchip.vue'

export default {
  name: 'Todolist',
  components: {
    Taskchip
  },

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
      tasks: data.items,
      Taskchip
    }
  }
}
</script>
