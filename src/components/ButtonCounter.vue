<template>
    <button v-on:click="incrementHandler">{{ counter }}</button>
</template>

<script>
export default {
  name: 'ButtonCounter',

  // data 必须是一个函数,每个实例可以维护一份被返回对象的独立的拷贝，如果 data 是一个对象则会影响到其他实例
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
