# neutec-recruit-exam
日新軟體 前端工程師面試

# 實體展示連結
* 基礎需求:https://piepie-resume.openinfo.info/demo

# 安裝環境
* vue         3.3.4
* vue-router  4.2.5
* vuex        4.0.2

# 基礎需求
* 主頁面-側邊選單收合按鈕
    * src/components/layout/nav-bar.vue
    * 使用 vuex 的功能傳遞是否開啟 sidebar
* 主頁面-九宮格動畫
    * src/views/demo.vue
    * 使用 grid 與 gap 的方式排好九宮格
    * 使用 keyframes 的方式執行方塊閃爍以及小球移動
    * 使用偽元素的方式讓小球不會跟著閃爍
* 側邊選單
    * src/components/layout/sidebar.vue
    * 使用 click listener 的方式監聽是否點擊其他區域以關閉 sidebar
    * 使用 components 的方式讓選單實現多層
    * 使用 v-bind 的方式 highlight 被選取的項目