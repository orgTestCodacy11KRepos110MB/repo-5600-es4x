(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{275:function(t,s,a){t.exports=a.p+"assets/img/debug.a2318191.png"},276:function(t,s,a){t.exports=a.p+"assets/img/vscode-debug.8f0f75df.png"},358:function(t,s,a){"use strict";a.r(s);var r=a(13),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"εντοπισμος-σφαλματων"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#εντοπισμος-σφαλματων"}},[t._v("#")]),t._v(" Εντοπισμός σφαλμάτων")]),t._v(" "),s("h2",{attrs:{id:"chrome-inspector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-inspector"}},[t._v("#")]),t._v(" Chrome Inspector")]),t._v(" "),s("p",[t._v("Όταν εργάζεστε σε "),s("a",{attrs:{href:"https://graalvm.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraalVM"),s("OutboundLink")],1),t._v(" ή σε JDK με κομμάτια graalvm (JVMCI), ξεκινήστε την εφαρμογή σας ως:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start -- -Dinspect"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9229")]),t._v("\n")])])]),s("p",[t._v("Αυτό θα ξεκινήσει έναν παράγοντα εντοπισμού σφαλμάτων Chrome inspection στο port 9229 που μπορείτε να επισυνάψετε για μια περίοδο λειτουργίας απομακρυσμένου εντοπισμού σφαλμάτων από το πρόγραμμα περιήγησής σας.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Chrome devtools listening at port: 9229\nRunning: java ...\nDebugger listening on port 9229.\nTo start debugging, open the following URL in Chrome:\n    chrome-devtools://devtools/bundled/js_app.html?ws=127.0.0.1:9229/436e852b-329b5c44c3e\nServer listening at: http://localhost:8080/\n")])])]),s("p",[s("img",{attrs:{src:a(275),alt:"chrome-inspector"}})]),t._v(" "),s("p",[t._v("Θα μπορείτε να ορίσετε σημεία διακοπής, εντοπισμό σφαλμάτων κ.λπ.")]),t._v(" "),s("h2",{attrs:{id:"εντοπισμος-σφαλματων-απο-vscode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#εντοπισμος-σφαλματων-απο-vscode"}},[t._v("#")]),t._v(" Εντοπισμός σφαλμάτων από VSCode")]),t._v(" "),s("p",[t._v("Η χρήση του Chrome devtools δεν είναι δύσκολη απαίτηση. Μπορείτε επίσης να εντοπίσετε σφάλματα στην εφαρμογή χρησιμοποιώντας\n"),s("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code"),s("OutboundLink")],1),t._v(". Δημιουργήστε μια διαμόρφωση δρομέα ως:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("es4x vscode\n")])])]),s("p",[t._v("This will create a "),s("code",[t._v("launcher.json")]),t._v(" similar to this:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"configurations"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Launch empty-project"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"launch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cwd"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runtimeExecutable"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}/node_modules/.bin/es4x-launcher"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runtimeArgs"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Dinspect=5858"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5858")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outputCapture"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"std"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serverReadyAction"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pattern"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"started on port ([0-9]+)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uriFormat"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:%s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openExternally"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Και επισυνάψτε το πρόγραμμα εντοπισμού σφαλμάτων σας.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(276),alt:"vscode-chrome-inspector"}})]),t._v(" "),s("p",[t._v("Εάν εκτυπώσετε το μήνυμα "),s("code",[t._v("Server started on port 8000")]),t._v(" θα καταγραφεί από το visual studio και ένα παράθυρο του προγράμματος περιήγησης θα ανοίξει το εν λόγω URL.")])])}),[],!1,null,null,null);s.default=e.exports}}]);