Page({
  data: {
    headerH: 0,
    statusH: 0,
    tabH: 0,
    tabs: ["商店", "收藏"],
    activeTabIndex: 0,
    modalList: [
      {
        id: "1",
        name: "王勃",
        description: "落霞与孤鹜齐飞，秋水共长天一色",
        star: true,
      },
      {
        id: "2",
        name: "王勃",
        description: "落霞与孤鹜齐飞，秋水共长天一色",
        star: true,
      },
      {
        id: "3",
        name: "王勃",
        description: "落霞与孤鹜齐飞，秋水共长天一色",
        star: false,
      },
      {
        id: "14",
        name: "王勃",
        description: "落霞与孤鹜齐飞，秋水共长天一色",
        star: false,
      },
    ],
  },
  onLoad() {
    const { statusH, capsuleH, tabH } = getApp().globalData;
    this.setData({ headerH: statusH + capsuleH, statusH, tabH });
  },
  selectTab: function (e) {
    const index = e.target.dataset.index;
    this.setData({ ...this.data, activeTabIndex: index });
  },
});
