Vue.component('vue-item', {
  props: ['item'],
  template: '<li>{{ item.name }}</li>'
})

var app2 = new Vue({
  el: '#app2',
  data: {
    fruits: [
      { name : 'apple'},
      { name : 'banana'},
      { name : 'orange'}
    ]
  }
})