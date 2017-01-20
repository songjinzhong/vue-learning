var app3 = new Vue({
  el: "#app3",
  data: {
    isActive: true,
    hasError: true,
    activeClass: "active",
    errorClass: "error",
    fontSize: 19,
    inputValue: 19,
    ok: true,
    username: ""
  },
  methods: {
    changeColor: function(){
      this.isActive = !this.isActive;
    },
    setSize: function(){
      this.fontSize = this.inputValue;
    },
    changeOk: function(){
      this.ok = !this.ok;
    },
    login: function(){
      
    }
  }
})