(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{413:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hola-mundo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hola-mundo"}},[s._v("#")]),s._v(" Hola Mundo")]),s._v(" "),a("p",[s._v("La aplicacion mas sencilla que podemos crear es un 'Hola mundo' en el archivo "),a("code",[s._v("hello-es4x.js")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("vertx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createHttpServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("requestHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hola mundo ES4X!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("Ahora puedes ejecutar esta aplicacion usando:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ es4x hello-es4x.js\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("En sistemas UNIX, los scripts se pueden hacer ejecutables y puedes usar "),a("code",[s._v("#!/usr/bin/env es4x")]),s._v(" para hacerlos\nauto ejecutables. Recuerda de todos modos que las dependencias deberian estar listas en el directorio de trabajo.")])]),s._v(" "),a("p",[s._v("En una segunda terminal:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" localhost:8080\nHola mundo ES4X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("Ejecutar scripts utilizando el comando "),a("code",[s._v("es4x")]),s._v(" directamente puede ser util para scripts basicos que no tienen dependencias\na parte de "),a("code",[s._v("vertx")]),s._v(". Para aplicaciones mas complejas se deberia utilizar un proyecto y un gestor de paquetes.")])]),s._v(" "),a("h2",{attrs:{id:"crea-un-proyecto-nuevo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crea-un-proyecto-nuevo"}},[s._v("#")]),s._v(" Crea un proyecto nuevo")]),s._v(" "),a("p",[s._v("ES4X utiliza "),a("code",[s._v("npm")]),s._v(" como la herramienta de gestion del proyecto, para crear un proyecto nuevo se provee el siguiente comando:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Crea un directorio del proyecto")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" myapp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cambia al directorio del proyecto")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" myapp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Crea el proyecto")]),s._v("\nes4x project\n")])])]),a("p",[s._v("Un proyecto es un archivo "),a("code",[s._v("package.json")]),s._v(" con algunas cosas pre-configuradas:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is a ES4X empty project."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myapp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es4x test index.test.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postinstall"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es4x install"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es4x"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@es4x/create"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@vertx/unit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@vertx/core"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Para proyectos "),a("code",[s._v("TypeScript")]),s._v(", ejecuta la herramienta para crear proyectos con: "),a("code",[s._v("es4x project --ts")])])]),s._v(" "),a("p",[s._v("El gancho "),a("code",[s._v("post-install")]),s._v(" delegara en es4x para resolver todos las dependencias "),a("code",[s._v("maven")]),s._v(" y crear el script "),a("code",[s._v("es4x-launcher")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("El script "),a("code",[s._v("es4x-launcher")]),s._v(" se asegurara de que la aplicacion se ejecuta utilizando es4x y no "),a("code",[s._v("nodejs")]),s._v(". Este script puede\nutilizarse en produccion, donde se puede evitar el paquete "),a("code",[s._v("@es4x/create")]),s._v(".")])]),s._v(" "),a("h3",{attrs:{id:"create-vertx-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-vertx-app"}},[s._v("#")]),s._v(" create-vertx-app")]),s._v(" "),a("p",[s._v("Con "),a("code",[s._v("create-vertx-app")]),s._v(" puedes arrancar rapidamente tu aplicacion ES4X TypeScript o JavaScript con unas cuantas teclas.\nSi GUI es la forma preferida de crear aplicaciones, el mismo generador puede ser utilizado como\n"),a("a",{attrs:{href:"https://vertx-starter.jetdrone.xyz/#npm",target:"_blank",rel:"noopener noreferrer"}},[s._v("PWA"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("asciinema",{attrs:{src:s.$withBase("/cast/es4x-ts.cast"),cols:"80",rows:"24"}}),s._v(" "),a("h2",{attrs:{id:"anadir-dependencias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anadir-dependencias"}},[s._v("#")]),s._v(" Añadir dependencias")]),s._v(" "),a("p",[s._v("Añadir dependencias no es diferente de como los desarrolladores "),a("code",[s._v("JavaScript")]),s._v(" estan acostumbrados:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# añade otras dependencias...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @vertx/unit --save-dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# O yarn add -D @vertx/unit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @vertx/web --save-prod "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# O yarn add @vertx/web")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Activara la descarga de dependencias npm + java")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("h2",{attrs:{id:"coding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding"}},[s._v("#")]),s._v(" Coding")]),s._v(" "),a("p",[s._v("Con la configuracion del proyecto completa, es hora de escribir algo de codigo. Como se describio antes, ES4X utiliza definiciones\n"),a("code",[s._v("TypeScript")]),s._v(" para mejorar la experiencia de desarrollo con codigo auto completado y comprobaciones de codigo opcionales.")]),s._v(" "),a("p",[s._v("Con todas las aplicaciones ES4X hay un objeto global "),a("code",[s._v("vertx")]),s._v(" que es la instancia configurada de "),a("em",[s._v("vert.x")]),s._v(" que se utiliza\nen la aplicacion.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Para conseguir codigo auto completado en "),a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Visual Studio Code"),a("OutboundLink")],1),s._v(" la primera linea en tu script principal\ndeberia ser:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference types="es4x" />')]),s._v("\n")])])])]),s._v(" "),a("p",[s._v("La aplicacion hello "),a("code",[s._v("index.js")]),s._v(" deberia ser:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference types="es4x" />')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @ts-check")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Router "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vertx/web'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("router")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vertx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Saludos desde Vert.x Web!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nvertx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createHttpServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("requestHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Server escuchando: http://localhost:8080/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v('Esta app arranca el servidor y escucha en el puerto 8080 para las conexiones. El app responde con "'),a("code",[s._v("Saludos desde Vert.x Web!")]),s._v('"\npara las peticiones en la URL principal ('),a("code",[s._v("/")]),s._v(") o ruta. Para cualquier otro camino, respondera con un "),a("strong",[s._v("404 Not Found")]),s._v(".")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("La sintaxis del modulo ES6 puede ser utilizada en archivos "),a("code",[s._v(".js")]),s._v(". ES4X los traduce a declaraciones "),a("code",[s._v("commonjs")]),s._v(" "),a("code",[s._v("require()")]),s._v("\nsin embrago "),a("code",[s._v("exports")]),s._v(" no seran traducidos. Esta funcion es solo para ayudar a trabajar con IDEs que pueden auto importar\ntal como "),a("code",[s._v("Visual Studio Code")]),s._v(".")])]),s._v(" "),a("h2",{attrs:{id:"soporte-mjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#soporte-mjs"}},[s._v("#")]),s._v(" Soporte MJS")]),s._v(" "),a("p",[s._v("ES4X tiene archivos "),a("code",[s._v(".mjs")]),s._v(" disponibles. Es este caso la resolucion de los modulos no utilizara "),a("code",[s._v("commonjs")]),s._v(" "),a("code",[s._v("require()")]),s._v(" pero\nusara el cargador nativo de modulos de graaljs.")]),s._v(" "),a("p",[s._v("Con soporte graaljs para "),a("code",[s._v(".mjs")]),s._v(" tanto "),a("code",[s._v("import")]),s._v(" como "),a("code",[s._v("export")]),s._v(" funcionaran como han sido diseñados en la especificacion ES6.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Para permitir soporte "),a("code",[s._v(".mjs")]),s._v(" utiliza la extension "),a("code",[s._v(".mjs")]),s._v(" en tus archivos "),a("code",[s._v("JavaScript, o arranca tu aplicacion con")]),s._v("-Desm`.")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("No es posible mezclar "),a("code",[s._v("commonjs")]),s._v(" con "),a("code",[s._v("esm")]),s._v(" en el mismo proyecto. Si no estas seguro, usa "),a("code",[s._v("commonjs")]),s._v(".")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);