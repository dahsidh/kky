(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{440:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"更改图标以及覆盖主题样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改图标以及覆盖主题样式"}},[t._v("#")]),t._v(" 更改图标以及覆盖主题样式")]),t._v(" "),a("p",[t._v("在v.1.3.7之后，你可以自定义图标")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("如果你想要修改的图标，在http://aurora-font.cco.vin/中可以找到，那么你可以直接修改，如果没有在http://aurora-font.cco.vin/中，那么你就需要想你平常使用图标那样，引入字体，样式，然后再使用")])]),t._v(" "),a("h2",{attrs:{id:"使用预设图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用预设图标"}},[t._v("#")]),t._v(" 使用预设图标")]),t._v(" "),a("p",[t._v("假设你想要修改置顶的图标")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211021003525455.png?x-oss-process=style/pictureProcess1",alt:"image-20211021003525455"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("你需要"),a("code",[t._v("F12")]),t._v("查看此图标得类名，主题所有预设的图标类名都是开头"),a("code",[t._v("aurora-")]),t._v("，上图置顶的图标类名为"),a("code",[t._v("aurora-stick")])])]),t._v(" "),a("li",[a("p",[t._v("在http://aurora-font.cco.vin/aurora.html站点中，找到你喜欢的图标，并记录下下面值")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211021003913582.png?x-oss-process=style/pictureProcess1",alt:"image-20211021003913582"}})]),t._v(" "),a("li",[a("p",[t._v("进入到"),a("code",[t._v("docs/.vuepress/styles/index.css")]),t._v("文件中，使用下面的方式修改此图标")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".aurora-stick:before")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\e60a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211021004102208.png?x-oss-process=style/pictureProcess1",alt:"image-20211021004102208"}})])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("因为在"),a("code",[t._v("docs/.vuepress/styles/index.css")]),t._v("文件中的css样式，会添加到"),a("code",[t._v("head")]),t._v("元素的底部，所以此文件中的Css样式会覆盖默认主题提供的样式，所以你可以在此文件中，直接根据你的需要，把主题样式更改为你需要的样式，例如修改字体等等")])]),t._v(" "),a("h2",{attrs:{id:"使用自己的图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用自己的图标"}},[t._v("#")]),t._v(" 使用自己的图标")]),t._v(" "),a("p",[t._v("这里使用阿里巴巴图标库进行演示，只要是字体图标，都是一样的")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("挑选自己喜欢的图标，然后选择添加到库")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211021075125699.png?x-oss-process=style/pictureProcess1",alt:"image-20211021075125699"}})])]),t._v(" "),a("li",[a("p",[t._v("点击下载代码")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211021075328055.png?x-oss-process=style/pictureProcess1",alt:"image-20211021075328055"}})]),t._v(" "),a("li",[a("p",[t._v("解压之后，你会看到下面这些文件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211021075421251.png?x-oss-process=style/pictureProcess1",alt:"image-20211021075421251"}})])]),t._v(" "),a("li",[a("p",[t._v("将"),a("code",[t._v("iconfont.css")]),t._v("内的样式复制到"),a("code",[t._v("docs/.vuepress/styles/palette.css")]),t._v("文件中("),a("code",[t._v("也可以复制到docs/.vuepress/styles/index.css")]),t._v(")中，"),a("code",[t._v("palette.css")]),t._v("中，主要是定义一些变量，你可以在"),a("code",[t._v("index.css")]),t._v("中，直接使用这些变量，然后修改字体的路径")])]),t._v(" "),a("li",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--test-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iconfont"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Project id  */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'iconfont.ttf?t=1634773948652'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'truetype'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".iconfont")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iconfont"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-font-smoothing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" antialiased"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-osx-font-smoothing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grayscale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon-zhiding:before")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\e516"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon-zhiding1:before")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\e607"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("index.css")]),t._v("样式内，便可以像使用预设图标那样使用了")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".aurora-stick:before")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iconfont"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-font-smoothing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" antialiased"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-osx-font-smoothing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grayscale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\e607"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("这里需要注意，如果你使用自己的图标，那么在"),a("code",[t._v("aurora-xxx:before{}")]),t._v("样式内，你需要指定字体的名称，还有"),a("code",[t._v("content")]),t._v("值，原理就是"),a("code",[t._v("index.css")]),t._v("内的样式，会直接覆盖主题默认的样式")])])]),t._v(" "),a("li",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211021080627557.png?x-oss-process=style/pictureProcess1",alt:"image-20211021080627557"}})])]),t._v(" "),a("h2",{attrs:{id:"覆盖主题默认样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#覆盖主题默认样式"}},[t._v("#")]),t._v(" 覆盖主题默认样式")]),t._v(" "),a("p",[t._v("如果你需要对一些样式进行更改，你可以直接在"),a("code",[t._v("index.css")]),t._v("中，直接修改样式，如果你需要使用一些变量，那么你可以在"),a("code",[t._v("docs/.vuepress/styles/palette.css")]),t._v("文件内进行定义，然后在"),a("code",[t._v("index.css")]),t._v("内，直接使用这些变量就可以了")]),t._v(" "),a("h2",{attrs:{id:"主题特征配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题特征配置"}},[t._v("#")]),t._v(" 主题特征配置")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/style/feature/feature-config.html"}},[t._v("主题特征配置")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);