<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      <h5>
        <span v-bind:title="nowData">
          鼠标悬停几秒钟查看此处动态绑定的提示信息！
        </span>
      </h5>
    </p>
    <p v-if="seen">现在你看到我了</p>
    <div v-html="htmlMsg"></div>

    <!--如果useCls为 true 使用 class1 类的样式，否则不使用该类-->
    <div v-bind:class="{'class1': useCls}">
      v-bind:class 指令
    </div>

    <!--JavaScript 表达式支持-->
    <div>
    {{1+2}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ nowData.split('').reverse().join('') }}
    <span v-bind:id="'list-' + id">heheh</span>      
    </div>

    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:function() {
  return {
      nowData:'页面加载于 ' + new Date().toLocaleString(),
      seen: false, //修改此值,以显示或隐藏
      htmlMsg:'<h2>Vue教程</h2>',
      useCls: true,
    };
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
