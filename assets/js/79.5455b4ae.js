(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{363:function(s,a,t){"use strict";t.r(a);var e=t(13),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" Run")]),s._v(" "),a("p",[s._v("Μία ES4X εφαρμογή πρέπει να δημιουργήσει ένα "),a("code",[s._v("es4x-launcher")]),s._v(" κατά τη διάρκεια της εγκατάστασης του "),a("code",[s._v("npm")]),s._v(".")]),s._v(" "),a("p",[s._v("Αν δεν υπάρχει:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR yarn")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Το πρόγραμμα εκτέλεσης πρεπε να δημιουργηθεί εδώ "),a("code",[s._v("node_modules/.bin/es4x-lancher.*")])])]),s._v(" "),a("p",[s._v("Η εκτέλεση της εφαρμογής είναι απλή:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR yarn start")]),s._v("\n")])])]),a("p",[s._v("Αυτή η εντολή αντικαθιστά το προεπιλεγμένη λειτουργία του "),a("code",[s._v("npm")]),s._v(" εκτελώντας την εφαρμογή στο JVM.")]),s._v(" "),a("p",[s._v("Το "),a("em",[s._v("Hello World")]),s._v(" θα δείξει το παρακάτω output:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Server listening at: http://localhost:8080/\nSucceeded "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" deploying verticle\n")])])]),a("p",[s._v("Μπορείς τώρα να αλληλεπιδράσεις με την εφαρμογή μέσω του browser ή μέσω κάποιας εφαρμογής που πραγματοποιεί HTTP αιτήματα")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" localhost:8080\n\nHello from Vert.x Web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])]),a("h2",{attrs:{id:"εκτελεση-χωρις-npm-yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#εκτελεση-χωρις-npm-yarn"}},[s._v("#")]),s._v(" Εκτέλεση χωρίς npm/yarn")]),s._v(" "),a("p",[s._v("Κατά την ανάπτυξη εφαρμογών στην παραγωγή μπορεί να είναι φυσικό ** όχι ** να συνδυάσετε έναν διαχειριστή πακέτων με την εφαρμογή σας.\nΓια αυτήν την περίπτωση, η εφαρμογή δε θα χρησιμοποιεί «npm» / «νήματα». Η εκτέλεση της εφαρμογής γίνεται:")]),s._v(" "),a("p",[s._v("Κατά την δημοσίευση της εφαρμογής στο production ίσως δε χρειάζεσαι τον package manager της εφαρμογής. Στην περίπτωση αυτή μην χρησιμοποιήσεις τα "),a("code",[s._v("npm")]),s._v("/"),a("code",[s._v("yarn")]),s._v(".")]),s._v(" "),a("p",[s._v("Αλλά ξεκίνα την εφαρμογή ως εξής:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./node_modules/.bin/es4x-launcher\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Είναι δυνατό να αλλάξεις το πως ξεκινάει η εφαρμογή σου, απλά κοίτα:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./node_modules/.bin/es4x-launcher -help\n")])])])]),s._v(" "),a("h2",{attrs:{id:"κλιμακωση-του-αριθμου-των-verticles-scaling-the-number-of-verticles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#κλιμακωση-του-αριθμου-των-verticles-scaling-the-number-of-verticles"}},[s._v("#")]),s._v(" Κλιμάκωση του αριθμού των verticles (Scaling the number of verticles)")]),s._v(" "),a("p",[s._v("Η κλιμάκωση του αριθμού των verticles (σε μερικές περιπτώσεις αυξάνει την απόδοση) μπορεί να επιτευχθεί ως:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# αριθμός των verticles:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("N")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  ./node_modules/.bin/es4x-launcher -instances "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$N")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Αυξάνοντας των αριθμό των verticles έως τον διπλάσιο αριθμό των πυρήνων προσφέρει καλύτερες επιδόσεις.")])]),s._v(" "),a("h2",{attrs:{id:"ομαδοποιηση-clustering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ομαδοποιηση-clustering"}},[s._v("#")]),s._v(" Ομαδοποίηση (Clustering)")]),s._v(" "),a("p",[s._v("Όπως και με τα vertlices, μια ES4X εφαρμογή μπορεί με μεγάλη ευκολία να ομαλοποιηθεί:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./node_modules/.bin/es4x-launcher -cluster\n")])])]),a("p",[s._v("Για περισσότερες πληροφορίες πάνω στην ομαδοποίηση, κοίτα στο "),a("a",{attrs:{href:"https://www.vertx.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("vert.x"),a("OutboundLink")],1),s._v(" εγχειρίδιο.")])])}),[],!1,null,null,null);a.default=r.exports}}]);