<template>
  <div class="row gx-0">
    <div class="col-md-8 mx-auto">
      <div class="bg-white elevation-4 p-4 mt-5 rounded">
        <form>
          <div class="row">
            <div class="col-md-12">
              <label class="pb-1 text-dark" for="title">Test Name</label>
              <input
                id="title"
                class="form-control"
                placeholder="Enter the title of your test..."
                type="text"
              />
            </div>
            <div class="col-md-12">
              <div v-if="addQuestion">
                <div class="question-form-box rounded">
                  <div class="row">
                    <div class="col-md-12">
                      <label for="" class="text-white">Question</label>
                      <textarea
                        placeholder="Write question..."
                        class="form-control question-input"
                        name=""
                        id=""
                        cols="30"
                        rows="2"
                        v-model="questionTextData"
                      ></textarea>
                    </div>
                    <div class="col-md-6 text-center mx-auto">
                      <div class="instruction rounded-pill mt-3">
                        <p class="mt-2">
                          Write answer and select which is correct
                        </p>
                      </div>
                    </div>
                    <div class="col-md-12 inputs">
                      <label for="">Answer A</label>
                      <div class="d-flex justify-content-between">
                        <textarea
                          class="form-control"
                          name=""
                          id=""
                          rows="1"
                          v-model="answerA"
                        ></textarea>
                        <input
                          v-model="isCorrectA"
                          name="answer"
                          type="radio"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 inputs">
                      <label for="">Answer B</label>
                      <div class="d-flex justify-content-between">
                        <textarea
                          class="form-control"
                          name=""
                          id=""
                          rows="1"
                          v-model="answerB"
                        ></textarea>
                        <input name="answer" type="radio" />
                      </div>
                    </div>
                    <div class="col-md-12 inputs">
                      <label for="">Answer C</label>
                      <div class="d-flex justify-content-between">
                        <textarea
                          class="form-control"
                          name=""
                          id=""
                          rows="1"
                          v-model="answerC"
                        ></textarea>
                        <input name="answer" type="radio" />
                      </div>
                    </div>
                    <div class="col-md-12 inputs">
                      <label for="">Answer D</label>
                      <div class="d-flex justify-content-between">
                        <textarea
                          class="form-control"
                          name=""
                          id=""
                          rows="1"
                          v-model="answerD"
                        ></textarea>
                        <input name="answer" type="radio" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4 mx-auto">
                        <div class="text-center">
                          <button
                            @click="closeQuestionForm"
                            class="btn bg-danger me-2"
                          >
                            Cancel
                          </button>
                          <button
                            @click.prevent="addQuestions"
                            class="btn bg-grey ms-2"
                          >
                            Add Question
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="question-btn-box rounded">
                <button @click="openQuestionForm" class="btn question-btn">
                  Add Question
                </button>
              </div>
              <div class="text-center mt-4">
                <p>Total Questions: 8</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="save-btn rounded selectable">
                <button type="submit">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- <div class="example">
      <div v-for="n in 4" :key="n">
        <input type="text" v-model="answers[n - 1]" />
      </div>
    </div> -->
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import { saveState } from "../../app/Utils/Store";
export default {
  setup() {
    let answers = ref([]);

    let testData = ref({});
    let question = ref("");
    let questionTextData = ref("");
    let answerA = ref("");
    let answerB = ref("");
    let answerC = ref("");
    let answerD = ref("");
    let isCorrectA = ref("");
    let isCorrectB = ref("");
    let isCorrectC = ref("");
    let isCorrectD = ref("");
    return {
      answers,
      testData,
      questionTextData,
      answerA,
      answerB,
      answerC,
      answerD,
      isCorrectA,
      isCorrectB,
      isCorrectC,
      isCorrectD,
      addQuestions() {
        try {
          let quiz = {
            questionText: questionTextData.value,
            answerOptions: [
              { answerText: answerA.value },
              { answerText: answerB.value },
              { answerText: answerC.value },
              { answerText: answerD.value },
            ],
          };
          console.log(quiz);
          console.log(isCorrectA.value);

          AppState.customTest.push(quiz);
          saveState("customTest", AppState.customTest);
          console.log(AppState.customTest, "AppState");
        } catch (error) {
          Pop.toast(error.message);
        }
      },
    };
  },

  data() {
    return {
      addQuestion: false,
    };
  },

  methods: {
    openQuestionForm() {
      this.addQuestion = true;
      console.log(this.addQuestion);
    },
    closeQuestionForm() {
      this.addQuestion = false;
    },
  },
};
</script>


<style lang="scss" scoped>
label {
  color: white;
  margin-bottom: 0.3rem;
}
.question-input {
  background-color: #eba5a5fd;
  border: none;
}
.inputs {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

textarea {
  width: 95%;
}
.instruction {
  background-color: #2e2d2d;
  color: white;

  padding-top: 0.1rem;
  padding-bottom: 0.02rem;
}
.question-form-box {
  margin-top: 1rem;
  background-color: red;
  padding: 1.5rem;
}
.question-btn-box {
  background-color: red;
  padding: 1.5rem;
  margin-top: 1rem;
  text-align: center;
}

.question-btn {
  background-color: #2e2d2d;
  color: white;
}

.save-btn {
  background-color: red;
  padding: 0.5rem;
  margin-top: 1rem;
}
</style>