<template>
    <button v-on:click="incrementHandler">{{ counter }}</button>
</template>

<script>
export default {
  name: 'ButtonCounter',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementHandler: function() {
      this.counter += 1
      // 触发自定义事件
      this.$emit('increment')
    }
  }
}
</script>
