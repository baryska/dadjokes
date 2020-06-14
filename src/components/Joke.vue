<template>
  <div class="container">
    <div class="joke">
      <div class="joke__body">
        <img class="joke__user" :src="'./assets/img/' + user +'.png'" />
        <p class="joke__text">{{ joke }}</p>
      </div>
      <div class="joke__likes">
        <button id="btn-up" class="btn-like btn-like--up" v-on:click="upVote()"></button>
        <span id="likes-up" class="likes-count likes-count--up">{{ upLikes }}</span>
        <button id="btn-down" class="btn-like btn-like--down" v-on:click="downVote()"></button>
        <span id="likes-down" class="likes-count likes-count--down">{{ downLikes }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Joke",
  props: ["joke", "user", "upLikes", "downLikes"],
  methods: {
    upVote() {
      this.upLikes += 1;
    },
    downVote() {
      this.downLikes += 1;
    }
  }
};
</script>
