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
      // Esto limpia la barra del input después de agregar una tarea.
      this.nuevoTodo = '';
    },

    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },

    allDone() {
      this.todos.forEach(todo => {
        todo.done = true;
      })
    }
  }
});