(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{427:function(t,s,a){"use strict";a.r(s);var e=a(16),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"归档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#归档"}},[t._v("#")]),t._v(" 归档")]),t._v(" "),a("h2",{attrs:{id:"标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ooszy.cco.vin/img/blog-note/image-20210831201338288.png?x-oss-process=style/pictureProcess1",alt:"image-20210831201338288"}})]),t._v(" "),a("p",[t._v("通过在每篇md文件上，添加"),a("code",[t._v("frontMatter")]),t._v("进行设置文章标签和类别，格式为")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("categories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("前端"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("分类"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置类别")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tag2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tag3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置标签")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),a("p",[a("code",[t._v("categories,tag")]),t._v("是一个数组，设置之后，请重新启动，否则不会生效")]),t._v(" "),a("h2",{attrs:{id:"类别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类别"}},[t._v("#")]),t._v(" 类别")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ooszy.cco.vin/img/blog-note/image-20210831201350855.png?x-oss-process=style/pictureProcess1",alt:"image-20210831201350855"}})]),t._v(" "),a("p",[t._v("类别是通过对文章path路径，进行分割选取的，如果一个path路径为")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/spring/springmvc/springmvc重定向和请求转发操作.html#请求转发\n")])])]),a("p",[t._v("那么此篇文章的类别就有"),a("code",[t._v("spring,springmvc")]),t._v("，同时，你也可以禁用将此篇文章的文件夹包含在类别中，禁用下面这个配置，便可以了")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//类别项是否包含文件夹名，默认包含")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("categoriesIncludeFolderName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"排除某个类别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排除某个类别"}},[t._v("#")]),t._v(" 排除某个类别")]),t._v(" "),a("p",[t._v("你也可以配置"),a("code",[t._v("excludePath")]),t._v("值，那个在excludePath数组中的路径的文件夹，就不会被包含在类别中，同时该路径所对应的文章，你在首页也将看不到，但是你可以通过"),a("code",[t._v("/xxx.md")]),t._v("进行访问")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在统计文章，标签，类别的时候，需要排除的路径，只针对于根目录下的路径，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("excludePath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/footer.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/v1.3.0/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/plugin/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("只支持排除在"),a("code",[t._v("docs")]),t._v("根目录下的md文件以及在"),a("code",[t._v("docs")]),t._v("子目录中，可以直接通过"),a("code",[t._v("/xxx/xxx/xxx/")]),t._v("进行访问的路径，其他的不支持")]),t._v(" "),a("h2",{attrs:{id:"分割符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分割符"}},[t._v("#")]),t._v(" 分割符")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ooszy.cco.vin/img/blog-note/image-20210831202338204.png?x-oss-process=style/pictureProcess1",alt:"image-20210831202338204"}})]),t._v(" "),a("p",[t._v("此分割符可以通过"),a("code",[t._v("split")]),t._v("项进行设置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~"')]),t._v("\n")])])]),a("h2",{attrs:{id:"文章页面配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文章页面配置"}},[t._v("#")]),t._v(" 文章页面配置")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/page/page.html"}},[t._v("文章页面配置")])],1)])}),[],!1,null,null,null);s.default=r.exports}}]);