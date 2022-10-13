<template>
  <div class="d-flex justify-content-center">
    <div v-if="showScore">
      <b-card title="Results" style="max-width: 20rem">
        You Scored {{ score }} of {{ questions.length }}
      </b-card>
    </div>
    <div class="card-q" v-else>
      <span>
        <b-card
          title="Simple Quiz Application"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Question No.{{ currentQuestion + 1 }} of {{ questions.length }}
          </b-card-text>
          <br />

          <b-card-text>
            {{ questions[currentQuestion].questionText }}
          </b-card-text>
          <div class="answer-section">
            <b-button
              :key="index"
              v-for="(option, index) in questions[currentQuestion]
                .answerOptions"
              @click="handleAnswerClick(option.isCorrect)"
              class="ans-option-btn"
              variant="primary"
              >{{ option.answerText }}</b-button
            >
          </div>
        </b-card>
      </span>
    </div>
  </div>
</template>
    
    <script>
import { AppState } from "../AppState";
import { computed } from "@vue/runtime-core";
export default {
  data() {
    return {
      currentQuestion: 0,
      showScore: false,
      score: 0,
      questions: computed(() => AppState.questions),
    };
  },
  methods: {
    handleAnswerClick(isCorrect) {
      let nextQuestion = this.currentQuestion + 1;
      if (isCorrect) {
        this.score = this.score + 1;
      }
      if (nextQuestion < this.questions.length) {
        this.currentQuestion = nextQuestion;
        // this.$store.state.questionAttended = this.currentQuestion;
        // localStorage.setItem('qattended', this.currentQuestion)
      } else {
        // localStorage.removeItem('qattended')
        this.showScore = true;
        // localStorage.setItem('testComplete',this.showScore)
      }
    },
  },
};
</script>
    
    <style scoped>
.card {
  min-width: 100%;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
}
.card-q {
  min-width: 60%;
}
.ans-option-btn {
  min-width: 50%;
  font-size: 16px;
  color: #ffffff;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
}
.answer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.timer-text {
  background: rgb(230, 153, 12);
  padding: 15px;
  margin-top: 20px;
  margin-right: 20px;
  border: 5px solid rgb(255, 189, 67);
  border-radius: 15px;
  text-align: center;
}
.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  height: 350px;
}
/* .ans-option-btn {
      width: 100%;
      font-size: 16px;
      color: #ffffff;
      background-color: #252d4a;
      border-radius: 15px;
      display: flex;
      padding: 5px;
      justify-content: flex-start;
      align-items: center;
      border: 5px solid #234668;
      cursor: pointer;
    } */
</style>