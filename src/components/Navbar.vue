<template>
  <nav>
    <div class="row gx-0">
      <div class="col-md-8 pt-3">
        <h2 class="header">The Inventive Group - Training Modules</h2>
      </div>
      <div class="col-md-4 pt-4">
        <router-link :to="{ name: 'Home' }">
          <button class="btn all-tests" type="button">All Tests</button>
        </router-link>
        <router-link :to="{ name: 'Create' }">
          <button class="create-btn rounded-pill px-4" type="button">
            Create a Test
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.953);
}

nav {
  background: rgba(232, 27, 27, 0.953);
  height: 10vh;
}

.create-btn {
  background: rgba(255, 255, 255, 0.953);
}

.all-tests {
  color: rgba(255, 255, 255, 0.953);
}
</style>
