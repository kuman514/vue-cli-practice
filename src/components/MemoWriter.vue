<template>
  <form class="memowriter">
    <input v-model="memoContent">
    <button v-on:click="onSubmitMemo">Add</button>
  </form>
</template>

<script>
import store from '../store/index';

export default {
  name: 'MemoWriter',
  data() {
    return {
      memoContent: ''
    };
  },
  methods: {
    onSubmitMemo(event) {
      event.preventDefault();
      store.commit('addMemo', this.memoContent);
      store.dispatch('saveMemosToStorage');
      this.memoContent = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
