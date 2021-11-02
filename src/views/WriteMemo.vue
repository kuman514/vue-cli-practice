<template>
  <div class="write-memo">
    <MemoWriter/>
  </div>
</template>

<script>
// @ is an alias to /src
import MemoWriter from '@/components/MemoWriter.vue'

export default {
  name: 'WriteAMemo',
  components: {
    MemoWriter
  }
}
</script>
