<template>
   <input v-model="taskInput" type="text" id="taskInput" autofocus placeholder=" Enter a task name, then click the related button on the bottom" />
   <br><br>
   <div class="button-zone" >
      <button class="left" @click="addTask( taskInput )" >Add a new task</button>
      <button class="btn btn-warning" @click="removeTask( taskInput )" >Remove an existing task</button>
   </div>
</template>

<script>
export default {
   name: "toDoTask",
   data() {
      return { taskInput: "" }
   },
   methods: {
      addTask() {
         if ( this.taskInput.length > 0 ) {
            this.$store.dispatch( "addTask", this.taskInput )
            this.taskInput = ""
            this.$nextTick( () => { 
                    const tbl = document.querySelector( ".table" )
                    tbl.innerHTML = this.tabulate()
                    tbl.scrollTop = tbl.scrollHeight
                    document.getElementById( "taskInput" ).focus()
                  } 
            )
         }
      },
      removeTask() {
         if ( this.taskInput.length > 0 ) {
            this.$store.dispatch( "removeTask", this.taskInput )
            this.taskInput = ""
            this.$nextTick( () => { 
                    const tbl = document.querySelector( ".table" )
                    tbl.innerHTML = this.tabulate()
                    tbl.scrollTop = tbl.scrollHeight 
                    document.getElementById( "taskInput" ).focus()
                  } 
            )
         }
      },
      tabulate() {
         const count = this.$store.getters.getTotalTask
         const todoList = this.$store.getters.getTaskList
         const tableHeader = `
                  <table>
                     <thead><th>Task Name</th></thead>
                     <tbody>
            `
         let tableBody = ``
         for ( let i = 0; i < count; i++ ) {
            let highlight = ( i % 2 === 0) ? " class='highlight'" : ""
            tableBody += `
                  <tr${ highlight }>
                     <td>${ todoList[            i] }</td>
                  </tr>
            `
         }
         const tableFooter = `
                     </tbody>
                  </table>
            `
         return tableHeader + tableBody + tableFooter
      },
   },
}
</script>
