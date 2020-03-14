// Instancia de VUE
const app = new Vue({
  el: '#app',
  data: {
    title: 'Crea una nueva tarea:'
  },
  methods: {
    addTodo() {
      console.log('formulario enviado');
    }
  }
});