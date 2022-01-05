(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{406:function(t,s,a){t.exports=a.p+"assets/img/debug.a2318191.png"},407:function(t,s,a){t.exports=a.p+"assets/img/vscode-debug.8f0f75df.png"},528:function(t,s,a){"use strict";a.r(s);var r=a(52),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"отладка"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#отладка"}},[t._v("#")]),t._v(" Отладка")]),t._v(" "),r("h2",{attrs:{id:"инструмент-исследования-chrome"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#инструмент-исследования-chrome"}},[t._v("#")]),t._v(" Инструмент исследования Chrome")]),t._v(" "),r("p",[t._v("Работая с "),r("a",{attrs:{href:"https://graalvm.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraalVM"),r("OutboundLink")],1),t._v(" или JDK с graalvm (JVMCI), запустите ваше приложение следующим образом:")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start -- -Dinspect"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("9229")]),t._v("\n")])])]),r("p",[t._v("Это запустит агента отладки для инструмента исследования Chrome на порту 9229, который может быть использован для сессии\nудаленной отладки из вашего браузера.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("Chrome devtools listening at port: 9229\nRunning: java ...\nDebugger listening on port 9229.\nTo start debugging, open the following URL in Chrome:\n    chrome-devtools://devtools/bundled/js_app.html?ws=127.0.0.1:9229/436e852b-329b5c44c3e\nServer listening at: http://localhost:8080/\n")])])]),r("p",[r("img",{attrs:{src:a(406),alt:"chrome-inspector"}})]),t._v(" "),r("p",[t._v("Вы сможете ставить точки останова, вести процесс отладки и т.д.")]),t._v(" "),r("h2",{attrs:{id:"отладка-из-vscode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#отладка-из-vscode"}},[t._v("#")]),t._v(" Отладка из VSCode")]),t._v(" "),r("p",[t._v("Использование инструментов разработки Chrome не является обязательным. Вы также можете вести отладку с помощью\n"),r("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code"),r("OutboundLink")],1),t._v(". Создайте конфигурацию для запуска:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("es4x vscode\n")])])]),r("p",[t._v("Вы получите файл "),r("code",[t._v("launcher.json")]),t._v(", похожий на следующий:")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.2.0"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"configurations"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Launch empty-project"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"launch"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cwd"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runtimeExecutable"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}/node_modules/.bin/es4x-launcher"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runtimeArgs"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Dinspect=5858"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5858")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outputCapture"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"std"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serverReadyAction"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pattern"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"started on port ([0-9]+)"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uriFormat"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:%s"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openExternally"')]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("Используйте его в своем инструменте отладки.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(407),alt:"vscode-chrome-inspector"}})]),t._v(" "),r("p",[t._v("Если вы отправите сообщение "),r("code",[t._v("Server started on port 8000")]),t._v(", оно будет перехвачено Visual Studio, и в браузере будет\nоткрыто окно.")])])}),[],!1,null,null,null);s.default=e.exports}}]);