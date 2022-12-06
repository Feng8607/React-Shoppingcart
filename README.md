# React-Shoppingcart
Create vite建立開發環境，這次的作品嘗試使用redux，來集中管理購物車的邏輯 把從購物車內增減商品、更新、清空購物車的邏輯
# 學習歷程
這個作品是購物車，這次的專案中因為不是大型專案，所以redux在做這個專案上不是必要的，但因為想學習redux用法，所以購物車的操作，主要採用redux
1. 使用 react-redux, redux 來集中管理多個 component 都可能會使用到的 State (cart)，這次的專案主要是掌握Store、Action、Reducer這些基本的概念，但如果想進一步透過 Redux 處理非同步、API 請求等進階需求，就會使用到 Redux Middleware來解決原生redux只能做出同步任務的問題。
2. 提交表單後，這次沒有配合後端來存取客戶資料，所以提交後的客戶表單存在localstorage，來讓客戶做最後確認，最後送出為了客戶資料
的隱私，所以我在送出按鈕中設定把localstorage全部清除。
3. 另外隨著資料庫日後如果資料越來越龐大，還有製作搜尋功能，使用filter來達到搜尋的功能
4. 之後隨著更多的資料，還會新增篩選功能
# Live Demo
網站:https://digitalshopping.netlify.app/

![image](https://github.com/Feng8607/React-Shoppingcart/blob/master/shoppingcartDemo.png)

# 使用技能
- React
- React Router
- React-redux
- redux
- Swiper
- SCSS
# 圖片來源
- 數碼寶貝畫冊https://digimon.net/reference_zh-CHT/
- google圖片
