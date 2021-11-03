<template>
  <span>
    {{ memoContnet }}
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