Page({
    data: {
        image: 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/empty__demo-image.png',
    },
    goEmptyPage() {
        wx.navigateTo({ url: './empty-page' });
    },
});
