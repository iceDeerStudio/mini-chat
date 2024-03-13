App({
    globalData: {
        statusH: 0,
        capsuleH: 0,
        tabH: 0,
    },
    /**
     * 在App示例上注册工具函数
     * 并初始化全局变量
     */
    onLaunch() {
        // 获取底栏高度
        this.getTabbarH = function () {
            let bottomBarHeight
            wx.getSystemInfo({
                success: function (res) {
                    // 获取底栏高度
                    bottomBarHeight = res.screenHeight - res.windowHeight
                },
            })
            return bottomBarHeight
        }

        // 获取胶囊栏高度
        this.getCapsuleBarH = function () {
            let capsuleBarHeight
            wx.getSystemInfo({
                success: function (res) {
                    // 获取状态栏高度
                    let statusBarHeight = res.statusBarHeight

                    // 获取胶囊按钮位置信息
                    let menuButtonInfo = wx.getMenuButtonBoundingClientRect()

                    // 计算胶囊栏高度
                    capsuleBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height
                },
            })
            return capsuleBarHeight
        }

        // 获取状态栏高度
        this.getStatusBarH = function () {
            let statusBarHeight
            wx.getSystemInfo({
                success: function (res) {
                    // 获取状态栏高度
                    statusBarHeight = res.statusBarHeight
                },
            })
            return statusBarHeight
        }
        this.globalData = {
            ...this.globalData,
            statusH: this.getStatusBarH(),
            capsuleH: this.getCapsuleBarH(),
            tabH: this.getTabbarH(),
        }
    },
})
