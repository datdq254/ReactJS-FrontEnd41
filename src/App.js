import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeaderRFC from "./components/HeaderRFC";
import BaiTapDanLayOut from "./components/BaiTapDanLayOut/BaiTapDanLayOut";
import DataBinding from "./dataBinding/DataBinding";

function App() {
    return( 
    <div className = "App" > 
        {/* để gọi component ta tạo ra ta chỉ cần gọi tên màu vàng của class đó nó sẽ tự import thư viện cho ta */}
        {/* <BaiTapDanLayOut></BaiTapDanLayOut> */}
        <DataBinding></DataBinding>
    </div>
    );
}

export default App;