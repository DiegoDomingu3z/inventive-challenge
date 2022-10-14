<template>
  <div class="row gx-0">
    <div class="col-md-8 mx-auto">
      <div class="bg-white elevation-4 p-4 mt-5 rounded">
        <div class="row">
          <div class="col-md-12">
            <label class="pb-1 text-dark" for="title">Test Name</label>
            <input
              id="title"
              class="form-control"
              placeholder="Enter the title of your test..."
              type="text"
              v-model="testName"
              required="true"
            />
          </div>
          <div class="col-md-12">
            <div v-if="addQuestion">
              <div class="question-form-box rounded">
                <div class="row">
                  <form @submit.prevent="addQuestions" id="question-form">
                    <div class="col-md-12">
                      <label for="" class="text-white">Question</label>
                      <textarea
                        placeholder="Write question..."
                        class="form-control question-input"
                        name=""
                        cols="30"
                        rows="2"
                        v-model="questionTextData"
                        required="true"
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
                          id="answer-a"
                          rows="1"
                          v-model="answerA"
                          required="true"
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
                          id="answer-b"
                          rows="1"
                          v-model="answerB"
                          required="true"
                        ></textarea>
                        <input
                          v-model="isCorrectB"
                          name="answer"
                          type="radio"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 inputs">
                      <label for="">Answer C</label>
                      <div class="d-flex justify-content-between">
                        <textarea
                          class="form-control"
                          name=""
                          id="answer-b"
                          rows="1"
                          v-model="answerC"
                          required="true"
                        ></textarea>
                        <input
                          v-model="isCorrectC"
                          name="answer"
                          type="radio"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 inputs">
                      <label for="">Answer D</label>
                      <div class="d-flex justify-content-between">
                        <textarea
                          class="form-control"
                          name=""
                          id="answer-d"
                          rows="1"
                          v-model="answerD"
                          required="true"
                        ></textarea>
                        <input
                          v-model="isCorrectD"
                          name="answer"
                          type="radio"
                        />
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
                          <button type="submit" class="btn bg-grey ms-2">
                            Add Question
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div v-else class="question-btn-box rounded">
              <button @click="openQuestionForm" class="btn question-btn">
                Add Question
              </button>
            </div>
            <div class="text-center mt-4">
              <p>Total Questions: {{ customTest.length }}</p>
            </div>
          </div>
          <div class="col-md-12">
            <div @click="save" class="save-btn rounded selectable text-center">
              <button type="submit" class="btn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="customTestName.length > 0">
    <button @click="deleteTest">delete stuff in storage</button>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import { saveState } from "../../app/Utils/Store";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  setup() {
    let testName = ref("");
    let questionTextData = ref("");
    let answerA = ref("");
    let answerB = ref("");
    let answerC = ref("");
    let answerD = ref("");
    let isCorrectA = ref("");
    let isCorrectB = ref("");
    let isCorrectC = ref("");
    let isCorrectD = ref("");
    const resetting = async () => {
      isCorrectA.value = "";
      isCorrectB.value = "";
      isCorrectC.value = "";
      isCorrectD.value = "";
      questionTextData.value = "";
      answerA.value = "";
      answerB.value = "";
      answerC.value = "";
      answerD.value = "";
    };
    const router = useRouter();
    return {
      testName,
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
          if (isCorrectA.value === "on") {
            isCorrectA.value = "true";
            console.log(isCorrectA.value);
            console.log("IS WORKING ^^^^");
          } else if (isCorrectB.value === "on") {
            isCorrectB.value = "true";
          } else if (isCorrectC.value === "on") {
            isCorrectC.value = "true";
          } else if (isCorrectD.value === "on") {
            isCorrectD.value = "true";
          } else {
            Pop.toast("Pick a correct answer");
            return;
          }
          let quiz = {
            questionText: questionTextData.value,
            answerOptions: [
              { answerText: answerA.value, isCorrect: isCorrectA.value },
              { answerText: answerB.value, isCorrect: isCorrectB.value },
              { answerText: answerC.value, isCorrect: isCorrectC.value },
              { answerText: answerD.value, isCorrect: isCorrectD.value },
            ],
          };
          console.log(quiz);
          resetting();
          AppState.customTest.push(quiz);
          saveState("customTest", AppState.customTest);
          console.log(AppState.customTest, "AppState");
        } catch (error) {
          Pop.toast(error.message);
        }
      },
      deleteTest() {
        try {
          window.localStorage.removeItem("customTest");
          let data = AppState.customTest;
          data.splice(0, data.length);
          let nameData = AppState.customTestName;
          nameData.splice(0, nameData.length);
          console.log(AppState.customTest);
          console.log(AppState.customTestName);
        } catch (error) {
          console.log(error.message);
        }
      },

      async save() {
        if (
          await Pop.confirm("Save?", "You will be taken to the testing page")
        ) {
          let data = { name: testName.value };
          AppState.customTestName.push(data);
          saveState("customTestName", AppState.customTestName);
          console.log(AppState.customTestName);
          router.push({ name: "CustomTest" });
        }
      },
      customTest: computed(() => AppState.customTest),
      customTestName: computed(() => AppState.customTestName),
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