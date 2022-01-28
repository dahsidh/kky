(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{432:function(t,s,a){"use strict";a.r(s);var e=a(16),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-coze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-coze"}},[t._v("#")]),t._v(" Vuepress-plugin-coze")]),t._v(" "),a("h2",{attrs:{id:"introduce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduce"}},[t._v("#")]),t._v(" introduce")]),t._v(" "),a("p",[t._v("这是Vuepress2的一个插件，该插件提供在线发布，修改说说，相册功能，支持文件上传，登录注册，点赞，评论等，使用简单，只需在"),a("a",{attrs:{href:"https://console.leancloud.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("leancloud"),a("OutboundLink")],1),t._v("中获取到正确的"),a("code",[t._v("appId")]),t._v(","),a("code",[t._v("appKey")]),t._v("便可以在任何地方使用")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("blockquote",[a("p",[t._v("因为该插件是基于Vuepress2的，所以在使用该插件之前，请确保你使用的版本为"),a("code",[t._v("Vuepress2")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-coze\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//docs/.vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-coze'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'leanCloud中得到的appId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appKey")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'leanCloud中得到的appKey'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("masterKey")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'leanCloud中得到的masterKey'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//下面这些是可选的")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("avatarPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://ooszy.cco.vin/img/blog-note/avatar-aurora.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//说说头像url")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("registerPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/aurora-register'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义插件默认提供的注册页面路由，请在前面加上/")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("onlyAdministrator")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否运行其他注册的用户发布说说，true表示只有管理员可以发布")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("运行你的vuepress应用，待启动完成之后，分别访问"),a("code",[t._v("/aurora-register")]),t._v("和"),a("code",[t._v("/aurora-coze")]),t._v("进行用户注册和说说展示")])]),t._v(" "),a("h2",{attrs:{id:"截图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#截图"}},[t._v("#")]),t._v(" 截图")]),t._v(" "),a("ul",[a("li",[t._v("说说展示("),a("code",[t._v("此效果在我主题中")]),t._v(")")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108190928615.png?x-oss-process=style/pictureProcess1",alt:"image-20211108190928615"}})]),t._v(" "),a("ul",[a("li",[t._v("发布说说界面")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108191227820.png?x-oss-process=style/pictureProcess1",alt:"image-20211108191227820"}})]),t._v(" "),a("ul",[a("li",[t._v("相册")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211110233924959.png?x-oss-process=style/pictureProcess1",alt:"image-20211110233924959"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("提供的注册界面")]),t._v(" "),a("blockquote",[a("p",[t._v("此界面是该插件自动提供的，并且插件也提供了一个没有任何样式的全局组件，你可以自己进行css编写")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108191311008.png?x-oss-process=style/pictureProcess1",alt:"image-20211108191311008"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("点赞，评论，编写")]),t._v(" "),a("blockquote",[a("p",[t._v("因为时间问题，目前说说评论暂未实现")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108191613515.png?x-oss-process=style/pictureProcess1",alt:"image-20211108191613515"}})]),t._v(" "),a("p",[t._v("如果你在使用该插件及"),a("a",{attrs:{href:"https://aurora.xcye.xyz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aurora主题"),a("OutboundLink")],1),t._v("的过程中，有任何的问题，都可以通过以下方式联系我")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("QQ")]),t._v(" "),a("th",[t._v("主题交流群")]),t._v(" "),a("th",[t._v("微信")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211024233620332.png?x-oss-process=style/pictureProcess1"}})]),t._v(" "),a("td",[a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211024233827133.png?x-oss-process=style/pictureProcess1",alt:"image-20211024233827133"}})]),t._v(" "),a("td",[a("img",{staticStyle:{zoom:"39%"},attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211024233735110.png?x-oss-process=style/pictureProcess1",alt:"image-20211024233735110"}})])])])]),t._v(" "),a("h2",{attrs:{id:"用户注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户注册"}},[t._v("#")]),t._v(" 用户注册")]),t._v(" "),a("h3",{attrs:{id:"秘钥获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#秘钥获取"}},[t._v("#")]),t._v(" 秘钥获取")]),t._v(" "),a("p",[t._v("该插件的说说存储于"),a("code",[t._v("leancloud")]),t._v(",进入"),a("a",{attrs:{href:"https://console.leancloud.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("leanCloud国际版"),a("OutboundLink")],1),t._v("("),a("code",[t._v("一定要使用国际版，国内版我没测试过")]),t._v(")，你如果没有"),a("code",[t._v("leanCloud")]),t._v("账户的话，需要先创建一个有效账户，")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108192136530.png?x-oss-process=style/pictureProcess1",alt:"image-20211108192136530"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108192241757.png?x-oss-process=style/pictureProcess1",alt:"image-20211108192241757"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108192330231.png?x-oss-process=style/pictureProcess1",alt:"image-20211108192330231"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108192405575.png?x-oss-process=style/pictureProcess1",alt:"image-20211108192405575"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108192519797.png?x-oss-process=style/pictureProcess1",alt:"image-20211108192519797"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108192639202.png?x-oss-process=style/pictureProcess1",alt:"image-20211108192639202"}})]),t._v(" "),a("h3",{attrs:{id:"注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[t._v("#")]),t._v(" 注册")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("路由")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("/aurora-register")]),t._v(" "),a("td",[t._v("注册用户，登出操作")])]),t._v(" "),a("tr",[a("td",[t._v("/aurora-coze")]),t._v(" "),a("td",[t._v("说说默认展示页面")])])])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("/aurora-register")]),t._v("是默认注册用户，登出操作页面的路由，如果你在插件配置中设置了"),a("code",[t._v("registerPath")]),t._v("值，那么注册，登出的路由将是"),a("code",[t._v("registerPath")]),t._v("对应值")])]),t._v(" "),a("p",[t._v("现在访问"),a("code",[t._v("/aurora-register")]),t._v("路由，注册用户("),a("code",[t._v("第一个注册的用户，默认为管理员")]),t._v(")，你将看到下面页面")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108193700352.png?x-oss-process=style/pictureProcess1",alt:"image-20211108193700352"}})]),t._v(" "),a("p",[t._v("输入正确信息点击注册")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108193812105.png?x-oss-process=style/pictureProcess1",alt:"image-20211108193812105"}})]),t._v(" "),a("p",[t._v("现在访问"),a("code",[t._v("/aurora-coze")]),t._v("页面")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211108193856216.png?x-oss-process=style/pictureProcess1",alt:"image-20211108193856216"}})]),t._v(" "),a("p",[t._v("恭喜你，设置成功")]),t._v(" "),a("h2",{attrs:{id:"主题中展示说说"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题中展示说说"}},[t._v("#")]),t._v(" 主题中展示说说")]),t._v(" "),a("p",[t._v("如果你设置成功，那么便可以将"),a("code",[t._v("CozeMood")]),t._v("组件放在你主题中的任何位置，这是插件注册的全局组件")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CozeMood")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@coze-success")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cozeSuccess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"插件配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件配置信息"}},[t._v("#")]),t._v(" 插件配置信息")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://aurora.xcye.xyz/plugin/coze/config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件配置信息"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);