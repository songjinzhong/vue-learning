Vue.component('vue-item', {
  props: ['list'],
  template: '<li>{{ list.name }}</li>'
})

var app2 = new Vue({
  el: '#app2',
  data: {
    fruits: [
      { name : 'apple'},
      { name : 'banana'},
      { name : 'orange'}
    ],
    message: "Hello world!",
    time: Date.now(),
    firstName: "song",
    lastName: "jinzhong",
    inputValue: 'song jinzhong'
  },
  methods: {
    rMessage: function(){
      return this.message.split('').reverse().join('');
    },
    timer: function(){
      return this.time;
    },
    setName: function(){
      this.fullName = this.inputValue;
    }
  },
  computed: {
    reverseMessage: function(){
      return this.message.split('').reverse().join('');
    },
    showTime: function(){
      return this.time;
    },
    fullName: {
      get: function(){
        return this.firstName + ' ' + this.lastName;
      },
      set: function(value){
        var nameArr = value.split(' ');
        this.firstName = nameArr[0];
        this.lastName = nameArr[nameArr.length - 1];
      }
    }
  },
  watch: {
    fullName: function(){
      console.log('fullname has changed:' + this.fullName);
    }
  }
})