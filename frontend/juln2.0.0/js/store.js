let $ = a=>document.querySelector(a)

let vue = new Vue({
    el: '#app',
    data: {
        storeInfo: null,
        htmlData: {
            topNavList: [
                '关于',
                '产品',
                '数据',
                '服务',
                '联系'
            ],
            banner: [
                {
                    id: 1,
                    imgSrc: './pictures/store-banner01.jpg',
                    title: '一键化定位',
                    details: ['经纬度']
                },
                {
                    id: 2,
                    imgSrc: './pictures/store-banner02.jpg',
                    title: '智能分析',
                    details: [
                        '搜寻最近定位地址',
                        '计算最短行程',
                        '分析实用性'
                    ]
                },
                {
                    id: 3,
                    imgSrc: './pictures/store-banner03.png',
                    title: '功能性查询',
                    details: ['周边, 物业主信息, 电话, 信息地址']
                }
            ]
        },
        cssData: {
            windowWidth: null,
        }
    },
    methods: {
        getQueryString(name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
            return unescape(r[2]);
            }
            return null;
        },
    },
    watch: {
        
    },
    mounted() {
        setTimeout(() => {

            // 获取所有要用到的数据
            this.storeInfo = JSON.parse(localStorage.getItem(this.getQueryString('id')))
            
            // 判断用户是不是直接通过不带参数的url访问当前页面的, 如果是,就提示用户不能这样
            if(this.getQueryString('id') === null || this.storeInfo === null) {
                alert('该网页无法直接访问哦(因为缺少storeId参数)')
            }

            // 响应式布局所依赖的代码
            this.cssData.windowWidth = window.innerWidth
            window.onresize = () => {
                this.cssData.windowWidth = window.innerWidth
            }

        }, 20);
    },
    computed: {
        
    },
})

let footerVue = new Vue({
    el: '#footer',
    data: {
        htmlData: {
            footer: [
                {
                    id: 0,
                    top: '关于我们',
                    items: [
                        '蜜蜂简介',
                        '企业文化',
                        '荣誉资质',
                        '社会责任',
                        '创意设计',
                        '蜜蜂展翅'
                    ]
                },
                {
                    id: 1,
                    top: '新闻动态',
                    items: [
                        '实时新闻',
                        '周边活动',
                        '媒体报道',
                        '新闻中心',
                        '品牌活动',
                        '合作伙伴'
                    ]
                },
                {
                    id: 2,
                    top: '快速链接',
                    items: [
                        '产品中心',
                        '服务中心',
                        '视频中心',
                        '经典案例',
                        '行业方案',
                        '联系我们'
                    ]
                }
            ]
        },
        cssData: {
            windowWidth: null,
        }
    },
    mounted() {
        setTimeout(() => {
            // 响应式布局所依赖的代码
            this.cssData.windowWidth = window.innerWidth
            window.onresize = () => {
                this.cssData.windowWidth = window.innerWidth
            }
        },20)
    },
})

// 曲线图
{
    echarts.init($('#echarts1')).setOption( {
            legend: {
                x: 'left',
                y: 20,
                data: [
                    {
                        name:'SALES',
                        icon: 'circle',
                        textStyle: {
                            color: 'red',
                        }
                    },
                    {
                        name:'VISITS',
                    },
                    {
                        name:'CLICKS',
                    }]
            },
            xAxis: {
                data: ["2018-01-01","2018-01-02","2018-01-03","2018-01-04","2018-01-05","2018-01-06"]
            },
            yAxis: {
                // data: [0,500,1000,1500,2000]
            },
            series: [{
                name: 'SALES',
                type: 'line',
                smooth: true,
                symbol: 'circle', // 拐点设置为实心
                symbolSize: 10, // 拐点大小
                itemStyle: { // 拐点
                    normal: {
                        color: 'green',
                        // borderColor: 'black'
                    }
                },
                lineStyle: { // 曲线
                    normal: {
                        color: 'green',
                        width: '2'
                    },
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            // 4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                            offset: 0,
                            color: 'rgb(58,219,27)'
                        }, 
                        {
                            offset: .2,
                            color: 'rgb(92,217,61)'
                        },
                        {
                            offset: .5,
                            color: 'rgb(184,238,169)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255,255,255)'
                        }])
                    }
                },
                data: [5, 20, 36, 10, 10, 20]
            }]
    } )
}

// 饼图
{
    echarts.init($('#echarts2')).setOption({
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data:[
                    {value:235, name:'视频广告'},
                    {value:274, name:'联盟广告'},
                    {value:310, name:'邮件营销'},
                    {value:335, name:'直接访问'},
                    {value:400, name:'搜索引擎'}
                ],
                roseType: 'angle',
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    })
}

