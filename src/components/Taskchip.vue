<template>
  <v-chip v-if="value > 0" 
    small
    outlined>
    <v-icon small left>{{icon}}</v-icon> 
    {{value}}
  </v-chip>
</template>

<script lang="ts">
import {reactive, computed} from "@vue/composition-api"

export default {
  props: {
    type: String,
    task: Object 
  },
  setup(props, context) {
    const icon = computed(() => {
        if (props.type === 'squashed') {
          return "mdi-flash"
        } else if (props.type === 'internalInterruptions') {
          return "mdi-bell"
        } else if (props.type === 'externalInterruptions') {
          return "mdi-flag"
        }
      })

    const value = computed(() => {
        if (props.type === 'squashed') {
          return props.task.squashed
        } else if (props.type === 'internalInterruptions') {
          return props.task.internalInterruptions
        } else if (props.type === 'externalInterruptions') {
          return props.task.externalInterruptions
        }
      })

    return {
      icon,
      value
    }
  }
}
</script>
