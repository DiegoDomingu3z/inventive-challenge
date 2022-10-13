<template>
  <div class="row gx-0">
    <div class="col-md-8 mx-auto">
      <div class="bg-white elevation-4 p-4 mt-5 rounded">
        <div class="row">
          <div class="col-md-12">
            <label class="pb-1" for="title">Test Name</label>
            <input
              id="title"
              class="form-control"
              placeholder="Enter the title of your test..."
              type="text"
            />
          </div>
          <div class="col-md-12">
            <div v-if="addQuestion">hello</div>
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
              <p class="text-center mt-3">Save</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {},
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
  },
};
</script>


<style lang="scss" scoped>
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