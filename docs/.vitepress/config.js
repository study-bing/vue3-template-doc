const nav = []
const sidebar = [
    {
        text: "指南",
        items: [
            { text: "介绍", link: "/指南/01.介绍" },
            { text: "快速上手", link: "/指南/02.快速上手" },
            { text: "目录结构", link: "/指南/03.目录结构" },
            { text: "项目配置", link: "/指南/04.项目配置" },
            { text: "请求接口", link: "/指南/05.接口" },
            { text: "项目打包", link: "/指南/06.项目打包" },
        ],
    },
    {
        text: "相关链接",
        link: "",
        items: [
            {
                text: "element-plus",
                link: "https://element-plus.org/zh-CN/#/zh-CN",
            },
            {
                text: "vueUse",
                link: "https://vueuse.org/core/usetransition/#demo",
            },
            {
                text: "NProgress",
                link: "https://ricostacruz.com/nprogress/",
            },
            {
                text: "Vue3",
                link: "https://v3.cn.vuejs.org/",
            },
            {
                text: "pinia",
                link: "https://pinia.vuejs.org/",
            },
            {
                text: "Vue-Router",
                link: "https://router.vuejs.org/zh/",
            },
            {
                text: "vxe-table",
                link: "https://vxetable.cn/#/table/start/quick",
            },
        ],
    },
]

export default {
    title: "vue3-template-doc",
    description: "vu3模板文档",
    themeConfig: {
        nav,
        sidebar,
    },
}
