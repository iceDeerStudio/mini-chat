App({
    onLaunch() {
        /**
         * 这个钩子用于定义全局函数（wx对象上）
         */

        // 获取底栏高度
        wx.getTabbarH = function () {
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
        wx.getCapsuleBarH = function () {
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
        wx.getStatusBarH = function () {
            let statusBarHeight
            wx.getSystemInfo({
                success: function (res) {
                    // 获取状态栏高度
                    statusBarHeight = res.statusBarHeight
                },
            })
            return statusBarHeight
        }
    },
})
