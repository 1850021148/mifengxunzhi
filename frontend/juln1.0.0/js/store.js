let $ = a=>document.querySelector(a)

let storeId

let storeInfo

// 获取当前url中的id (storeId)
{
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
        return unescape(r[2]);
        }
        return null;
    }
    storeId = getQueryString('id')
}

storeInfo = JSON.parse()

// 判断用户是不是直接通过不带参数的url访问当前页面的, 如果是,就提示用户不能这样
{
    if(storeId === null || storeInfo === null) {
        alert('该网页无法直接访问哦(因为缺少storeId参数)')
    }
}

// 曲线图
{
    echarts.init($('#echarts')).setOption( {
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