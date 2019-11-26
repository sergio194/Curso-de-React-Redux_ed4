import React from "react";
import { Header } from "./components/Header";
import { Cardlist } from "./components/Cardlist";
export const App = () => (
    <div>
        <Header></Header>
        <Cardlist name="Lunes"></Cardlist>
        <Cardlist name="Martes"></Cardlist>
    </div>
)

