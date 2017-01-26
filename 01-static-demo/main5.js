Vue.directive('focus', {
  update: function(el, binding){
    if(binding.value){
      el.focus();
    }
  }
})
var demo2 = new Vue({
  el: "#demo2",
  data: {
    focus: false
  },
})