// 雷达图
{
    echarts.init($('#echarts3')).setOption({
        tooltip: { // 提示框
          confine: true,
          backgroundColor: "#fff",
          textStyle: {
            color: "#333",
            fontSize: 16,
            lineHeight: 16
          },
          padding: 15,
          borderWidth: 1,
          borderColor: "e1e3ec",
          axisPointer: {
            drossStyle: {
              color: "#999"
            }
          },
          extraCssText: "box-shadow: 0 0 0.05rem 0 rgba(0, 0, 0, 0.1)" // 自定义属性
        },
        legend: { // 图例
            data: [
                '能力值',
                'xx值'
            ]
        },
        radar: { // 雷达图专用属性
            shape: "circle", // "polygon"多边形，"circle"圆型
            name: {
                textStyle: {
                    color: 'rgb(173,205,112)',
                    fontSize: 20,
                    padding: [3, 5]
                }
            },
            indicator: [ // 指示器
                {name: '文化', max: 100},
                {name: '生活', max: 100},
                {name: '娱乐', max: 100},
                {name: '流行', max: 100},
                {name: '科学', max: 100}
            ]
        },
        areaStyle: { // 区域填充样式。（不写，默认不绘制）
          color: "rgb(175,206,113)",
          opacity: 0.7, // 0时，为不绘制图形
        },
        series: [{
            name: '能力',
            type: 'radar',
            areaStyle: {normal: {}},
            data: [
                {
                    name: "能力值", 
                    value: [80, 90, 94, 85, 88],
                    itemStyle: {
                      normal: {
                        color: "rgb(100,100,100)" // 雷达构成的区域边框
                      }
                    }
                }
            ]
        }]
    })
}

// 雷达图示例
{
    echarts.init($('#echarts4')).setOption({
        tooltip: { // 提示框
          confine: true,
          backgroundColor: "#fff",
          textStyle: {
            color: "#333",
            fontSize: 16,
            lineHeight: 16
          },
          padding: 15,
          borderWidth: 1,
          borderColor: "e1e3ec",
          axisPointer: {
            drossStyle: {
              color: "#999"
            }
          },
          extraCssText: "box-shadow: 0 0 0.05rem 0 rgba(0, 0, 0, 0.1)" // 自定义属性
        },
        color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
        legend: { // 图例
          show: true,
          data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"]
        },
        radar: { // 雷达图专用属性
          shape: "circle", // "polygon"多边形，"circle"圆型
          name: {
            textStyle: {
              color: "#333",
              backgroundColor: "#fff",
              borderRadius: 3,
              fontSize: 16,
              padding: [3, 5]
            }
          },
          indicator: [ // 指示器
            { name: "销售（sales）", max: 6500 },
            { name: "管理（Administration）", max: 16000 },
            { name: "信息技术（Information Techology）", max: 30000 },
            { name: "客服（Customer Support）", max: 38000 },
            { name: "研发（Development）", max: 52000 },
            { name: "市场（Marketing）", max: 25000 }
          ],
          nameGap: 15, // 指示器名称和指示器轴的距离。
          splitNumber: 5, // 指示器轴的分割段数。
          axisLine: { // 坐标轴轴线相关设置。
            lineStyle: {
              color: "rgba(204, 204, 204, 0.5)"
            }
          },
          axisTick: { // 坐标轴刻度相关设置。
      
          },
          axisLabel: { // 坐标轴刻度标签的相关设置。
      
          },
          splitLine: { // 坐标轴在 grid 区域中的分隔线
            lineStyle: {
              color: "rgba(204, 204, 204, 0.5)"
            }
          },
          splitArea: { // 坐标轴在 grid 区域中的分隔区域 (背景色)
            show: false
          }
        },
        series: [{
          name: "预算 vs 开销（Budget vs spending）",
          type: "radar",
          symbol: "circle", // 标记的图形:"circle", "rect", "roundRect", "triangle", "diamond", "pin", "arrow", "none"
          symbolSize: 4,
          symbolRotate: 0, // 标记的旋转角度。注意在 markLine 中当 symbol 为 "arrow" 时会忽略 symbolRotate 强制设置为切线的角度。
          emphasis: { // 高亮的样式设置
            lineStyle: {
              width: 3,
              shadowOffsetX: 1,
              shadowOffsetY: 1,
              shadowBlur: 8,
              shadowColor: "rgba(0, 0, 0, 0.2)"
            }
          },
          areaStyle: { // 区域填充样式。（不写，默认不绘制）
            color: "#000",
            opacity: 0.1, // 0时，为不绘制图形
          },
          lineStyle: {
            normal: {
              width: 1
            }
          },
          //radarIndex: 0, // 多个雷达图时，分配数据用
          data: [{
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: "预算分配（Allocated Budget）",
              lineStyle: { // 样式可以单独设置，也可以一起设置
                normal: {
                  width: 2
                }
              },
              itemStyle: {
                normal: {
                  color: "#e82821"
                }
              }
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: "实际开销（Actual Spending）"
            }
          ]
        }]
      })
}