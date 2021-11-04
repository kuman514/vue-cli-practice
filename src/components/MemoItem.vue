<template>
  <span>
    {{ memoContnet }}
    <button class="deletebutton">❌</button>
  </span>
</template>

<script>
export default {
  name: 'MemoItem',
  props: {
    memoContnet: String
  }
}
</script>