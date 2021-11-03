<template>
  <div class="memolist">
    <h1>Written Memos</h1>
    <MemoListItems/>
  </div>
</template>

<script>
// @ is an alias to /src
import MemoListItems from '@/components/MemoListItems.vue'

export default {
  name: 'MemoList',
  components: {
    MemoListItems
  }
}
</script>
