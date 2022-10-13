<template>
  <header><Navbar /></header>
  <div class="container">
    <div class="row bg-white elevation-3 rounded mt-5 p-3">
      <div class="col-md-4">
        <div class="m-3">
          <div class="bg-grey text-center card">
            <h4 class="name">{{ testName.test2 }}</h4>
            <div>
              <button
                @click="goToLeanTerminologyTest"
                class="btn bg-danger px-4"
              >
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="m-3">
          <div class="bg-grey text-center card">
            <h4 class="name">{{ test.questionText }}</h4>
            <div>
              <button
                v-if="customTest.length > 0"
                @click="goToWasteTest"
                class="btn bg-danger px-4"
              >
                Start Test
              </button>
              <button
                v-else
                @click="createCustomTest"
                class="btn bg-danger px-4"
              >
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="m-3">
          <div class="bg-grey text-center card">
            <h4 class="name">{{ testName.wasteTest }}</h4>
            <div>
              <button @click="goToWasteTest" class="btn bg-danger px-4">
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    onMounted(async () => {
      console.log(AppState.customTest);
    });

    return {
      goToWasteTest() {
        router.push({ name: "WasteTest" });
      },
      goToLeanTerminologyTest() {
        router.push({ name: "LeanTerminologyTest" });
      },

      goToCustomTest() {
        router.push({ name: "LeanTerminologyTest" });
      },
      createCustomTest() {
        router.push({ name: "Create" });
      },

      testName: computed(() => AppState.testNames),
      customTest: computed(() => AppState.customTest),
      test: computed(() => AppState.customTest),
    };
  },
};
</script>

<style scoped lang="scss">
.card {
  height: 400px;
}

.name {
  padding-top: 7em;
}
</style>
