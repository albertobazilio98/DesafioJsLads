
var app = new Vue({
    el: '#app',

    data: {
      nomeI: '',
      sexoI: 'm',
      mostrarHomens: false,
      mostrarMulheres: false,
      pessoas: []
    },
    methods: {
      add(){
        if (this.nomeI.trim() != "") {
          this.pessoas.push({nome: this.nomeI, sexo: this.sexoI})
        }
      },
      showM(){
        this.mostrarHomens = true;
        this.mostrarMulheres = false;
      },
      showF(){
          this.mostrarMulheres = true;
          this.mostrarHomens = false;
      }
    }
});
