<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-02 16:59:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-09-05 18:01:25
 * @FilePath: \top-glob\pages\news.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
    import axios from 'axios';
    import { isMobile } from '@/utils/tools.js';
    onMounted(() => {
	    isMobileLayout.value = isMobile();
    });
    const isMobileLayout = ref(false);
    const activeName = ref('1');
    const handleClick = (tab, event) => {
        console.log(tab, event)
    };
    const fakeApiData = [
    {
            title: "已下单",
            content: "已下单預報content",
            createTime: "2024-07-06 09:22:13",
        },
        {
            title: "已配载",
            content: "已配载預報content",
            createTime: "2024-07-06 10:22:13",
        },
        {
            title: "已报关检验",
            content: "已报关检验content",
            createTime: "2024-07-11 10:22:13",
        },
    ];

    // const statusList = ref([
    //     {
    //         title: "已下单",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "已配载",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "已报关检验",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "已报关放行",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "已开船",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "已到港",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "已靠港",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "已清关检验",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "已清关放行",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "预计到达国外仓库",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "已到仓",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "配送中",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     },
    //     {
    //         title: "已签收",
    //         content: "",
    //         createTime: "",
    //         isActive: false,
    //     }
    // ]);
    const statusList = ref([])
    const inputVal = ref('')
    const search = async() => {
        if (!inputVal.value) {
            alert("尚未輸入集運單號");
            return;
        };
        // inputVal.value
        getOrder(inputVal.value);
    };
    const getOrder = async(number: string) => {

        // try {


        //     // 使用代理來發送 API 請求
        //     const response = await axios.post('/api/v1/user/member/waybill/searchDetailV2', {
        //         number: number
        //     },
        //     {
        //         headers: {
        //             "Content-Type": "application/json",
        //             'EnterpriseNo': "TGE"
        //         },
        //     });
        //     console.log(response.data)
        // } catch (error) {
        //     console.error('獲取數據出錯:', error);
        // }
        // return;
        const url = "http://jingya.api.8bami.com/v1/user/member/waybill/searchDetailV2";

        fetch(url, {
            method: "POST", // or 'PUT'
            body: JSON.stringify({ number }),
            headers: {
            "Content-Type": "application/json",
            'EnterpriseNo': "TGE"
            },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then(response => {

            let res: Array<any> = [];
            if (!response.result) {
                alert(response.message);
                res = [];
            } else {
                res = [...response.result.tracks];
            };
            // 比對
            // statusList.value.forEach(item => {
            //     item.isActive = false;
            //     let resObj = res.find(findItem => findItem.title == item.title);
            //     if (resObj) {
            //         for (let obj in item) {
            //             item[obj] = resObj[obj];
            //             item.isActive = true;
            //         };
            //     };
            // });
            statusList.value = res.map(mapItem => {
                return {
                    title: mapItem.title,
                    content: mapItem.content,
                    createTime: mapItem.createTime,
                    isActive: true,
                };
            });
        });
    };
    const  getLastGroupTimeLineIndex = () => {
        // Find the index of the last item with 'group-time-line' class
        for (let i = statusList.value.length - 1; i >= 0; i--) {
            if (statusList.value[i].isActive) {
            return i;
            }
        }
        return -1; // If no active item found
    };
    const tableData = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
    ]
</script>
<template>
    <section>
        <div :class="isMobileLayout ? '' : 'wrap'">
            <div class="title">單號查詢</div>
            <el-row justify="space-between" :gutter="20" style="align-items: center">
                <el-col :span="24">
                    <el-tabs
                        v-model="activeName"
                        type="card"
                        class="demo-tabs"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane label="貨運單號查詢" name="1">
                            <section>
                                <div style="margin-bottom: 32px;">
                                    <el-input v-model="inputVal" style="width: 240px; margin-right: 8px;" placeholder="請輸入集運單號" />
                                    <el-button type="primary" @click="search()">查詢</el-button>
                                </div>
                                <!-- <el-timeline style="max-width: 600px">
                                    <el-timeline-item
                                        v-for="(status, index) in statusList.filter(filterItem => filterItem.isActive)"
                                            :key="index"
                                            :timestamp="status.content"
                                            :color="status.isActive ? '#409eff' : ''"
                                            :class="[
                                                'el-timeline-item',
                                                status.isActive ? 'group-time-line' : '',
                                                { 'no-border': status.isActive && index === getLastGroupTimeLineIndex() }
                                            ]"
                                        >
                                        
                                        {{ status.title }}
                                    </el-timeline-item>
                                </el-timeline> -->
                                <el-table :data="statusList.filter(filterItem => filterItem.isActive)" stripe style="width: 100%" border>
                                    <el-table-column prop="createTime" label="作業時間" width="180" />
                                    <el-table-column label="貨物狀態" width="180">
                                        <template #default="scope">
                                            <el-button plain type="success" round>{{ scope.row.title }}</el-button>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="content" label="貨物細項" />
                                </el-table>
                            </section>
                        </el-tab-pane>
                        <el-tab-pane label="集運單號查詢" name="2">
                            <section>
                                此功能尚未開放，敬請期待
                            </section>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<style>
.wrap {
    width: 1080px;
    margin: 0px auto;
}
.title {
    display: flex;
    align-items: center;
    line-height: 42px;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
}

.title::before {
    /* border-left: 2px solid rgb(32, 151, 219); */
    content: " ";
    display: inline-block;
    width: 4px;
    height: 24px;
    background-color: rgb(32, 151, 219);
    margin-right: 8px;
}

.text-limit {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 设置最大行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.two-lines {
  height: 40px; /* 假设每行高度为20px，总高度为两行 */
  line-height: 20px; /* 设置行高为每行高度的一半，使得文本垂直居中 */
  overflow: hidden; /* 如果文本超出容器高度，隐藏溢出部分 */
}

.group-time-line .el-timeline-item__tail {
  border-left: 2px solid #409eff;
}

/* 最后一个拥有 .group-time-line 类的元素不显示左边的边框 */
.el-timeline-item.no-border .el-timeline-item__tail {
    border-left: 1px solid #409eff;
}
</style>