(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{299:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"graalvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graalvm"}},[t._v("#")]),t._v(" GraalVM")]),t._v(" "),a("p",[t._v("ES4X uses GraalVM, however the same code will run either in "),a("strong",[t._v("interpreted")]),t._v(" mode on Java 8, 9, 10 and OpenJ9.")]),t._v(" "),a("p",[t._v("For JDK >= 11 (with JVMCI support) or GraalVM ES4X runs in "),a("strong",[t._v("compiled")]),t._v(" mode.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("In order words, please use Java >= 11 or GraalVM.")])]),t._v(" "),a("p",[t._v("There are benefits on using GraalJS namely the updated language support >=ES6 and support out of the box for generators,\npromises, etc....")]),t._v(" "),a("h2",{attrs:{id:"differences-to-nashorn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#differences-to-nashorn"}},[t._v("#")]),t._v(" Differences to Nashorn")]),t._v(" "),a("p",[t._v("Unlike "),a("code",[t._v("Nashorn")]),t._v(", "),a("code",[t._v("GraalJS")]),t._v(" "),a("em",[t._v("java")]),t._v(" interop follows the "),a("strong",[t._v("exact")]),t._v(" class/method name from Java. For example, the usage of\nproperty names to refer to getters and setters, must use the "),a("em",[t._v("getter")]),t._v(" and "),a("em",[t._v("setter")]),t._v(". For example:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("When using this Java Object from Graal, this will not work:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get the name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// FAIL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set the name")]),t._v("\nhello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Paulo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// FAIL")]),t._v("\n")])])]),a("p",[t._v("This is not valid in Graal and should be:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get the name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set the name")]),t._v("\nhello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Paulo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"threading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#threading"}},[t._v("#")]),t._v(" Threading")]),t._v(" "),a("p",[t._v("GraalJS is very strict with only a single thread on the JS context at a time. When working with only Asynchronous Vert.x\nAPIs this shall not be an issue. However other libraries can cause problems. To avoid this limitation, it is advised to\nuse the "),a("code",[t._v("Worker")]),t._v(" API or the "),a("code",[t._v("EventBus")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("GraalJS will not allow multi thread access to the same script context. If there is a need to work with multiple\nthreads, then consider looking at the "),a("a",{attrs:{href:"./worker"}},[t._v("Worker API")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"native-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#native-images"}},[t._v("#")]),t._v(" Native Images")]),t._v(" "),a("p",[t._v("Currently you cannot generate native images with ES4X, the limitation is because the static analysis of the AOT compiler\nwill not take in consideration the java code invoked from the script (so classes won't be available), plus the fact that\nthe compiler has no support for jvm interop at runtime.")]),t._v(" "),a("p",[t._v("There is work in progress in this area so it might be possible in the future.")])])}),[],!1,null,null,null);a.default=n.exports}}]);