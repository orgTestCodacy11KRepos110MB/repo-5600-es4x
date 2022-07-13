(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{338:function(a,e,t){"use strict";t.r(e);var s=t(13),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[a._v("#")]),a._v(" Install")]),a._v(" "),e("p",[a._v("Assuming you’ve already installed "),e("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js"),e("OutboundLink")],1),a._v(", you will need a working JVM. The requirements are\neither ("),e("a",{attrs:{href:"https://adoptium.net/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java"),e("OutboundLink")],1),a._v(" or "),e("a",{attrs:{href:"http://www.graalvm.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("GraalVM"),e("OutboundLink")],1),a._v(").")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ java -version\nopenjdk version "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"11.0.15"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-04-19\nOpenJDK Runtime Environment "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("11.0")]),a._v(".15+10-Ubuntu-0ubuntu0.22.04.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nOpenJDK "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("-Bit Server VM "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("11.0")]),a._v(".15+10-Ubuntu-0ubuntu0.22.04.1, mixed mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("If you see a similar output, this means your system currently has "),e("code",[a._v("java")]),a._v(" "),e("strong",[a._v("8")]),a._v(", which is not the best option as it will\nnot benefit from the high performance engine "),e("code",[a._v("es4x")]),a._v(" uses.")]),a._v(" "),e("h2",{attrs:{id:"graalvm-openjdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#graalvm-openjdk"}},[a._v("#")]),a._v(" GraalVM/OpenJDK")]),a._v(" "),e("p",[a._v("In order to have a compatible runtime it is recommended to install a higher runtime (for example using\n"),e("a",{attrs:{href:"https://github.com/shyiko/jabba",target:"_blank",rel:"noopener noreferrer"}},[a._v("jabba"),e("OutboundLink")],1),a._v("). For instructions on installing "),e("code",[a._v("jabba")]),a._v(", please refer to the official\n"),e("a",{attrs:{href:"https://github.com/shyiko/jabba#installation",target:"_blank",rel:"noopener noreferrer"}},[a._v("manual"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Using "),e("code",[a._v("jabba")]),a._v(" you can install "),e("code",[a._v("openjdk 11")]),a._v(" and/or "),e("code",[a._v("graalvm")]),a._v(" (once) as:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jabba "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" openjdk@1.11.0\njabba "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" graalvm@21.3.0\n")])])]),e("p",[a._v("And later switch to the desired runtime by executing:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jabba use openjdk@1.11 "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# OR jabba use graalvm@21.2")]),a._v("\n")])])])]),a._v(" "),e("p",[a._v("Once a valid JVM is installed you can optionally install the project management utilities development tool.")]),a._v(" "),e("h2",{attrs:{id:"project-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-tools"}},[a._v("#")]),a._v(" Project Tools")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g @es4x/create "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# OR yarn global add @es4x/create")]),a._v("\n")])])]),e("p",[a._v("The package will install a "),e("code",[a._v("es4x")]),a._v(" command globally that can be used to create projects and perform other tasks. To know\nmore about the tool:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("es4x --help\n")])])]),e("h3",{attrs:{id:"using-npx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-npx"}},[a._v("#")]),a._v(" Using NPX")]),a._v(" "),e("p",[a._v("The same package can be used as a one-shot operation with "),e("code",[a._v("npx")]),a._v(". In this case refer to it as:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("npx @es4x/create --help\n")])])]),e("h2",{attrs:{id:"os-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os-package"}},[a._v("#")]),a._v(" OS package")]),a._v(" "),e("p",[a._v("When working on CI environments where the amount of packages is limited, the package manager can be installed by\nunzipping the prepackaged tar/zip file.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ES4X")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0.16.0'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sL "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  https://github.com/reactiverse/es4x/releases/download/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ES4X")]),a._v("/es4x-pm-"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ES4X")]),a._v("-bin.tar.gz "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zx --strip-components"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" -C /usr/local\n")])])]),e("p",[a._v("For Windows Operating Systems the same can be done using a "),e("code",[a._v("zip")]),a._v(" file instead.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Using "),e("code",[a._v("npm")]),a._v(" should be the preferred way to install as it allows easy upgrades and should be portable across different\n"),e("em",[a._v("Operating Systems")]),a._v(".")])]),a._v(" "),e("h2",{attrs:{id:"verify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify"}},[a._v("#")]),a._v(" Verify")]),a._v(" "),e("p",[a._v("You should now have a "),e("code",[a._v("es4x")]),a._v(" command available in your path, you can test it by running:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ es4x --help\n\nUsage: java -jar /usr/local/bin/es4x-bin.jar [COMMAND] [OPTIONS]\n            [arg...]\n\nCommands:\n    bare         Creates a bare instance of vert.x.\n    dockerfile   Creates a generic Dockerfile for building and deploying the\n                 current project.\n    project      Initializes the 'package.json' to work with ES4X.\n    install      Installs required jars from maven to 'node_modules'.\n    list         List vert.x applications\n    run          Runs a JS script called <main-verticle> in its own instance of\n                 vert.x.\n    start        Start a vert.x application in background\n    stop         Stop a vert.x application\n    version      Displays the version.\n\nRun 'java -jar /usr/local/bin/es4x-bin.jar COMMAND --help' for\nmore information on a command.\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("For best experience and performance please install "),e("a",{attrs:{href:"https://www.graalvm.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("GraalVM"),e("OutboundLink")],1),a._v(". When working on standard JDK,\nusing Java < 11 will run on "),e("code",[a._v("Interpreted")]),a._v(" mode which is not performance or recommended for production.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);