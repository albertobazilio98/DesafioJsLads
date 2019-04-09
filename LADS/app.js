var app = new Vue({
    el: '#app',

    data: {
      nomeI: '',
      sexoI: {},
      btnM: false,
      btnF: false,
      pessoas: [
        {
        nome: "",
        sexo: ''
      }
    ]
    },
    methods: {
      add(){
        if (this.nomeI.trim() != "") {
          this.pessoas.push({nome: this.nomeI, sexo: this.sexoI})
        }
      },
      showM(){
        this.btnM = true;
        this.btnF = false;
      },
      showF(){
          this.btnF = true;
          this.btnM = false;
      }
    }
});
