<template>
    <div>
        <h1>测试filters</h1>
        <p>{{ num | test1 }}</p>
        <p>{{ num | test2 }}</p>
        <p>{{ num | test2(3) }}</p>
        <div v-bind:id="num | test2(4)">111111111</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      num: 2
    }
  }
}
</script>
