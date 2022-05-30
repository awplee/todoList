import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [],
    lastUpdate: new Date()
  },
  getters: {
    getTotalTask( state ) {
      return state.todoList.length
    },
    getTaskList( state ) {
      return state.todoList
    },
    getLastUpdate( state ) {
      return state.lastUpdate
    },
  },
  mutations: {
    addTask: ( state, payload ) => {
      if ( state.todoList.indexOf( payload ) === -1 ) {
        state.todoList.push( payload )
        state.lastUpdate = new Date()
      }
    },
    removeTask: ( state, payload ) => {
      const index = state.todoList.indexOf( payload )
      if ( index > -1 ) {
        state.todoList.splice( index, 1 )
        state.lastUpdate = new Date()
      }
    }
  },
  actions: {
    addTask( context, payload ) {
      context.commit( "addTask", payload )
    },
    removeTask( context, payload ) {
      context.commit( "removeTask", payload )
    }
  },
})
