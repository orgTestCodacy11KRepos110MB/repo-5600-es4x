(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{381:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hello-world"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[t._v("#")]),t._v(" Hello World")]),t._v(" "),s("p",[t._v("Najprostszą aplikacją jaką możemy stworzyć jest "),s("code",[t._v("Hello World")]),t._v(", który umieścimy w pliku "),s("code",[t._v("hello-es4x.js")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("vertx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHttpServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello ES4X world!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Teraz możesz uruchomić aplikację wywołując:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ es4x hello-es4x.js\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("W systemach typu UNIX, skrypty mogą być wykonywalne i dzięki użyciu shebanga "),s("code",[t._v("#!/usr/bin/env es4x")]),t._v(" mogą być uruchamiane\nautomatycznie. Jednak taka dependencja powinna być wówczas obecna w katalogu bieżącym.")])]),t._v(" "),s("p",[t._v("I w drugim terminalu wpisując:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost:8080\nHello ES4X world"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Wywoływanie skryptów korzystających z komendy "),s("code",[t._v("es4x")]),t._v(" może być przydatne w małych skryptach, nie posiadających innych\ndependencji niż "),s("code",[t._v("vertx")]),t._v(". W przypadku bardziej złożonych aplikacji korzystaj z menadżera projektu lub z menadżera pakietów.")])]),t._v(" "),s("h2",{attrs:{id:"tworzenie-nowego-projektu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tworzenie-nowego-projektu"}},[t._v("#")]),t._v(" Tworzenie nowego projektu")]),t._v(" "),s("p",[t._v("ES4X używa "),s("code",[t._v("npm")]),t._v(" jako menadżera pakietów. Aby stworzyć nowy projekt można użyć komendy przez niego zapewnionej:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stworzenie folderu z projektem")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" myapp\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wejście do folderu z projektem")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" myapp\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stworzenie projektu")]),t._v("\nes4x project\n")])])]),s("p",[t._v("Podstawowa konfiguracja projektu znajduje się w pliku "),s("code",[t._v("package.json")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a ES4X empty project."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myapp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es4x test index.test.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postinstall"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es4x install"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es4x"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@es4x/create"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@vertx/unit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@vertx/core"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keywords"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"license"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ISC"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Dla projektów tworzonych za pomocą "),s("code",[t._v("TypeScript")]),t._v(" uruchom narzędzie do tworzenia projektu wywołując: "),s("code",[t._v("es4x project --ts")])])]),t._v(" "),s("p",[s("code",[t._v("post-install")]),t._v(" hook odwoła się do es4x, aby rozwiązać wszystkie "),s("code",[t._v("maven dependencies")]),t._v(" i stworzyć skrypt "),s("code",[t._v("es4x-launcher")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Skrypt "),s("code",[t._v("es4x-launcher")]),t._v(" zapewni, że aplikacja będzie korzystać z es4x a nie z "),s("code",[t._v("nodejs")]),t._v(". Skrypt może być użyty na\nprodukcji, gdzie pakiet "),s("code",[t._v("@es4x/create")]),t._v(" może być pominięty.")])]),t._v(" "),s("h3",{attrs:{id:"create-vertx-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-vertx-app"}},[t._v("#")]),t._v(" create-vertx-app")]),t._v(" "),s("p",[t._v("Używając "),s("code",[t._v("create-vertx-app")]),t._v(" możesz szybko uruchomić swoją aplikację ES4X TypeScript lub JavaScript używając zaledwie\nkilku przycisków. Jeśli wolisz korzystać z GUI przy tworzeniu aplikacji możesz skorzystać z tego samego generatora, jak\nprzy "),s("a",{attrs:{href:"https://vertx-starter.jetdrone.xyz/#npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("PWA"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("asciinema",{attrs:{src:t.$withBase("/cast/es4x-ts.cast"),cols:"80",rows:"24"}}),t._v(" "),s("h2",{attrs:{id:"dodawanie-dependencji"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dodawanie-dependencji"}},[t._v("#")]),t._v(" Dodawanie dependencji")]),t._v(" "),s("p",[t._v("Dodawanie dependencji nie różni się od sposobu w jaki robią to deweloperzy "),s("code",[t._v("JavaScript")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dodanie innych dependencji...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @vertx/unit --save-dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR yarn add -D @vertx/unit")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @vertx/web --save-prod "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR yarn add @vertx/web")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# spowoduje pobranie dependencji npm + java")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h2",{attrs:{id:"kodowanie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kodowanie"}},[t._v("#")]),t._v(" Kodowanie")]),t._v(" "),s("p",[t._v("Po skończonym setupie projektu czas na napisanie kodu. Zgodnie z tym, co zostało powiedziane wcześniej, ES4X używa\ndefinicji "),s("code",[t._v("TypeScripta")]),t._v(", aby zapewnić lepsze doświadczenia developerom za pomocą uzupełniania kodu i opcjonalnego\nsprawdzania poprawności typów.")]),t._v(" "),s("p",[t._v("Dla wszystkich aplikacji ES4X istnieje globalny obiekt "),s("code",[t._v("vertx")]),t._v(", który jest skonfigurowaną instancją "),s("em",[t._v("vert.x")]),t._v(" i którą\nmożna użyć w aplikacji.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Aby móc korzystać z uzupełniania kodu w "),s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code"),s("OutboundLink")],1),t._v(" pierwsza linijka kodu w\ngłównym skrypcie powinna brzmieć:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="es4x" />')]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("Aplikacja powitalna w pliku "),s("code",[t._v("index.js")]),t._v(" powinna wyglądać następująco:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="es4x" />')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @ts-check")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Router "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vertx/web'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello from Vert.x Web!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nvertx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHttpServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server listening at: http://localhost:8080/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v('Powyższy program wystartuje serwer, który będzie nasłuchiwał połączeń na porcie 8080. Program będzie odpowiadał "'),s("code",[t._v("Hello from Vert.x Web!")]),t._v('" na zapytania dla root URL ('),s("code",[t._v("/")]),t._v(") lub route. Dla każdej innej ścieżki będzie odpowiadał "),s("strong",[t._v("404 Not\nFound")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("W plikach "),s("code",[t._v(".js")]),t._v(" można korzystać ze składni ES6. ES4X przetłumaczy to na polecenia "),s("code",[t._v("require()")]),t._v(" w "),s("code",[t._v("commonjs")]),t._v(". Polecenia\n"),s("code",[t._v("exports")]),t._v(" niestety nie zostaną przetłumaczone. To udogodnienie będzie działało wyłącznie w IDE mającym funkcję auto\nimportu takim jak "),s("code",[t._v("Visual Studio Code")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"wsparcie-mjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wsparcie-mjs"}},[t._v("#")]),t._v(" Wsparcie MJS")]),t._v(" "),s("p",[t._v("ES4X wspiera też pliku o rozszerzeniu "),s("code",[t._v(".mjs")]),t._v(". W takim przypadku nie zostanie użyty "),s("code",[t._v("require()")]),t._v(" z "),s("code",[t._v("commonjs")]),t._v(", lecz\ngraaljs native module loader.")]),t._v(" "),s("p",[t._v("Graaljs wspiera zarówno "),s("code",[t._v("import")]),t._v(" jak i "),s("code",[t._v("export")]),t._v(" w plikach o rozszerzeniu "),s("code",[t._v(".mjs")]),t._v(", powodując, że będą one działały jak w\nspecyfikacji ES6.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Aby włączyć wsparcie dla "),s("code",[t._v(".mjs")]),t._v(" skorzystaj z rozszerzenia "),s("code",[t._v(".mjs")]),t._v(" w plikach "),s("code",[t._v("JavaScript")]),t._v(" lub uruchom swoją aplikację z\nflagą "),s("code",[t._v("-Desm")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Niemożliwym jest mieszanie "),s("code",[t._v("commonjs")]),t._v(" oraz "),s("code",[t._v("esm")]),t._v(" w ramach jednego projektu. Jeśli nie jesteś pewny której specyfikacji\npowinieneś użyć, korzystaj z 'commonjs'.")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);