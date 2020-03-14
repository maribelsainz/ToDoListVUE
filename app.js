// Instancia de VUE
const app = new Vue({
  el: '#app',
  data: {
    title: 'Crea una nueva tarea:',
    todos: []
  },
  methods: {
    addTodo() {
      this.todos.push({
        titleItem: this.nuevoTodo,
        done: false
      })
    }
  }
});