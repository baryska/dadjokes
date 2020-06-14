import Vue from 'vue/dist/vue.js';
import './index.html';
import './style.css';


new Vue({
  el: '#app',
  data: {
    joke: 'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
    image: 'assets/img/user01.png',
    upLikes: 1,
    downLikes: 0
  },

  methods: {
    upVote() {
      this.upLikes += 1
    },
    downVote() {
      this.downLikes += 1
    }
  }
})