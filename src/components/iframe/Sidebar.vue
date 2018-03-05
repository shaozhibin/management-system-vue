<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'helloworld',
                        title: 'README'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '2',
                        title: '表单',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                index: 'progress',
                                title: '进度条'
                            }                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '3',
                        title: '表格',
                        subs: [
                            {
                                index: 'table',
                                title: '基础表格'
                            },
                            {
                                index: 'customizetable',
                                title: '自定义表格'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'echarts',
                        title: 'Echarts',
                        subs: [
                            {
                                index: 'line',
                                title: '线状图'
                            },
                            {
                                index: 'pie',
                                title: '饼状图'
                            },
                            {
                                index: 'bar',
                                title: '柱状图'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-upload',
                        index: 'upload',
                        title: '图片上传'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '6',
                        title: 'Notice',
                        subs: [
                            {
                                index: 'alert',
                                title: 'Alert'
                            },
                            {
                                index: 'loading',
                                title: 'Loading'
                            },
                            {
                                index: 'notice',
                                title: 'Notice'
                            },
                            {
                                index: 'dialog',
                                title: 'Dialog'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
    </style>
