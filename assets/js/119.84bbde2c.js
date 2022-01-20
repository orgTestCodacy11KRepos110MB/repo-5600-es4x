(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{560:function(s,t,a){"use strict";a.r(t);var e=a(56),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"упаковка"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#упаковка"}},[s._v("#")]),s._v(" Упаковка")]),s._v(" "),a("p",[s._v("Упаковка приложений должна следовать стилю "),a("code",[s._v("NPM")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" pack\n")])])]),a("p",[a("a",{attrs:{href:"https://docs.npmjs.com/cli/pack",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm pack"),a("OutboundLink")],1),s._v(" создаст "),a("code",[s._v("TGZ")]),s._v(" с вашим приложением, который можно в дальнейшем использовать\nгде-либо еще. Однако приложения также могут быть "),a("a",{attrs:{href:"https://docs.npmjs.com/cli/publish",target:"_blank",rel:"noopener noreferrer"}},[s._v("опубликованы"),a("OutboundLink")],1),s._v(" в репозитории NPM.")]),s._v(" "),a("p",[s._v("Важно заметить, что для работы с "),a("code",[s._v("опубликованными/упакованными приложениями")]),s._v(" целевое окружение должно иметь доступ к\nпакету "),a("a",{attrs:{href:"https://www.npmjs.com/package/@es4x/create",target:"_blank",rel:"noopener noreferrer"}},[s._v("@es4x/create"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),a("p",[s._v("Также вы можете создавать образы Docker.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("es4x dockerfile\n")])])]),a("p",[s._v("Вы получите простой "),a("code",[s._v("dockerfile")]),s._v(", который вы можете настроить на свой вкус, по умолчанию файл содержит три стадии\nсборки.")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("node")]),s._v(" установит все зависимости "),a("code",[s._v("NPM")])]),s._v(" "),a("li",[a("code",[s._v("java")]),s._v(" установит зависимости "),a("code",[s._v("Maven")])]),s._v(" "),a("li",[s._v("Образ GraalVM запускает приложение")])]),s._v(" "),a("p",[s._v("По умолчанию используется образ Docker "),a("a",{attrs:{href:"https://hub.docker.com/r/oracle/graalvm-ce",target:"_blank",rel:"noopener noreferrer"}},[s._v("oracle/graalvm-ce"),a("OutboundLink")],1),s._v(", но вы можете\nзаменить его на любой другой образ JDK (желательно версии 11 или выше) с поддержкой JVMCI.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" --build-arg "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BASEIMAGE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("openjdk:11\n")])])]),a("h2",{attrs:{id:"jlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jlink"}},[s._v("#")]),s._v(" JLink")]),s._v(" "),a("p",[s._v("Java 11 поддерживает "),a("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/tools/jlink.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("jlink"),a("OutboundLink")],1),s._v(". Вы можете использовать\nинструмент jlink для сборки и оптимизации набора модулей и их зависимостей в один образ среды выполнения.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("es4x jlink\n")])])]),a("p",[s._v("Данный образ будет "),a("strong",[s._v("оптимизированной")]),s._v(" средой выполнения, и может быть использован без необходимости полной установки\nJDK. Для сравнения, приложение hello world при запуске будет использовать "),a("strong",[s._v("80Mb")]),s._v(", тогда как полная установка JDK\nтребует примерно "),a("strong",[s._v("200Mb")]),s._v(".")]),s._v(" "),a("p",[s._v("Эта возможность может использоваться в содействии с  "),a("code",[s._v("Dockerfile")]),s._v(". Вместо использования базового образа graal,\nиспользуйте "),a("code",[s._v("OpenJDK")]),s._v(". Затем на второй стадии запустите jlink:")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Вторая стадия (собираем код, относящийся к JVM)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" openjdk:11 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" JVM")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" ES4X_VERSION="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${project.version}")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Копируем предыдущий шаг сборки")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token options"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("NPM")])]),s._v(" /usr/src/app /usr/src/app")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Используем скопированное окружение")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /usr/src/app")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Скачиваем инструмент ES4X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" curl -sL https://github.com/reactiverse/es4x/releases/download/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ES4X_VERSION}")]),s._v("/es4x-pm-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ES4X_VERSION}")]),s._v("-bin.tar.gz | "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    tar zx --strip-components=1 -C /usr/local")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Устанавливаем зависимости Java")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Заставляем разрешение es4x maven учитывать только зависимости production")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" es4x install --only=prod")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Создаем оптимизированный образ среды выполнения")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" es4x jlink -t /usr/local")]),s._v("\n")])])]),a("p",[s._v("Будет создан оптимизированная среда выполнения для jre, которую можно использовать с небольшим базовым образом для\nфинальной стадии:")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" debian:slim")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Собираем файлы jar с прошлого шага")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token options"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("JVM")])]),s._v(" /usr/local /usr/local")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token options"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("--from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("JVM")])]),s._v(" /usr/src/app /usr/src/app")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Используем скопированное окружение")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /usr/src/app")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Группируем исходники приложения")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . .")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Задаем свои опции java для контейнеров")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" JAVA_OPTS="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap -XX:+UseContainerSupport"')])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Объявляем точку входа")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" [ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./node_modules/.bin/es4x-launcher"')]),s._v(" ]")]),s._v("\n")])])]),a("p",[s._v("Будет создан небольшой итоговый образ, с большим слоем, так как оптимизированная среда выполнения будет тоже упакована.")])])}),[],!1,null,null,null);t.default=r.exports}}]);