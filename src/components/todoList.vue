<template>
   <article>
      <span>
      <p class="bigFont">ToDo List <small class="smallFont" v-if="getTotalTask > 0">with outstanding {{ getTotalTask }} task(s)</small></p>
      </span>
      <div class="table"></div>
      <p class="smallFont">Last updated: {{ getLastUpdate }}</p>
   </article>
</template>
<script>
   export default {
      name: "toDoList",
      computed: {
         getTotalTask() {
            return this.$store.getters.getTotalTask
         },
         getLastUpdate() {
            return this.$store.getters.getLastUpdate
         },
      },
   }
</script>
