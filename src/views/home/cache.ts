// 基本信息
export const Info = [
  { label: "姓名", value: "孙宏新" },
  { label: "邮箱", value: "sunhongxin_job@163.com" },
  { label: "现居", value: "江苏·南京" },
  { label: "出生", value: "1996.05" },
];
// 工作经历
export const Jobs: any[] = [
  {
    id: "nanjing",
    name: "南京恒歌零一信息科技有限公司",
    sub: "二十八所外包",
    job: "Web开发工程师",
    time: "2019.05 - 2022.05",
    reason: "正常合同到期。",
    description:
      "二十八所军工背景下，担任Web(前端)开发任务，一直以来进行重点投标项目的研发以及项目移植工作。在实际工作中起到衔接、协调的角色。以带领新人、解决重点难度大技术问题（实现关健技术Demo）、开发环境搭建、代码打包上线、出差交付等为主要工作任务。工作内容主要涉及可视化、WebGIS(非SDK开发，请认真查看)、以及其他工作。",
  },
  {
    id: "hefei",
    name: "庐江中合农产品市场有限公司",
    job: "信息部员工",
    time: "2018.06 - 2018.12",
    reason: "公司组织结构变化，工作地点变更。",
    description:
      "在时，中国供销背景。主要以农产品批发、线上农产品商城为主要业务。工作内容主要负责上游商户和下游客户交易协调往来，深入市场一线调研，了解农副产品批发、流通中的痛点，集思广益提供解决方案。作为甲方参与线上商城平台的需求分析并且出差同乙方对接。其他工作包括机房运维、市场等工作。",
  },
];
export const JobLabels: any[] = [
  { label: "", key: "time", span: 6, xs: { span: 24 } },
  { label: "公司名称", key: "name", sub: true, span: 12, xs: { span: 24 } },
  { label: "职位", key: "job", span: 6, xs: { span: 24 } },
  { label: "工作内容", key: "description" },
  { label: "离职原因", key: "reason" },
];
// 项目经历
export const Projects: any[] = [
  {
    id: "2",
    name: "军工项目（保密要求，具体不便）",
    time: "2019.05 - 2022.05",
    description: `主要负责每个项目的整个代码开发流程。包括项目从0到1技术选型、环境搭建、公用组件编写、复用功能模块提取、后期完善、Angular项目重构为Vue、移植功能等。从而提升开发效率50%以上（接手项目都能保证功能完整前提清除一半代码并提升速度）。项目主要用于大型投标场景。技术方向涉及：`,
    lis: [
      "WebGIS地图开发：使用内部部门提供技术支持二次开发（该地图库为openlayer封装），要素上图、人工地图干预编辑、操作截图保留，操作记录保留可打开再编辑，类似PhotoShop，从而实现摆脱PS。",
      "可视化开发：使用现有生态插件库，更多是未有符合设计图插件基于插件自定义实现设计效果图。基于现有数据进行图和表的分析、人工编辑整饬，并能提供出图、出表、出报告。从而实现摆脱Excel、Word。总体实现全部网页系统集成offic功能，提供模板简化操作，减少操作人员工作量。",
      "基于C端类似qwebchannel等插件，将网页同C端能力系统嵌入集成，包括通信、原C端代码实现转为JS实现等工作。",
      "采用数据采样解决高并发地图推点、数据列表实时显示。基于Node ws实现不同系统之间数据转发通信。其他非本职任务。",
    ],
    result:
      "以少数的人工实现紧急和复杂开发，极大缩短项目周期，在此背景下现场快速响应相关领导要求，并实时反馈。得到领导和专家的认可。出差交付完成后取得了内部传阅表扬!",
    stack: "见技能展示",
  },
];
export const ProLabels: any[] = [
  { label: "", key: "time", span: 6, xs: { span: 24 } },
  { label: "项目名称", key: "name", span: 12, xs: { span: 24 } },
  { label: "项目描述", key: "description", lis: true },
  { label: "项目业绩", key: "result" },
  // { label: '技术栈', key: 'stack', href: '#ability' },
];
// 个人特点
export const Feature = {
  strongIndicator: [
    { max: 100, text: "不设边界" },
    { max: 100, text: "客观求实" },
    { max: 100, text: "韧性" },
    { max: 100, text: "热爱工作" },
    { max: 100, text: "独立" },
    { max: 100, text: "攻坚" },
  ],
  weakIndicator: [
    { max: 100, text: "沟通合作" },
    { max: 100, text: "拒绝内卷" },
    { max: 100, text: "社交" },
    { max: 100, text: "无所好" },
    { max: 100, text: "无所恶" },
  ],
  strongData: [80, 90, 60, 70, 98, 86],
  weakData: [70, 100, 40, 50, 50],
};
// 项目经历
export const Edu = [
  {
    label: "学校名称",
    value: "安徽理工大学",
    url: "https://www.aust.edu.cn",
    img: "/images/school.png",
  },
  {
    label: "学历",
    value: "本科 · 统招",
  },
  {
    label: "专业名称",
    value: "计算机科学与技术",
  },
  {
    label: "在校时间",
    value: "2014.09 - 2018.06",
  },
];
// 专业技能
export const Ability: any = [
  { key: "root", text: "专业技能", figure: "Circle" },
  {
    key: "L1",
    text: "Vue(3)",
    dir: "left",
    parent: "root",
    url: ["https://v3.cn.vuejs.org/"],
  },
  {
    key: "L12",
    text: "VueX, Vue Router",
    parent: "L1",
    url: ["https://vuex.vuejs.org/zh/", "https://router.vuejs.org/zh/"],
  },
  {
    key: "L13",
    text: "element-ui、vxe-table",
    parent: "L1",
    url: [
      "https://element.eleme.io/#/zh-CN",
      "https://vxetable.cn/#/table/base/basic",
    ],
  },
  {
    key: "L14",
    text: "class-component",
    parent: "L1",
    url: [
      "https://class-component.vuejs.org/",
      "https://github.com/kaorun343/vue-property-decorator",
    ],
  },
  { key: "R1", text: "其他", parent: "root", dir: "right" },
  {
    key: "R11",
    text: "React 16+",
    parent: "R1",
    url: [
      "https://react.docschina.org/",
      "https://cn.mobx.js.org/",
      "http://react-guide.github.io/react-router-cn/",
    ],
  },
  {
    key: "R12",
    text: "Vite、Webpack 配置",
    parent: "R1",
    url: [
      "https://vitejs.cn/config/",
      "https://www.webpackjs.com/configuration/",
    ],
  },
  {
    key: "R13",
    text: "Angular6+",
    parent: "R1",
    url: ["http://angular.cn/"],
  },
  {
    key: "R131",
    text: "ngzerro",
    parent: "R13",
    url: ["http://ng.ant.design/docs/introduce/zh"],
  },
  {
    key: "R14",
    text: "小程序",
    parent: "R1",
    url: ["https://developers.weixin.qq.com/miniprogram/dev/framework/"],
  },
  { key: "L2", text: "CSS(3)", parent: "root", dir: "right" },
  {
    key: "L21",
    text: "Sass",
    parent: "L2",
    url: ["https://www.sass.hk/", "https://less.bootcss.com/features/"],
  },
  { key: "L3", text: "版本部署", parent: "root", dir: "right" },
  {
    key: "L31",
    text: "Git、Svn",
    parent: "L3",
    url: ["https://git-scm.com/docs", "https://tortoisesvn.net/"],
  },
  {
    key: "L32",
    text: "Nginx",
    parent: "L3",
    url: ["http://nginx.org/en/docs/"],
  },
  {
    key: "R4",
    text: "ECMAScript",
    parent: "root",
    dir: "left",
    url: ["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"],
  },
  {
    key: "R42",
    text: "TypeScript",
    parent: "R4",
    url: ["https://www.tslang.cn/docs/handbook/basic-types.html"],
  },
  { key: "R41", text: "RxJS", parent: "R4", url: ["https://cn.rx.js.org/"] },
  {
    key: "R42",
    text: "Svg",
    parent: "R4",
    url: ["https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial"],
  },
  { key: "R3", text: "可视化", parent: "root", dir: "left" },
  {
    key: "R32",
    text: "*charts等",
    parent: "R3",
    url: [
      "https://echarts.apache.org/zh/index.html",
      "https://www.highcharts.com.cn/demo/highcharts",
    ],
  },
  {
    key: "R34",
    text: "GoJS、Fabric",
    parent: "R3",
    url: ["https://gojs.net/latest/", "http://fabricjs.com/"],
  },
  // { key: "R25", text: 'Muuri', parent: "R2", },
  // { key: "R26", text: 'Node', parent: "R2", },
];
