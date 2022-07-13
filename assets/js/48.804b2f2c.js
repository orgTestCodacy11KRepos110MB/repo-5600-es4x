(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{327:function(a,e,s){"use strict";s.r(e);var t=s(13),n=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"instalacion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instalacion"}},[a._v("#")]),a._v(" Instalacion")]),a._v(" "),e("p",[a._v("Asumiendo que ya has instalado "),e("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js"),e("OutboundLink")],1),a._v(", necesitaras una JVM funcionando. Los requisitos son\n("),e("a",{attrs:{href:"https://adoptopenjdk.net/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java"),e("OutboundLink")],1),a._v(" o "),e("a",{attrs:{href:"http://www.graalvm.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("GraalVM"),e("OutboundLink")],1),a._v(").")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ java -version\nopenjdk version "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.8.0_265"')]),a._v("\nOpenJDK Runtime Environment "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_265-8u265-b01-0ubuntu2~20.04-b01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nOpenJDK "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("-Bit Server VM "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("25.265")]),a._v("-b01, mixed mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("Se ver\nSi ves una salida similar, esto significa que tu sistema tiene actualmente "),e("code",[a._v("java")]),a._v(" "),e("strong",[a._v("8")]),a._v(", lo que no es la mejor opcion\nya que no se beneficia del motor de alto rendimiento que "),e("code",[a._v("es4x")]),a._v(" utiliza.")]),a._v(" "),e("h2",{attrs:{id:"graalvm-openjdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#graalvm-openjdk"}},[a._v("#")]),a._v(" GraalVM/OpenJDK")]),a._v(" "),e("p",[a._v("Para poder tener un runtime compatible se recomienda instalar un runtime superior (por ejemplo utilizando\n"),e("a",{attrs:{href:"https://github.com/shyiko/jabba",target:"_blank",rel:"noopener noreferrer"}},[a._v("jabba"),e("OutboundLink")],1),a._v("). Para instrucciones instalando "),e("code",[a._v("jabba")]),a._v(", por favor sigue el manual oficial\n"),e("a",{attrs:{href:"https://github.com/shyiko/jabba#installation",target:"_blank",rel:"noopener noreferrer"}},[a._v("manual"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Utilizando "),e("code",[a._v("jabba")]),a._v(" puedes instalar "),e("code",[a._v("openjdk 11")]),a._v(" y/o "),e("code",[a._v("graalvm")]),a._v(" (una vez) como:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jabba "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" openjdk@1.11.0\njabba "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" graalvm@20.2.0\n")])])]),e("p",[a._v("Y despues cambiar al runtime preferido ejecutando:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jabba use openjdk@1.11 "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# O jabba use graalvm@20.2")]),a._v("\n")])])])]),a._v(" "),e("p",[a._v("Una vez que una JVM valida es instalada puedes opcionalmente instalar la herramienta de desarrollo para gestionar proyectos.")]),a._v(" "),e("h2",{attrs:{id:"herramientas-para-proyectos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#herramientas-para-proyectos"}},[a._v("#")]),a._v(" Herramientas Para Proyectos")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g @es4x/create "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# O yarn global add @es4x/create")]),a._v("\n")])])]),e("p",[a._v("El paquete instalara el comando "),e("code",[a._v("es4x")]),a._v(" globalmente que puede ser usado para crear proyectos y hacer otras tareas. Para\nsaber mas de esta herramienta:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("es4x --help\n")])])]),e("h3",{attrs:{id:"usando-npx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usando-npx"}},[a._v("#")]),a._v(" Usando NPX")]),a._v(" "),e("p",[a._v("El mismo paquete puede ser utilizado como una unica operacion con "),e("code",[a._v("npx")]),a._v(". En este caso consultalo asi:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("npx @es4x/create --help\n")])])]),e("h2",{attrs:{id:"paquete-os"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#paquete-os"}},[a._v("#")]),a._v(" Paquete OS")]),a._v(" "),e("p",[a._v("Cuando trabajas con ambientes CI con un numero limitado de paquetes, el gestor de paquetes puede ser instalado\ndescomprimiendo el archivo tar / zip empaquetado previamente.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ES4X")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0.9.0'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sL "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  https://github.com/reactiverse/es4x/releases/download/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ES4X")]),a._v("/es4x-pm-"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ES4X")]),a._v("-bin.tar.gz "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zx --strip-components"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" -C /usr/local\n")])])]),e("p",[a._v("Para sistemas operativos Windows lo mismo se puede realizar usando el archivo "),e("code",[a._v("zip")]),a._v(" en su lugar.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Utilizar "),e("code",[a._v("npm")]),a._v(" deberia ser la manera preferida de instalar porque permite actualizaciones faciles y es portable\na diferentes "),e("em",[a._v("Sistemas Operativos")])])]),a._v(" "),e("h2",{attrs:{id:"verifica"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verifica"}},[a._v("#")]),a._v(" Verifica")]),a._v(" "),e("p",[a._v("Ahora deberias tener el comando "),e("code",[a._v("es4x")]),a._v(" disponible en tu path, lo puedes comprobar ejecutando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ es4x --help\n\nUsage: java -jar /usr/local/bin/es4x-bin.jar [COMMAND] [OPTIONS]\n            [arg...]\n\nCommands:\n    bare         Creates a bare instance of vert.x.\n    dockerfile   Creates a generic Dockerfile for building and deploying the\n                 current project.\n    project      Initializes the 'package.json' to work with ES4X.\n    install      Installs required jars from maven to 'node_modules'.\n    list         List vert.x applications\n    run          Runs a JS script called <main-verticle> in its own instance of\n                 vert.x.\n    start        Start a vert.x application in background\n    stop         Stop a vert.x application\n    version      Displays the version.\n\nRun 'java -jar /usr/local/bin/es4x-bin.jar COMMAND --help' for\nmore information on a command.\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("Para la mejor experiencia y rendimiento por favor instala "),e("a",{attrs:{href:"https://www.graalvm.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("GraalVM"),e("OutboundLink")],1),a._v(". Mientras trabajes con JDK\nstandard, utilizar Java < 11 lo ejecutara en modo "),e("code",[a._v("interpretado")]),a._v(" lo que no es bueno en rendimiento o recomendado en\nproduccion.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);