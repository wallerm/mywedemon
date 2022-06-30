Page({
    data: {
        value: [1, 2, 3, 3.5, 4, 5, 3, 3, 3, 3, 3, 3, 2.5],
        texts: ['1分', '2分', '3分', '4分', '5分'],
    },
    onChange(e) {
        const { index } = e.currentTarget.dataset;
        const { value } = e.detail;
        this.setData({
            [`value[${index}]`]: value,
        });
    },
});
