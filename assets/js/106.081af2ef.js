(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{713:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("React 渲染性能优化大致包含三个方向:")]),t._v(" "),a("ul",[a("li",[t._v("减少计算的量 -> 对应到 React 中就是减少渲染的节点或者降低组件渲染的复杂度")]),t._v(" "),a("li",[t._v("利用缓存 -> 对应到 React 中就是如何避免重新渲染，利用函数式编程的 memo 方式来避免组件重新渲染")]),t._v(" "),a("li",[t._v("精确重新计算的范围 -> 对应到 React 中就是绑定组件和状态关系，精确判断更新的 "),a("code",[t._v("时机")]),t._v(" 和 "),a("code",[t._v("范围")]),t._v("，只重新渲染脏组件从而降低渲染范围")])]),t._v(" "),a("h2",{attrs:{id:"减少渲染的节点-降低渲染计算量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减少渲染的节点-降低渲染计算量"}},[t._v("#")]),t._v(" 减少渲染的节点/降低渲染计算量")]),t._v(" "),a("p",[t._v("首先从计算量上下功夫，减少节点渲染的数量或者降低渲染的计算量可以显著提高组件的渲染性能。")]),t._v(" "),a("h3",{attrs:{id:"不要在渲染函数都进行不必要的计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不要在渲染函数都进行不必要的计算"}},[t._v("#")]),t._v(" 不要在渲染函数都进行不必要的计算")]),t._v(" "),a("p",[t._v("比如不要在 render 中进行数组排序、数据转换、订阅事件、创建时间处理器等，渲染函数中不应该放置太多副作用。")]),t._v(" "),a("h3",{attrs:{id:"虚拟列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟列表"}},[t._v("#")]),t._v(" 虚拟列表")]),t._v(" "),a("p",[t._v("虚拟列表只渲染当前视口可见元素，其优化的本质就是减少渲染的节点。常用于以下组件场景:")]),t._v(" "),a("ul",[a("li",[t._v("无限滚动列表，grid，表哥，下拉列表，spreadsheets")]),t._v(" "),a("li",[t._v("无限切换的日历或轮播图")]),t._v(" "),a("li",[t._v("大数据量或无限嵌套树")]),t._v(" "),a("li",[t._v("聊天窗口，数据口，时间轴")])]),t._v(" "),a("h3",{attrs:{id:"惰性渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#惰性渲染"}},[t._v("#")]),t._v(" 惰性渲染")]),t._v(" "),a("p",[t._v("必要时渲染组件，如Tab组件、模态弹窗、折叠组件等")]),t._v(" "),a("h3",{attrs:{id:"选择合适的样式方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的样式方案"}},[t._v("#")]),t._v(" 选择合适的样式方案")]),t._v(" "),a("p",[t._v("样式运行时性能大概可总结为: CSS > 大部分CSS-in-JS > inline style")]),t._v(" "),a("h2",{attrs:{id:"避免重新渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免重新渲染"}},[t._v("#")]),t._v(" 避免重新渲染")]),t._v(" "),a("p",[t._v("为了避免不必要的组件重新渲染需要做到以下两点:")]),t._v(" "),a("ul",[a("li",[t._v("保证组件的纯粹性。即控制组件的副作用，如果组件有副作用则无法安全的缓存渲染结果")]),t._v(" "),a("li",[t._v("通过 shouldComponentUpdate/React.memo 生命周期函数来比对 state 和 props，确定是否要重新渲染")])]),t._v(" "),a("p",[t._v("另外这些措施也可以帮助更容易地优化组件重新渲染:")]),t._v(" "),a("h3",{attrs:{id:"简化state、props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简化state、props"}},[t._v("#")]),t._v(" 简化state、props")]),t._v(" "),a("p",[t._v("如果一个组件的 props 太复杂首先需要对组件进行拆解，另外复杂的 props 也会影响 shallowCompare 效率，还会让组件变得难以预测和调试。")]),t._v(" "),a("p",[t._v("state原则: 如果组件响应需要它的变动，或者需要渲染到视图中的数据才应该放到 state 中，这样可以避免不必要的数据变动导致组件重新渲染。")]),t._v(" "),a("h3",{attrs:{id:"不变的事件处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不变的事件处理器"}},[t._v("#")]),t._v(" 不变的事件处理器")]),t._v(" "),a("p",[t._v("避免使用箭头函数形式的事件处理器，例如:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ComplexComponent onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("evt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("假设 ComplexComponent 是一个复杂的 PureComponent, 这里使用箭头函数，其实每次渲染都会创建一个新的事件处理器，这会导致 ComplexComponent 始终被重新渲染")]),t._v(" "),a("p",[t._v("更好的方式是使用实例方法:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ComplexComponent onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleCLick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pass")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数组件，有时可以考虑用 data-* 属性获取参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MyComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handleClick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pass")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ComplexComponent onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h3",{attrs:{id:"不可变数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可变数据"}},[t._v("#")]),t._v(" 不可变数据")]),t._v(" "),a("p",[t._v("不可变数据可以让状态变得可预测，也让 shouldComponentUpdate 浅比较变得更可靠和高效。如Immutable.js等工具。")]),t._v(" "),a("h2",{attrs:{id:"精细化渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精细化渲染"}},[t._v("#")]),t._v(" 精细化渲染")]),t._v(" "),a("ul",[a("li",[t._v("响应式数据的精细化渲染: 将数据隔离抽取到单一指责的组件中，这样导致组件重新渲染的数据来源就回变少")]),t._v(" "),a("li",[t._v("不滥用context: Conext API的更新特点是可以穿透 React.memo/shouldComponentUpdate 比对的，所以要合理使用")])])])}),[],!1,null,null,null);s.default=e.exports}}]);