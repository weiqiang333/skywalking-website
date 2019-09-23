(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{237:function(t,n,a){t.exports=a.p+"assets/img/lettuce.021f6664.png"},295:function(t,n,a){"use strict";a.r(n);var e=[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("《SkyWalking Java 插件贡献实践》：本文将基于SkyWalking 6.0.0-GA-SNAPSHOT版本，以编写Redis客户端"),n("a",{attrs:{href:"#Lettuce"}},[n("code",[this._v("Lettuce")])]),this._v("的SkyWalking Java Agent 插件为例，与大家分享我贡献PR的过程，希望对大家了解SkyWalking Java Agent插件有所帮助。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("a",{attrs:{href:"#OpenTracing"}},[n("code",[this._v("OpenTracing")])]),this._v("和SkyWalking链路模块几个很重要的语义概念。")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",[a("li",[a("p",[t._v("Span:可理解为一次方法调用，一个程序块的调用，或一次RPC/数据库访问。只要是一个具有完整时间周期的程序访问，都可以被认为是一个span。SkyWalking "),a("a",{attrs:{href:"#AbstractSpan"}},[a("code",[t._v("Span")])]),t._v("对象中的重要属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("component")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("插件的组件名称，如：Lettuce，详见:ComponentsDefine.Class。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tag")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("标签")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("k-v结构，关键标签，key详见：Tags.Class。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("peer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("对端资源")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于拓扑图，若DB组件，需记录集群信息。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("operationName")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("操作名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("若span=0，operationName将会搜索的下拉列表。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("layer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在链路页显示，详见SpanLayer.Class。")])])])])]),t._v(" "),a("li",[a("p",[t._v("Trace:调用链，通过归属于其的Span来隐性的定义。一条Trace可被认为是一个由多个Span组成的有向无环图（DAG图），在SkyWalking链路模块你可以看到，Trace又由多个归属于其的trace segment组成。")])]),t._v(" "),a("li",[a("p",[t._v("Trace segment:Segment是SkyWalking中的一个概念，它应该包括单个OS进程中每个请求的所有范围，通常是基于语言的单线程。由多个归属于本线程操作的Span组成。")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",[a("li",[t._v("为了实现分布式跟踪，需要绑定跨进程的跟踪，并且应该传播上下文 整个过程。 这就是ContextCarrier的职责。")]),t._v(" "),a("li",[t._v("以下是实现有关跨进程传播的步骤：\n"),a("ul",[a("li",[t._v("在客户端，创建一个新的空的ContextCarrier，将ContextCarrier所有信息放到HTTP heads、Dubbo attachments 或者Kafka messages。")]),t._v(" "),a("li",[t._v("通过服务调用，将ContextCarrier传递到服务端。")]),t._v(" "),a("li",[t._v("在服务端，在对应组件的heads、attachments或messages获取ContextCarrier所有消息。将服务端和客户端的链路信息绑定。")])])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",[a("li",[t._v("除了跨进程，跨线程也是需要支持的，例如异步线程（内存中的消息队列）和批处理在Java中很常见，跨进程和跨线程十分相似，因为都是需要传播 上下文。 唯一的区别是，不需要跨线程序列化。")]),t._v(" "),a("li",[t._v("以下是实现有关跨线程传播的步骤：\n"),a("ul",[a("li",[t._v("使用ContextManager＃capture获取ContextSnapshot对象。")]),t._v(" "),a("li",[t._v("让子线程以任何方式，通过方法参数或由现有参数携带来访问ContextSnapshot。")]),t._v(" "),a("li",[t._v("在子线程中使用ContextManager#continued。")])])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ping"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpServletRequest request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" ExecutionException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" InterruptedException "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    RedisClient redisClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RedisClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redis://"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":6379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    StatefulRedisConnection"),a("span",{pre:!0,attrs:{class:"token generics function"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" connection0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" redisClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    RedisAsyncCommands"),a("span",{pre:!0,attrs:{class:"token generics function"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" asyncCommands0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    AsyncCommand"),a("span",{pre:!0,attrs:{class:"token generics function"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" future "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AsyncCommand"),a("span",{pre:!0,attrs:{class:"token generics function"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("asyncCommands0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key_a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value_a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    future"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onComplete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" OkHttpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://skywalking.apache.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    future"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    connection0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    redisClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pong"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Lettuce对Redis封装与Redisson "),n("a",{attrs:{href:"#Redisson"}},[n("code",[this._v("Redisson")])]),this._v(" 类似，目的均是实现简单易用，且无学习曲线的Java的Redis客户端。所以要是先对Redis操作的拦截，需要学习对应客户端的源码。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:a(237),alt:"Lettuce时序图"}}),this._v("\n理解插件实现过程，找到最佳InterceptPoint位置是实现插件融入SkyWalking的核心所在。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("多线程编程使用debug断点会将链路变成同步，建议使用run模式增加log，或者远程debug来解决。")]),this._v(" "),n("li",[this._v("多线程编程，需要使用跨线程ContextSnapshot核心API，否则链路会断裂。")]),this._v(" "),n("li",[this._v("CompleteableCommand.onComplete方法有时会同步执行，这个和内部机制有关，有时候不分离线程。")]),this._v(" "),n("li",[this._v("插件编译版本若为1.7+，需要将插件放到可选插件中。因为sniffer支持的版本是1.6。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("a",{attrs:{name:"AbstractSpan"}}),this._v("span:org.apache.skywalking.apm.agent.core.context.trace.AbstractSpan接口定义了所有Span实现需要完成的方法;")])}],s=a(0),r=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"skywalking-java-插件贡献实践"}},[t._v("SkyWalking Java 插件贡献实践")]),t._v(" "),a("p",[t._v("作者： SkyWalking 兴趣爱好者，赵禹光")]),t._v(" "),a("h2",{attrs:{id:"引言"}},[t._v("引言")]),t._v(" "),t._m(0),t._v(" "),a("h2",{attrs:{id:"基础概念"}},[t._v("基础概念")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("h2",{attrs:{id:"核心api"}},[t._v("核心API")]),t._v(" "),a("h3",{attrs:{id:"跨进程contextcarrier核心api"}},[t._v("跨进程ContextCarrier核心API")]),t._v(" "),t._m(3),t._v(" "),a("h3",{attrs:{id:"跨线程contextsnapshot核心api"}},[t._v("跨线程ContextSnapshot核心API")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("详尽的核心API相关知识，可点击阅读 《"),a("a",{attrs:{href:"https://github.com/apache/incubator-skywalking/blob/master/docs/others/cn/guides/Java-Plugin-Development-Guide.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件开发指南-中文版本"),a("OutboundLink")],1),t._v("》")]),t._v(" "),a("h2",{attrs:{id:"插件实践"}},[t._v("插件实践")]),t._v(" "),a("h3",{attrs:{id:"lettuce操作redis代码"}},[t._v("Lettuce操作redis代码")]),t._v(" "),t._m(5),a("h3",{attrs:{id:"插件源码架构"}},[t._v("插件源码架构")]),t._v(" "),t._m(6),t._v(" "),a("h3",{attrs:{id:"设计插件"}},[t._v("设计插件")]),t._v(" "),t._m(7),t._v(" "),a("h3",{attrs:{id:"代码实现"}},[t._v("代码实现")]),t._v(" "),a("p",[t._v("PR的url："),a("a",{attrs:{href:"https://github.com/apache/incubator-skywalking/pull/2152",target:"_blank",rel:"noopener noreferrer"}},[t._v("Support lettuce plugin"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"实践中遇到的问题"}},[t._v("实践中遇到的问题")]),t._v(" "),t._m(8),t._v(" "),a("h2",{attrs:{id:"插件兼容"}},[t._v("插件兼容")]),t._v(" "),a("p",[t._v("为了插件得到插件最终的兼容兼容版本，我们需要使用docker对所有插件版本的测试，具体步骤如下：")]),t._v(" "),a("ul",[a("li",[t._v("编写测试用例：关于如何编写测试用例，请按照"),a("a",{attrs:{href:"https://github.com/SkywalkingTest/skywalking-agent-testcases/blob/master/docs/how-to-write-a-plugin-testcase.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何编写文档"),a("OutboundLink")],1),t._v("来实现。")]),t._v(" "),a("li",[t._v("提供自动测试用例。 如："),a("a",{attrs:{href:"https://github.com/SkywalkingTest/skywalking-agent-testcases/pull/45",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redisson插件testcase"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("确保本地几个流行的插件版本，在本地运行起来是和自己的预期是一致的。")]),t._v(" "),a("li",[t._v("在提供自动测试用例并在CI中递交测试后，插件提交者会批准您的插件。")]),t._v(" "),a("li",[t._v("最终得到完整的插件测试报告。")])]),t._v(" "),a("h2",{attrs:{id:"pull-request"}},[t._v("Pull Request")]),t._v(" "),a("h3",{attrs:{id:"提交pr"}},[t._v("提交PR")]),t._v(" "),a("p",[t._v("提交PR的时候，需要简述自己对插件的设计，这样有助于与社区的贡献者讨论完成codereview。")]),t._v(" "),a("h3",{attrs:{id:"申请自动化测试"}},[t._v("申请自动化测试")]),t._v(" "),a("p",[t._v("测试用例编写完成后，可以申请自动化测试，在自己的PR中会生成插件兼容版本的报告。")]),t._v(" "),a("h3",{attrs:{id:"插件文档"}},[t._v("插件文档")]),t._v(" "),a("p",[t._v("插件文档需要更新："),a("a",{attrs:{href:"https://github.com/apache/incubator-skywalking/blob/master/docs/en/setup/service-agent/java-agent/Supported-list.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Supported-list.md"),a("OutboundLink")],1),t._v("相关插件信息的支持。")]),t._v(" "),a("p",[t._v("插件如果为可选插件需要在"),a("a",{attrs:{href:"https://github.com/apache/incubator-skywalking/tree/master/docs/en/setup/service-agent/java-agent/agent-optional-plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("agent-optional-plugins"),a("OutboundLink")],1),t._v("可选插件文档中增加对应的描述。")]),t._v(" "),a("h2",{attrs:{id:"注释"}},[t._v("注释")]),t._v(" "),a("p",[a("a",{attrs:{name:"Lettuce"}}),t._v("Lettuce是一个完全无阻塞的Redis客户端，使用netty构建，提供反应，异步和同步数据访问。了解细节可点击阅读 "),a("a",{attrs:{href:"https://lettuce.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lettuce.io"),a("OutboundLink")],1),t._v(";")]),t._v(" "),a("p",[a("a",{attrs:{name:"OpenTracing"}}),t._v("OpenTracing是一个跨编程语言的标准，了解细节可点击阅读 《"),a("a",{attrs:{href:"https://github.com/opentracing-contrib/opentracing-specification-zh/blob/master/specification.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenTracing语义标准"),a("OutboundLink")],1),t._v("》;")]),t._v(" "),t._m(9),t._v(" "),a("p",[a("a",{attrs:{name:"Redisson"}}),t._v("Redisson是一个非常易用Java的Redis客户端， 它没有学习曲线，无需知道任何Redis命令即可开始使用它。了解细节可点击阅读 "),a("a",{attrs:{href:"https://redisson.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("redisson.org"),a("OutboundLink")],1),t._v(";")])])},e,!1,null,null,null);n.default=r.exports}}]);