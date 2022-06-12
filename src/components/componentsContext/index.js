import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Child from "./child";
import Child2 from "./child2";
import Child22 from "./child22";
import Child3 from "./child3";
import ValueContext, { ValueProvider } from "./context";

class Utama extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {

        return (
            <div>
                <ValueProvider >
                    
                    <Routes>
                        <Route path='/' element={<Child />}>
                            <Route path='child' element={<Child2 />} >
                                <Route index element={
                                    <main style={{padding : "1rem"}}>
                                        <p>Pilih Salah Satu</p>
                                    </main>
                                }/>
                                <Route path=":childId" element={<Child22/>}/>
                            </Route>
                            <Route path='child2' element={<Child3 />} />
                            
                        {/* <Child />
                        <Child2 /> */}
                        </Route>
                        <Route path="*" element={
                            <main style={{padding : '1rem'}}>
                                <p> Kosong</p>
                            </main>
                        }/>
                    </Routes>
                </ValueProvider >
            </div>
        )
    }
}
export default Utama