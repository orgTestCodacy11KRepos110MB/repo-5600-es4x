(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{385:function(a,s,e){"use strict";e.r(s);var t=e(13),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[a._v("#")]),a._v(" Package")]),a._v(" "),s("p",[a._v("Spakowane aplikacje powinny trzymać się konwencji "),s("code",[a._v("NPM")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" pack\n")])])]),s("p",[s("a",{attrs:{href:"https://docs.npmjs.com/cli/pack",target:"_blank",rel:"noopener noreferrer"}},[a._v("npm pack"),s("OutboundLink")],1),a._v(" wyprodukuje plik "),s("code",[a._v("TGZ")]),a._v(" z aplikacją, który możesz przenosić do innych\nlokalizacji. Oprócz tego aplikacje mogą być również "),s("a",{attrs:{href:"https://docs.npmjs.com/cli/publish",target:"_blank",rel:"noopener noreferrer"}},[a._v("publikowane"),s("OutboundLink")],1),a._v(" w rejestrach NPM.")]),a._v(" "),s("p",[a._v("Ważnym jest, by zauważyć, że aby "),s("code",[a._v("opublikowane/spakowane")]),a._v(" aplikacje działały na docelowym środowisku musi mieć ono\ndostęp do paczki "),s("a",{attrs:{href:"https://www.npmjs.com/package/@es4x/create",target:"_blank",rel:"noopener noreferrer"}},[a._v("@es4x/create"),s("OutboundLink")],1),a._v(", która jest wymagana do instalacji kawałków\n"),s("code",[a._v("javy")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("p",[a._v("Z aplikacji można tworzyć również obrazy dockerowe.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("es4x dockerfile\n")])])]),s("p",[a._v("Ta komenda wyprodukuje prosty "),s("code",[a._v("dockerfile")]),a._v(", który możesz konfigurować według własnych potrzeb. Domyślnie plik będzie 3\netapem builda.")]),a._v(" "),s("ol",[s("li",[a._v("W pierwszym etapie używany jest "),s("code",[a._v("node")]),a._v(" do instalacji wszystkich dependencji "),s("code",[a._v("NPM")]),a._v(".")]),a._v(" "),s("li",[a._v("W drugim etapie używana jest "),s("code",[a._v("java")]),a._v(" do instalacji dependencji "),s("code",[a._v("Mavena")]),a._v(".")]),a._v(" "),s("li",[a._v("W końcowym etapie obraz GraalVM jest używany do uruchomienia programu.")])]),a._v(" "),s("p",[a._v("Domyślnie używany jest obraz dockera "),s("a",{attrs:{href:"https://hub.docker.com/r/oracle/graalvm-ce",target:"_blank",rel:"noopener noreferrer"}},[a._v("oracle/graalvm-ce"),s("OutboundLink")],1),a._v(". Można go jednak\nzastąpić każdym innym obrazem JDK (najlepiej wersji 11 lub wyższej), który wspiera JVMCI.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" --build-arg "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BASEIMAGE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("openjdk:11\n")])])]),s("h2",{attrs:{id:"jlink"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jlink"}},[a._v("#")]),a._v(" JLink")]),a._v(" "),s("p",[a._v("Java 11 wspiera "),s("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/tools/jlink.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jlink"),s("OutboundLink")],1),a._v(". Możesz użyć jlink do złożenia i\noptymalizacji modułów oraz ich dependencji w spersonalizowany obraz runtime.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("es4x jlink\n")])])]),s("p",[a._v("Komenda stworzy "),s("strong",[a._v("zoptymalizowany")]),a._v(" runtime, co znaczy że może on być użyty zamiast pełnej instalacji JDK.\nDla porównania, program hello world stworzy plik ważący około "),s("strong",[a._v("80Mb")]),a._v(", podczas gdy pełna instalacja JDK wymaga około\n"),s("strong",[a._v("200Mb")]),a._v(".")]),a._v(" "),s("p",[a._v("Ta funkcjonalność może być użyta łącznie z "),s("code",[a._v("Dockerfile")]),a._v(". Zamiast używania podstawowego obrazu graal, użyj postawowego\nobrazu "),s("code",[a._v("OpenJDK")]),a._v(". Następnie w drugim etapie uruchom jlink:")]),a._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Etap drugi (tworzenie JVM związanego z kodem)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" openjdk:11 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" JVM")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ARG")]),a._v(" ES4X_VERSION="),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${project.version}")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Skopiuj build z poprzedniego etapu")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COPY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token options"}},[s("span",{pre:!0,attrs:{class:"token property"}},[a._v("--from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("NPM")])]),a._v(" /usr/src/app /usr/src/app")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Użyj skopiowanego workspace'u")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WORKDIR")]),a._v(" /usr/src/app")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Pobierz ES4X runtime")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" curl -sL https://github.com/reactiverse/es4x/releases/download/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${ES4X_VERSION}")]),a._v("/es4x-pm-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${ES4X_VERSION}")]),a._v("-bin.tar.gz | "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),a._v("\n    tar zx --strip-components=1 -C /usr/local")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Zainstaluj dependencje Javy")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Wymuś rozwiązanie es4x maven tylko dla dependencji produkcyjnych")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" es4x install --only=prod")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Stwórz zoptymalizowany runtime")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" es4x jlink -t /usr/local")]),a._v("\n")])])]),s("p",[a._v("To stworzy zoptymalizowany runtime dla jre, który może zostać użyty z małym obrazem podstawowym dla ostatniego etapu:")]),a._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" debian:slim")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Zbierz pliki jar z poprzedniego etapu")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COPY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token options"}},[s("span",{pre:!0,attrs:{class:"token property"}},[a._v("--from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("JVM")])]),a._v(" /usr/local /usr/local")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COPY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token options"}},[s("span",{pre:!0,attrs:{class:"token property"}},[a._v("--from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("JVM")])]),a._v(" /usr/src/app /usr/src/app")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Użyj skopiowanego workspace'u")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WORKDIR")]),a._v(" /usr/src/app")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Bundle app source")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COPY")]),a._v(" . .")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Zdefiniuj opcje javy dla kontenerów")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" JAVA_OPTS="),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap -XX:+UseContainerSupport"')])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Zdefiniuj entrypoint")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENTRYPOINT")]),a._v(" [ "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./node_modules/.bin/es4x-launcher"')]),a._v(" ]")]),a._v("\n")])])]),s("p",[a._v("Ten kod wyprodukuje mały obraz końcowy.")])])}),[],!1,null,null,null);s.default=n.exports}}]);