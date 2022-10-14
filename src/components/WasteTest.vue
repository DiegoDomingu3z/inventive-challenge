<template>
  <nav class="">
    <div class="row gx-0">
      <div class="col-md-6">
        <h1 class="test-name">{{ testName.wasteTest }}</h1>
      </div>
      <div class="col-md-6 text-center">
        <div class="quiz-info">
          <span @click="goHome" type="button" class="home btn"
            >Return Home</span
          >
          <span class="questions-left">
            {{ currentQuestion + 1 }} / {{ questions.length }}</span
          >
        </div>
      </div>
    </div>
  </nav>
  <div>
    <div
      v-if="showScore"
      class="scoreboard text-center elevation-4 col-md-4 mx-auto"
    >
      <div><h3>Test Completed!</h3></div>
      <div class="text-muted">You scored:</div>
      <div class="percentage mt-3">
        <p class="score">{{ percentage }}%</p>
      </div>
      <div class="home-btn">
        <button @click="goHome" class="btn text-danger">Return Home</button>
      </div>
    </div>

    <div v-else class="row gx-0">
      <form id="form" action="" @submit.prevent="submit(answer)">
        <div class="test-card rounded col-md-8 mx-auto elevation-5">
          <div class="question-name">
            <span> {{ currentQuestion + 1 }}. </span>
            <span>
              {{ questions[currentQuestion].questionText }}
            </span>
          </div>
          <div
            class="d-flex justify-content-between questions"
            :key="index"
            v-for="(option, index) in questions[currentQuestion].answerOption"
          >
            <label v-bind:value="option.answerText">
              {{ option.letter }}. {{ option.answerText }}
            </label>
            <input
              v-bind:id="option.answerText"
              :value="option.isCorrect"
              type="radio"
              v-model="answer"
              name="testing"
            />
          </div>
        </div>
        <div class="col-md-8 mx-auto text-end mt-5 mb-5">
          <button title="Submit" class="btn bg-danger submit-btn">
            submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
      
      <script>
import { AppState } from "../AppState";
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import Pop from "../utils/Pop";
export default {
  data() {
    const route = useRouter();

    return {
      answer: {},
      currentQuestion: 0,
      showScore: false,
      score: 0,
      percentage: "",
      questions: computed(() => AppState.wasteTest),
      testName: computed(() => AppState.testNames),
      goHome() {
        route.push({ name: "Home" });
      },
    };
  },
  methods: {
    submit(answer) {
      console.log(answer);
      let nextQuestion = this.currentQuestion + 1;
      if (answer != true && answer != undefined) {
        Pop.toast("Please Select an Answer");

        return;
      }
      if (answer == true) {
        this.score = this.score + 1;
        console.log("correct!");
      }

      if (nextQuestion < this.questions.length) {
        this.answer = {};
        this.currentQuestion = nextQuestion;
      } else {
        let totalQuestions = AppState.wasteTest.length;
        let newScore = (this.score / totalQuestions) * 100;
        this.percentage = newScore.toFixed(0);
        this.showScore = true;
      }
    },
  },
};
</script>
      
  <style scoped>
.home-btn {
  color: red;
  font-weight: bolder;
  padding-top: 1.5rem;
}
.score {
  margin-top: 4rem;
  font-size: 40px;
}
.percentage {
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: black;
  border-radius: 50%;
  text-align: center;
  color: white;
}
.scoreboard {
  margin-top: 4rem;
  background-color: white;
  padding: 3rem;
}
.submit-btn {
  background-color: red;
  padding-left: 2rem;
  padding-right: 2rem;
}
.question-name {
  padding-bottom: 1rem;
  border-bottom: 2px solid red;
  color: red;
  font-size: 20px;
  font-weight: bolder;
}
.questions {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.test-card {
  margin-top: 4rem;
  background-color: white;
  padding: 3rem;
  padding-right: 4rem;
  padding-left: 4rem;
}
.test-name {
  padding: 1.2rem;
  text-align: center;
  color: white;
}
.questions-left {
  padding: 0.7rem;
  padding-right: 2rem;
  padding-left: 2rem;
  border-radius: 16px;
  color: white;
  background-color: black;
}
.home {
  margin-right: 6rem;
  font-size: 18px;
}

nav {
  background: rgba(232, 27, 27, 0.953);
  height: 10vh;
}

.quiz-info {
  padding-top: 1.8rem;
  color: white;
}

@media (max-width: 786px) {
  .quiz-info {
    padding-top: 0;
  }
  nav {
    height: 14vh;
  }

  .test-name {
    padding: 0.7rem;
  }
}
</style>