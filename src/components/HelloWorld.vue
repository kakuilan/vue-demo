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
        <br>
        <span>计算后反转的字符串：{{reversedNowData}}</span>
      </h5>
    </p>
    <p v-if="seen">现在你看到我了</p>
    <div v-html="htmlMsg"></div>

    <!--如果useCls为 true 使用 class1 类的样式，否则不使用该类-->
    <div v-bind:class="{'class1': useCls}">
      v-bind:class 指令
    </div>

    <!-- v-bind:class设置一个或多个class样式 -->
    <p class="static"
     v-bind:class="{ active: seen, 'text-danger': useCls }">
      这里是v-bind:class设置
    </p>
    
    <!--JavaScript 表达式支持-->
    <div>
    {{1+2}}<br>
    {{ seen ? 'YES' : 'NO' }}<br>
    {{ nowData.split('').reverse().join('') }}
    <span v-bind:id="'list-'">
      <a v-bind:href="url">heheh</a>
    </span>
    <button v-on:click="clickEvent">点击事件</button>
    </div>
    <p>
      <!--过滤器使用管道符"|"指示,过滤器函数接受表达式的值作为第一个参数  -->
      <span>{{inputMsg | capitalize }}</span>
      <input v-model="inputMsg">
      <button v-on:click="reverseInput">翻转输入</button>
    </p>

    <!-- v-else-if条件判断 -->
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>

    <!-- v-for 循环,key必须 -->
    <ol>
      <li v-for="(site,idx) in sites" :key='idx'>
        {{ site.name }}
      </li>
    </ol>    

    <!-- v-for 迭代对象 -->
    <ul>
      <li v-for="(value, key, index) in object" :key='index'>
      {{ index }}. {{ key }} : {{ value }}
      </li>
    </ul>

    <!-- v-for 迭代整数 -->
    <ul>
      <li v-for="n in 10" :key='n'>
      {{ n }}
      </li>
    </ul>    

    <!-- watch监听属性 -->
    <p>
    千米 : <input type = "text" v-model = "kilometers">
    米 : <input type = "text" v-model = "meters">      
    </p>    

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
  methods:{
    clickEvent: function() {
       console.log('click...');
      },
    reverseInput:function() {
      this.inputMsg = this.inputMsg.split('').reverse().join('');
    },
  },
  // 过滤器
  filters:{
    // 首字母大写
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  data:function() {
  return {
      nowData:'页面加载于 ' + new Date().toLocaleString(),
      seen: false, //修改此值,以显示或隐藏
      htmlMsg:'<h2>Vue教程</h2>',
      useCls: true,
      url:'http://baidu.com',
      
      inputMsg:'default',
      type: 'C',
      sites: [
        { name: 'Baidu' },
        { name: 'Google' },
        { name: 'Taobao' }
      ],
      object: {
        name: '菜鸟教程',
        url: 'http://www.runoob.com',
        slogan: '学的不仅是技术，更是梦想！'
      },
      kilometers : 0,
      meters:0,
      
    };
  },
  // 计算属性
  computed:{
    // 计算属性的 getter
    reversedNowData: function () {
      // `this` 指向 vm 实例
      return this.nowData.split('').reverse().join('')
    },
  },
  // 监听属性
  watch : {
    kilometers:function(newVal, oldVal) {
        console.log('kilometers:', newVal, oldVal);
        this.kilometers = newVal;
        this.meters = this.kilometers * 1000
    },
    meters : function (newVal, oldVal) {
      console.log('meters:', newVal, oldVal);
        this.kilometers = newVal/ 1000;
        this.meters = newVal;
    }
  },
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
