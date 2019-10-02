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
      <div v-bind:class="['errorClass' , true ? activeClass : '']">inner</div>
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
      v-model双向数据绑定<br/>
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

    <!-- v-bind:style设置内联样式 -->
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">设置内联样式</div>

    <!-- 使用数组将多个样式对象应用到一个元素上 -->
    <div v-bind:style="[baseStyles, overridingStyles]">多个样式对象</div>

    <!-- 简单v-on:click事件 -->
    <p>
      <button v-on:click="counter += 1">增加 1</button>
      <span>这个按钮被点击了 {{ counter }} 次。</span>
    </p>

    <p>
      v-on调用自定义方法 
      <button v-on:click="greet">Greet</button>
    </p>

    <p>
      v-on的事件修饰符<br/>
      <!-- 阻止单击事件冒泡 -->
      <a v-on:click.stop="doThis">A</a>
      <!-- 提交事件不再重载页面 -->
      <form v-on:submit.prevent="onSubmit"></form>
      <!-- 修饰符可以串联  -->
      <a v-on:click.stop.prevent="doThat">B</a>
      <!-- 只有修饰符 -->
      <form v-on:submit.prevent></form>
      <!-- 添加事件侦听器时使用事件捕获模式 -->
      <div v-on:click.capture="doThis">C</div>
      <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
      <div v-on:click.self="doThat">D</div>

      <!-- click 事件只能点击一次，2.1.4版本新增 -->
      <a v-on:click.once="doThis">E</a>
    </p>

    <p>
      v-on的按键修饰符<br/>
      <input v-on:keyup.13="doThis">
      <!-- 同上 -->
      <input v-on:keyup.enter="doThis">
      <!-- 缩写语法 -->
      <input @keyup.enter="doThis">
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
    greet: function (event) {
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
          alert(event.target.tagName)
      }
    },
    doThis:function() {
      console.log('doThis');
    },
    doThat:function() {
      console.log('doThat');
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
      name:'Vue.js',
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
      activeClass: 'active',
      activeColor: 'green',
      fontSize: 30,
      baseStyles: {
        color: 'green',
        fontSize: '30px'
      },
      overridingStyles: {
        'font-weight': 'bold'
      },
      counter: 0,
      
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
