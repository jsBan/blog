### 改造

<ol>
<li>ssy-new-ide 项目是用 vue+js 的编程方式进行构建的</li>
<li>首先需要做的就是安装 ts 相关插件</li>

```ts
cnpm install --save
"ts-loader": "^3.5.0",
"tslint": "^6.1.2",
"tslint-config-standard": "^9.0.0",
"tslint-loader": "^3.5.4",
"typescript": "^3.1.4",
```

<li>修改 main.js 文件、修改为 main.ts </li>
<li>需要把 build 文件中 webpack.base.conf.js 文件中的 entry 入口文件修改 <code>entry:'./src/main.ts'</code></li>
<li>在 resolve 中 extensions 数组中添加 <code>'.ts'</code>通过这样的配置，我们在组件中过着路由中应用组件时，就可以更为方便的应用，省略.ts文件的后缀 </li>
<li>同时在 module rules配置规则中增加处理ts文件以及tsx文件的loader, 配置如下：</li>

```ts
{
    test: /\.ts$/,
    exclude: /node_modules(?![/|\\](.*by-tools.*))/g,
    use: [
        "babel-loader",
        {
            loader: "ts-loader",
            options: {
                appendTsSuffixTo: [/\.vue$/],
                transpileOnly: true
            }
        }
    ]
},
{
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
        appendTsSuffixTo: [/\.vue$/]
    }
},
```

<li>在src文件下新增shims-vue.d.ts文件，主要是让ts去识别.vue文件，配置如下：</li>

```ts
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'animate.css'
```

<li>安装vue相关的装饰器插件 <code>"vue-preview": "^1.1.3"</code> <code>"vue-property-decorator": "^9.0.0"</code><code>"vue-class-component": "^7.2.3"</code> </li>
<li>安装完成之后在App.vue文件的 script 标签中添加 lang="ts"属性， 从vue-property-decorator导出Vue和Component API  并把 export default 修改为---> <code>export default class App extends Vue{}</code></li>

<li>最后可以 npm run start 运行项目</li>
</ol>
