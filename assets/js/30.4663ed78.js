(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{419:function(s,t,a){"use strict";a.r(t);var v=a(16),e=Object(v.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"aurora主题bug记录和优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aurora主题bug记录和优化"}},[s._v("#")]),s._v(" Aurora主题bug记录和优化")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("这里记录的是每一个版本所遇到的bug，如果还存在其他的未知bug，可以在此页面进行评论或者到github中提交issue")])]),s._v(" "),a("h2",{attrs:{id:"v1-6-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-6-2"}},[s._v("#")]),s._v(" v1.6.2")]),s._v(" "),a("h3",{attrs:{id:"bug-fixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[s._v("#")]),s._v(" Bug Fixes")]),s._v(" "),a("ul",[a("li",[s._v("修复首页文章列表一级标题，二级标题，三级标题等，出现#符号问题")]),s._v(" "),a("li",[s._v("修复友情链接页面图片和描述不匹配问题")]),s._v(" "),a("li",[s._v("修复关于页面，社交图片中，需要展示二维码等图片，部分被隐藏的问题")])]),s._v(" "),a("h3",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[s._v("#")]),s._v(" Features")]),s._v(" "),a("ul",[a("li",[s._v("主题不再提供/photo路由，改由coze插件提供，该/photo使用说说的图片数据")]),s._v(" "),a("li",[s._v("主题所有的文本配置，比如公告，友情链接的message，都支持html，高度自定义")]),s._v(" "),a("li",[s._v("主题支持自定义导航图标，详细看文档aurora.xcye.xyz")])]),s._v(" "),a("h2",{attrs:{id:"v1-6-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-6-1"}},[s._v("#")]),s._v(" v1.6.1")]),s._v(" "),a("h3",{attrs:{id:"bug-fixes-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-2"}},[s._v("#")]),s._v(" Bug Fixes")]),s._v(" "),a("ul",[a("li",[s._v("修复coze插件默认注册界面，输入框不对齐情况")]),s._v(" "),a("li",[s._v("修复leanCloud中有Talk类，但是没有数据情况下，不能编写说说问题")]),s._v(" "),a("li",[s._v("修复快速点赞，数据加减错误问题")]),s._v(" "),a("li",[s._v("修复侧边栏目录，不能获取到标题url问题")]),s._v(" "),a("li",[s._v("修复文章链接在在新标签中打开，图片失效问题")])]),s._v(" "),a("h3",{attrs:{id:"build-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-system"}},[s._v("#")]),s._v(" Build System")]),s._v(" "),a("ul",[a("li",[s._v("把主题文件夹移到docs同级，原来的docs/.vuepress/theme还存在，但是代码不在改变")])]),s._v(" "),a("h3",{attrs:{id:"features-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features-2"}},[s._v("#")]),s._v(" Features")]),s._v(" "),a("ul",[a("li",[s._v("使用coze插件可以自定义注册，登录，登出等，除了默认提供的插件，额外提供的一个全局组件")]),s._v(" "),a("li",[s._v("其他用户也可以在你博客发布说说，但需要允许，默认关闭")]),s._v(" "),a("li",[s._v("说说功能使用插件实现")])]),s._v(" "),a("h3",{attrs:{id:"breaking-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[s._v("#")]),s._v(" BREAKING CHANGES")]),s._v(" "),a("p",[s._v("主题的目录被改变，如果你是以前克隆仓库的，需要克隆最新版，并且主题github仓库移到vuepress-aurora组织下")]),s._v(" "),a("h2",{attrs:{id:"v1-5-4-期望版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-5-4-期望版本"}},[s._v("#")]),s._v(" v1.5.4-期望版本")]),s._v(" "),a("ul",[a("li",[s._v("Feature")]),s._v(" "),a("li",[s._v("[ ] 支持在线编写说说功能")])]),s._v(" "),a("h2",{attrs:{id:"v1-5-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-5-3"}},[s._v("#")]),s._v(" v1.5.3")]),s._v(" "),a("h3",{attrs:{id:"未解决bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未解决bug"}},[s._v("#")]),s._v(" 未解决bug")]),s._v(" "),a("ul",[a("li",[s._v("[x] 文章目录，如果有四级标题，滚动的时候，样式会失效")]),s._v(" "),a("li",[s._v("[x] 文章目录，点击某个二级标题，三级标题，会出现不会跳转到该标题附近")]),s._v(" "),a("li",[s._v("[ ] 全局组件"),a("code",[s._v("AuroraGlobal.vue")]),s._v("存在滚动动画问题")])]),s._v(" "),a("h3",{attrs:{id:"需优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需优化"}},[s._v("#")]),s._v(" 需优化")]),s._v(" "),a("ul",[a("li",[s._v("[x] 顶部导航栏文字字体颜色不对")])]),s._v(" "),a("h3",{attrs:{id:"解决的bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决的bug"}},[s._v("#")]),s._v(" 解决的bug")]),s._v(" "),a("ul",[a("li",[s._v("[x] 修复全局组件"),a("code",[s._v("AuroraGlobal.vue")]),s._v("组件样式")]),s._v(" "),a("li",[s._v("[x] 修复"),a("code",[s._v("safari")]),s._v("浏览器侧边栏模糊")]),s._v(" "),a("li",[s._v("[x] 修复"),a("code",[s._v("/link")]),s._v("友情链接页面，logo与url不对应问题")]),s._v(" "),a("li",[s._v("[x] 修复标签分页")])]),s._v(" "),a("h2",{attrs:{id:"v1-3-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-3-3"}},[s._v("#")]),s._v(" v1.3.3")]),s._v(" "),a("p",[s._v("该版本为部分bug解决和功能增加")]),s._v(" "),a("p",[s._v("详细请查看"),a("a",{attrs:{href:"https://github.com/qsyyke/vuepress-theme-aurora/releases/tag/v1.3.3"}},[s._v("V1.3.3")])]),s._v(" "),a("p",[s._v("从该版本开始，主题commit message将完全按照"),a("code",[s._v("angular")]),s._v("规范进行提交")]),s._v(" "),a("h2",{attrs:{id:"v1-3-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-3-2"}},[s._v("#")]),s._v(" v1.3.2")]),s._v(" "),a("p",[s._v("该版本目前已知的bug有")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("1.运行"),a("code",[s._v("npm run build")]),s._v("命令，当build成功之后，并不会自动退出，需要手动"),a("code",[s._v("ctrl c")]),s._v("才能退出build过程，如果你会配置"),a("code",[s._v("webpack")]),s._v("，应该可以解决这个问题")])]),s._v(" "),a("li",[a("p",[s._v("2.站点在"),a("code",[s._v("ipad")]),s._v("上，或者一些平板上，会出现logo和文字被挤在一起的情况，像下图这样")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("查看")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211013103447635.png?x-oss-process=style/pictureProcess1",alt:"image-20211013103447635"}})])])]),s._v(" "),a("li",[a("p",[s._v("3.在"),a("code",[s._v("ipad")]),s._v("或者某些电脑上，文章等顶部图片会显得特别大("),a("code",[s._v("顶部图片高度使用vh，所以会出现这个问题")]),s._v(")，这个问题主要存在于部分iPad和电脑")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("view")]),s._v(" "),a("p",[s._v("​\t"),a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211013104423679.png?x-oss-process=style/pictureProcess1",alt:"image-20211013104423679"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211013104450699.png?x-oss-process=style/pictureProcess1",alt:"image-20211013104450699"}})])])]),s._v(" "),a("li",[a("p",[s._v("4.在某些ipad或者电脑上，首页文章图片会显得很小，影响美观，像下图一样")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("view")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211013104220662.png?x-oss-process=style/pictureProcess1",alt:"image-20211013104220662"}})])])]),s._v(" "),a("li",[a("p",[s._v("5.友情链接，标签等页面，刷新会出现404，对于相册页面，如果进入该页面，在刷新，会出现404问题("),a("code",[s._v("这些页面使用动态路由，所以就出现这种情况")]),s._v(")")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("view")]),s._v(" "),a("p",[s._v("​\t"),a("img",{attrs:{src:"https://ooszy.cco.vin/img/blog-note/image-20211013104857123.png?x-oss-process=style/pictureProcess1",alt:"image-20211013104857123"}})])])])]),s._v(" "),a("p",[s._v("​")]),s._v(" "),a("ul",[a("li",[s._v("6.在火狐浏览器上访问站点，首页侧边栏，和文章列表，会出现滚动条")])]),s._v(" "),a("h2",{attrs:{id:"提交bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交bug"}},[s._v("#")]),s._v(" 提交bug")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你在使用此主题的过程中，还遇到其他的bug，那么欢迎在此页面留言或者到github提交issue")])]),s._v(" "),a("p",[a("a",{attrs:{target:"_blank",href:"https://github.com/qsyyke/vuepress-theme-aurora/issues"}},[s._v("Github Issue")])])])}),[],!1,null,null,null);t.default=e.exports}}]);