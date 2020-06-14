<template>
  <div>
    <p>Tohle je teda dost šílený úkol!</p>
    <Myjoke
      v-for="(vtip, index) in jokes"
      v-bind:joke="vtip.joke"
      v-bind:user="vtip.user"
      v-bind:upLikes="vtip.upLikes"
      v-bind:downLikes="vtip.downLikes"
      v-bind:key="index"
    />
  </div>
</template>

<script>
import Joke from "./components/Joke.vue";
export default {
  name: "App",
  components: {
    Myjoke: Joke
  },
  data() {
    return {
      jokes: [
        {
          joke: `The secret service isn't allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"`,
          user: "user01",
          upLikes: 13,
          downLikes: 24
        },
        {
          joke: `Why did the invisible man turn down the job offer? He couldn't see himself doing it.`,
          user: "user02",
          upLikes: 50,
          downLikes: 10
        },
        {
          joke: `I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!`,
          user: "user03",
          upLikes: 30,
          downLikes: 2
        },
        {
          joke: `Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.`,
          user: "user04",
          upLikes: 15,
          downLikes: 8
        },
        {
          joke: `My daughter screeched, "Daaaaaad, you haven't listened to one word I've said, have you!?" What a strange way to start a conversation with me...`,
          user: "user05",
          upLikes: 90,
          downLikes: 44
        },
        {
          joke: `My wife tried to unlatch our daughter's car seat with one hand and said, "How do one armed mothers do it?" Without missing a beat I replied, "Single handedly."`,
          user: "user06",
          upLikes: 38,
          downLikes: 1
        },
        {
          joke: `When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!`,
          user: "user07",
          upLikes: 66,
          downLikes: 35
        },
        {
          joke: `My friend keeps saying "cheer up man it could be worse, you could be stuck underground in a hole full of water." I know he means well.`,
          user: "user08",
          upLikes: 27,
          downLikes: 18
        },
        {
          joke: `The fattest knight at King Arthur’s round table was Sir Cumference. He acquired his size from too much pi.`,
          user: "user09",
          upLikes: 42,
          downLikes: 9
        }
      ]
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

.container {
  max-width: 30rem;
  margin: 5rem auto;
}

.joke {
  margin-bottom: 2rem;
}

.joke__body {
  display: flex;
}

.joke__user {
  flex: 0 0 auto;
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
}

.joke__text {
  background-color: cornflowerblue;
  color: white;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  margin: 0;
  line-height: 150%;
}

.joke__likes {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
}

.likes-count {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0.5rem;
}

.likes-count--up {
  color: #00e268;
}

.likes-count--down {
  color: #ff5654;
}

.btn-like {
  border: none;
  outline: none;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-size: 1.2rem;
  background-position: center;
  background-repeat: no-repeat;
}

.btn-like--up {
  background-color: #00e268;
  background-image: url("img/like-up.png");
}

.btn-like--down {
  background-color: #ff5654;
  background-image: url("img/like-down.png");
}
</style>