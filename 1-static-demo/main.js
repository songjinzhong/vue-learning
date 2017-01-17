var app = new Vue({
  el: '#app',
  data: {
    message: 'hello world!',
    date: 'the page open at ' + new Date().toLocaleString(),
    title: 'show you title',
    seen: true,
    items: [
      {name: 'apple'},
      {name: 'orange'},
      {name: 'banana'}
    ],
    sum: '',
    num1: '',
    num2: ''
  },
  methods: {
    add: function(){
      this.sum = parseInt(this.num1 ? this.num1 : 0) + parseInt(this.num2 ? this.num2 : 0);
    }
  }
})