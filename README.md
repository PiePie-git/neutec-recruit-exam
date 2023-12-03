# neutec-recruit-exam
日新軟體 前端工程師面試

# 實體展示連結
* 基礎需求 - https://piepie-resume.openinfo.info/demo
* 額外需求 - https://piepie-resume.openinfo.info/advanced_demo

# 安裝環境
* vue         3.3.4
* vite        4.5.0
* vue-router  4.2.5
* vuex        4.0.2

# 基礎需求
* 主頁面-側邊選單收合按鈕
    * src/components/layout/nav-bar.vue
    * 使用 vuex 的功能儲存參數，以判斷是否開啟 sidebar
* 主頁面-九宮格動畫
    * src/views/demo.vue
    * 使用 grid 與 gap 的方式排好九宮格
    * 使用 keyframes 的方式執行方塊閃爍以及小球移動
    * 使用偽元素的方式讓小球不會跟著閃爍
* 側邊選單
    * src/components/layout/sidebar.vue
    * 使用 click listener 的方式監聽是否點擊其他區域以關閉 sidebar
    * 使用 components 的方式讓選單實現多層
    * 選取選單後呼叫 toggleEnable function，將選取的項目 enable
    * 使用 v-bind 的方式 highlight 被選取的項目

# 額外需求
###### 主頁面九宮格動畫 - src/views/advanced_demo.vue
* 請使用兩種以上的動畫執行方式，來繪製動畫
    * 同時使用了 vue 提供的 transition 组件與直接 css 呼叫 animation 的方式，製作了球的移動、變色與抖動的動畫
* 四顆球同時朝同一個座標點移動
    * 利用 transition-group 组件，並生成4顆不同位置的球，執行移動到某一定點動畫
* 請在效能考量下，設計可同時存在一百顆球、且指定飛行起終點的結構 (無demo)
    * 我會使用 Vue Transition Group 的方式來處理，且使用 array object 的方式儲存資料，每顆球都有對應的起點與終點
    * Vue Transition Group 可以更有效地管理大量元素的動畫效果，同時減少對DOM的操作
###### 側邊選單 - 
* 另提供一個下拉選單，需包含所有種類。從下拉選單中選取任一項目時，等同點擊該項目
    * 使用 select option 製作下拉式選單
    * 使用 template 的方式呈現多層選單，也可以將 template 包裝成 component (由於基礎需求已示範過，固不再示範)
    * 使用 vue 提供的 watch 監聽下拉選單是否被選取，選取後回饋至上方 toggle 選單
* 請實作記憶功能，關閉分頁後再開啟，可以顯示上次選取的項目
    * 在選取選項的時候，使用 localStorage 的方式將參數存下來
    * 在mounted載入時判斷是否有已存的 localStorage ，有的話就讀取使用
* 請在效能考量下，設計可收合、展開最多一百層的選單 (無demo)
    * 使用 components 的方式即可讓選單實現一百層，如同我在基礎需求展示的方式並使用 v-if 判斷收合，即可達到在效能條件下收合、展開一百層的選單