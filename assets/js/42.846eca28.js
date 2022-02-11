(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{640:function(t,v,_){"use strict";_.r(v);var a=_(11),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"v8如何执行一行-js-代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v8如何执行一行-js-代码"}},[t._v("#")]),t._v(" V8如何执行一行 JS 代码")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("预解析")]),t._v(": 检查语法错误但不生成AST")]),t._v(" "),_("li",[_("strong",[t._v("生成AST")]),t._v(": 经过词法/语法分析，生成抽象语法树")]),t._v(" "),_("li",[_("strong",[t._v("生成字节码")]),t._v(": 基线编译器("),_("code",[t._v("Ignition")]),t._v(")将AST转换成字节码")]),t._v(" "),_("li",[_("strong",[t._v("生成机器码")]),t._v(": 优化编译器("),_("code",[t._v("Turbofan")]),t._v(")将转换为优化过的机器码，此外在逐行执行字节码时，如果一段代码经常被执行，那么就会进行缓存，从而优化执行速度")])]),t._v(" "),_("h2",{attrs:{id:"引用计数和标记清除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引用计数和标记清除"}},[t._v("#")]),t._v(" 引用计数和标记清除")]),t._v(" "),_("ul",[_("li",[t._v("引用计数: 给一个变量赋值引用类型，则该对象的引用次数+1，如果这个变量变成了其他值，那么该对象的引用次数-1，垃圾回收器会回收引用次数为0的对象。但是当对象循环引用时，会导致引用次数永远无法归零，造成内存无法释放")]),t._v(" "),_("li",[t._v("标记清除: 垃圾收集器先给内存中所有对象加上标记，然后从根节点开始遍历，去掉被引用的对象和运行环境中对象的标记，剩下的被标记的对象就是无法访问的等待回收的对象")])]),t._v(" "),_("h2",{attrs:{id:"v8如何进行垃圾回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v8如何进行垃圾回收"}},[t._v("#")]),t._v(" V8如何进行垃圾回收")]),t._v(" "),_("p",[t._v("JS引擎中对变量的存储主要有两种位置，栈内存和堆内存，栈内存存储基本类型数据以及引用类型数据的内存地址，堆内存储存引用类型的数据")]),t._v(" "),_("h3",{attrs:{id:"栈回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#栈回收"}},[t._v("#")]),t._v(" 栈回收")]),t._v(" "),_("p",[t._v("栈内存调用栈上下文切换后就被回收")]),t._v(" "),_("h3",{attrs:{id:"堆回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#堆回收"}},[t._v("#")]),t._v(" 堆回收")]),t._v(" "),_("ul",[_("li",[t._v("新生代内存回收机制: 新生代内存容量小，64位系统下仅有32M。新生代内存分为From、To两部分，进行垃圾回收时，先扫描From，将非存活对象回收，将存活对象顺序复制到To中，之后调换From/To，等待下一次回收")]),t._v(" "),_("li",[t._v("老生代内存回收机制:\n"),_("ul",[_("li",[t._v("晋升：如果新生代的变量经过多次回收依然存在，那么就会被放入老生代内存中")]),t._v(" "),_("li",[t._v("标记清除：老生代内存会先遍历所有对象并打上标记，然后对正在使用或被强引用的对象取消标记，回收被标记的对象")]),t._v(" "),_("li",[t._v("整理内存碎片：把对象挪到内存的一端")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);