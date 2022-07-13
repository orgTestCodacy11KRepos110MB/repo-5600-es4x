(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{374:function(t,a,e){"use strict";e.r(a);var n=e(13),s=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"eclipse-vert-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-vert-x"}},[t._v("#")]),t._v(" Eclipse Vert.x")]),t._v(" "),a("p",[t._v("Vert.x jest domyślnym modelem programowania używanym przez ES4X. Jednak w tym wydaniu jest tu kilka usprawnień, w\nporównaniu do standardowego "),a("a",{attrs:{href:"https://vertx.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vert.x APIs"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"wygenerowane-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wygenerowane-api"}},[t._v("#")]),t._v(" Wygenerowane API")]),t._v(" "),a("p",[t._v("Wszystkie API publikowane w "),a("code",[t._v("npm")]),t._v(" pod nazwami "),a("code",[t._v("@vertx")]),t._v(" i "),a("code",[t._v("@reactiverse")]),t._v(" są kodem wygenerowanym. Generacja kodu jest\npozwala na to, żeby wszystkie takie API mogły być używane przez użytkowników "),a("code",[t._v("JavaScript")]),t._v(" w takim formacie, jaki jest\ndla nich wygodny bez wpływu na wydajność aplikacji.")]),t._v(" "),a("p",[t._v("Interakcja z JVM dzieje się w obiektach "),a("code",[t._v("Javy")]),t._v(". Najważniejszą częścią jest wyciągnięcie klasy JVM do JS:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import the java.lang.Math class to be usable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// as a JS type in the script")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Math "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'javalang.Math'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Teraz można tak zrobić dla wszystkich API, jakie chcemy, jednak istnieje kilka ograniczeń, które ES4X próbuje rozwiązać:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Podatność na usterki")]),t._v(" - Korzystający musi dokładnie znać Java API i Typ, aby poprawnie użyć ich w JavaScript.")]),t._v(" "),a("li",[a("strong",[t._v("Brak możliwości zdefiniowania zależności")]),t._v(" - Jeśli potrzebujesz użyć API z innych modułów, importowanie klasy za\nklasą nie może definiować zależności między nimi.")]),t._v(" "),a("li",[a("strong",[t._v("Brak wsparcia IDE")]),t._v(" - Developer musi znać API zanim zacznie z niego korzystać, ponieważ IDE mu w tym nie pomoże.")])]),t._v(" "),a("p",[t._v("Generator ES4X rozwiązuje problemy poprzez stworzenie modułu "),a("code",[t._v("npm")]),t._v(" dla każdego modułu "),a("code",[t._v("vertx")]),t._v(" i wypisuje definicje dla\nkażdej klasy.")]),t._v(" "),a("p",[t._v("Każdy moduł ma następujące pliki:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("package.json")]),t._v(" - Definiuje zależności między modułami")]),t._v(" "),a("li",[a("code",[t._v("index.js")]),t._v(" - interfejsy commonjs API")]),t._v(" "),a("li",[a("code",[t._v("index.mjs")]),t._v(" - interfejsy ESM API")]),t._v(" "),a("li",[a("code",[t._v("index.d.ts")]),t._v(" - Pełne definicje typów dla interfejsów API")]),t._v(" "),a("li",[a("code",[t._v("enum.js")]),t._v(" - wyliczenia commonjs API")]),t._v(" "),a("li",[a("code",[t._v("enum.mjs")]),t._v(" - wyliczenia ESM API")]),t._v(" "),a("li",[a("code",[t._v("enum.d.ts")]),t._v(" - Pełne definicje typów dla wyliczeń API")]),t._v(" "),a("li",[a("code",[t._v("options.js")]),t._v(" - obiekty danych commonjs API.")]),t._v(" "),a("li",[a("code",[t._v("options.mjs")]),t._v(" - obiekty danych ESM API.")]),t._v(" "),a("li",[a("code",[t._v("options.d.ts")]),t._v(" - Pełne definicje typów dla obiektów danych API")])]),t._v(" "),a("p",[t._v("Wszystkie pliki "),a("code",[t._v("index")]),t._v(" będą uproszczały import klas JVM poprzez zamianę, np:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// without ES4X")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'io.vertx.ext.web.Router'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// with")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Router "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vertx/web'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Ta mała zmiana spowoduje, że IDE będą asystować w developmencie, jak również menadżerom pakietów w pobieraniu\npotrzebnych dependencji. Wszystkie pliki "),a("code",[t._v(".d.ts")]),t._v(" będą podpowiadać IDE w kwestii typów oraz będą wspierały proces\nuzupełniania kodu.")]),t._v(" "),a("h2",{attrs:{id:"promise-future"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-future"}},[t._v("#")]),t._v(" Promise/Future")]),t._v(" "),a("p",[t._v("Vert.x ma 2 typy:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("io.vertx.core.Future")])]),t._v(" "),a("li",[a("code",[t._v("io.vertx.core.Promise")])])]),t._v(" "),a("p",[t._v("Co dziwne, "),a("code",[t._v("Promise")]),t._v(" z Vert.x nie jest tym samym co "),a("code",[t._v("Future")]),t._v(" z JavaScript. W języku JavaScript:")]),t._v(" "),a("ul",[a("li",[t._v("Vert.x "),a("code",[t._v("Future")]),t._v(" === JavaScript "),a("code",[t._v("Promise Like (Thenable)")])]),t._v(" "),a("li",[t._v("Vert.x "),a("code",[t._v("Promise")]),t._v(" === JavaScript "),a("code",[t._v("Executor Function")])])]),t._v(" "),a("h2",{attrs:{id:"async-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[t._v("#")]),t._v(" async/await")]),t._v(" "),a("p",[a("code",[t._v("async/await")]),t._v(" jest wspierany bez żadnej konieczności kompilacji ze strony "),a("code",[t._v("GraalVM")]),t._v(". ES4X dodaje extra funkcjonalność do\ntypu "),a("code",[t._v("Future")]),t._v(" Vert.x. API, które zwracają Vert.x "),a("code",[t._v("Future")]),t._v(" mogą być użyte jako "),a("code",[t._v("Thenable")]),t._v(", to znaczy że:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using the Java API")]),t._v("\nvertx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHttpServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSuccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server ready!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFailure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server startup failed!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Może zostać użyte jako "),a("code",[t._v("Thenable")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" vertx\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHttpServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server Ready!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server startup failed!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("async/await")]),t._v(" działa nawet z pętlami, co powoduje, że praca z asynchronicznym kodem staje się prostsza, nawet podczas\nmieszania kodu Javy i JavaScript.")])]),t._v(" "),a("h2",{attrs:{id:"konwersja-typow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#konwersja-typow"}},[t._v("#")]),t._v(" Konwersja typów")]),t._v(" "),a("p",[t._v("Vert.x jest stworzony w "),a("code",[t._v("Javie")]),t._v(", jednak w "),a("code",[t._v("JavaScript")]),t._v(" nie musimy się martwić w takim stopniu jak tam. ES4X wykonuje\nkilka automatycznych konwersji:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Java")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("TypeScript")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("void")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("byte")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("short")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("long")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("float")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("double")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("char")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("byte[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("short[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("int[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("long[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("float[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("double[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("char[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Void")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("any")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Double")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Float")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Integer")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Long")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Short")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Char")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.String")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.CharSequence")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Boolean[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Double[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Float[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Integer[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Long[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Short[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Char[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.String[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.CharSequence[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Object[]")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("any[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Iterable")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("any[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BiConsumer")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, U extends any>(arg0: T, arg1: U) => void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BiFunction")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, U extends any, R extends any>(arg0: T, arg1: U) => R")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BinaryOperator")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T, arg1: T) => T")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BiPredicate")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, U extends any>(arg0: T, arg1: U) => boolean")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Consumer")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T) => void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, R extends any>(arg0: T) => R")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Predicate")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T) => boolean")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Supplier")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>() => T")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.UnaryOperator")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T) => T")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.Instant")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.LocalDate")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.LocalDateTime")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.ZonedDateTime")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Iterable<T>")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T>[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.Collection<T>")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T>[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.List<T>")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("<T>[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.Map<K, V>")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("{ [key: <K>]: <V> }")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);