(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{417:function(a,s,e){"use strict";e.r(s);var t=e(42),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"запуск"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#запуск"}},[a._v("#")]),a._v(" Запуск")]),a._v(" "),e("p",[a._v("Приложения ES4X должны создать "),e("code",[a._v("es4x-launcher")]),a._v(" во время фазы установки "),e("code",[a._v("npm")]),a._v(". Если лаунчер не существует, запустите:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# OR yarn")]),a._v("\n")])])]),e("p",[a._v("::: Заметка\nЛаунчер должен быть создан в "),e("code",[a._v("node_modules/.bin/es4x-lancher.*")]),a._v(".\n:::")]),a._v(" "),e("p",[a._v("Дальнейший запуск приложения очень прост:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" start "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# OR yarn start")]),a._v("\n")])])]),e("p",[a._v("Данная команда заменяет стандартную операцию "),e("code",[a._v("npm")]),a._v(". Запуская приложение "),e("em",[a._v("Hello World")]),a._v(" на среде выполнения JVM, вы\nполучите следующий вывод:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("Server listening at: http://localhost:8080/\nSucceeded "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" deploying verticle\n")])])]),e("p",[a._v("Теперь вы можете взаимодействовать с приложением через браузер или клиент http:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" localhost:8080\n\nHello from Vert.x Web"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])]),e("h2",{attrs:{id:"запуск-без-npm-yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#запуск-без-npm-yarn"}},[a._v("#")]),a._v(" Запуск без npm/yarn")]),a._v(" "),e("p",[a._v("При развертывании приложения на продакшне использование менеджера пакетов "),e("strong",[a._v("не")]),a._v(" выглядит здраво. В таких случаях при\nзапуске приложения не следует использовать "),e("code",[a._v("npm")]),a._v("/"),e("code",[a._v("yarn")]),a._v(", а следует использовать:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./node_modules/.bin/es4x-launcher\n")])])]),e("p",[a._v("::: Заметка\nМожно настроить запуск приложения, подробности можно найти тут:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./node_modules/.bin/es4x-launcher -help\n")])])]),e("p",[a._v(":::")]),a._v(" "),e("h2",{attrs:{id:"повышение-количества-verticle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#повышение-количества-verticle"}},[a._v("#")]),a._v(" Повышение количества verticle")]),a._v(" "),e("p",[a._v("Повышение количества verticle (что в некоторых случаях может повысить производительность) делается следующим образом:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Нужное количество verticle:")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("N")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  ./node_modules/.bin/es4x-launcher -instances "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$N")]),a._v("\n")])])]),e("p",[a._v("::: Заметка\nОбычно повышение числа verticle до числа ядер, умноженного на 2, дает наилучшую производительность.\n:::")]),a._v(" "),e("h2",{attrs:{id:"кластеризация"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#кластеризация"}},[a._v("#")]),a._v(" Кластеризация")]),a._v(" "),e("p",[a._v("Как и с количеством verticle, приложение ES4X может быть очень просто кластеризовано:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./node_modules/.bin/es4x-launcher -cluster\n")])])]),e("p",[a._v("Чтобы узнать больше о кластеризации, советуем ознакомиться с документацией "),e("a",{attrs:{href:"https://www.vertx.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("vert.x"),e("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);