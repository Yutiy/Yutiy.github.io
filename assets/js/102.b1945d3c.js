(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{709:function(a,s,t){"use strict";t.r(s);var r=t(11),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"浏览器事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器事件循环"}},[a._v("#")]),a._v(" 浏览器事件循环")]),a._v(" "),t("ol",[t("li",[a._v("一开始整段脚本作为第一个宏任务执行")]),a._v(" "),t("li",[a._v("执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列")]),a._v(" "),t("li",[a._v("当前宏任务执行完出队，检查微任务队列，如果有则依次执行，直到微任务队列为空")]),a._v(" "),t("li",[a._v("执行浏览器 UI 线程的渲染工作")]),a._v(" "),t("li",[a._v("检查是否有Web worker任务，有则执行")]),a._v(" "),t("li",[a._v("执行队首新的宏任务，回到2，依此循环，直到宏任务和微任务队列都为空")])]),a._v(" "),t("h2",{attrs:{id:"nodejs事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs事件循环"}},[a._v("#")]),a._v(" nodejs事件循环")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("     "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("----------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("——"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" timers         "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("--- 执行 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("setTimeout"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("、"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("setInterval"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 的回调\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("----------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("--- 执行所有 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Next Tick Queue"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 以及 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("MircoTask Queue"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 的回调\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" pending callback "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("-- 执行由上一个 Tick 延迟下来的 I/O 回调"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("待完善、可忽略"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("--- 执行所有 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Next Tick Queue"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 以及 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("MircoTask Queue"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 的回调\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   idle, prepare  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("-- 内部调用"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("可忽略"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("--- 执行所有 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Next Tick Queue"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 以及 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("MircoTask Queue"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 的回调\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("      poll        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("-- "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("incoming、connections、data etc"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(", 执行所有回调，除了close callbacks\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("--- 执行所有 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Next Tick Queue"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 以及 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("MircoTask Queue"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 的回调\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("      check       "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("-- "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("setImmedidate"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 会在这个阶段执行\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("--- 执行所有 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Next Tick Queue"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 以及 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("MircoTask Queue"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 的回调\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" close callbacks  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("-- socket.on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'close'")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n     "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("------------------"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br")])]),t("h2",{attrs:{id:"差异分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#差异分析"}},[a._v("#")]),a._v(" 差异分析")]),a._v(" "),t("p",[a._v("两者最主要的区别在于浏览器中的微任务是在"),t("code",[a._v("每个相应的宏任务中执行的")]),a._v("，而nodejs中的微任务是"),t("code",[a._v("在不同阶段之间执行的")]),a._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);