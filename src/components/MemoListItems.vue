<template>
  <ul class="memolistitems" v-on:click="onClickDeleteButton">
    <li v-for="memoItem in memoItems" v-bind:key="memoItem.id" v-bind:id="memoItem.id">
      <MemoItem :memoContnet="memoItem.content"/>
    </li>
  </ul>
</template>

<script>
import store from '../store/index';
import MemoItem from './MemoItem.vue';

export default {
  name: 'MemoListItems',
  data() {
    return {
      memoItems: store.getters.memos
    };
  },
  components: {
    MemoItem
  },
  methods: {
    onClickDeleteButton(event) {
      event.preventDefault();
      if (event.target.className !== 'deletebutton') {
        return;
      }

      store.commit('removeMemo', event.target.closest('li').id);
      store.dispatch('saveMemosToStorage');
      this.memoItems = store.getters.memos;
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
  display: block;
}
a {
  color: #42b983;
}
</style>
