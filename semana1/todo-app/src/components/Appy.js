
import React, { useState } from 'react';
import Button from "./Buttony";
import '../styles/App.css';

// export default class Appy extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 0
//         }

//         // Opcion1 para bindear
//         // this.handleClick = this.handleClick.bind(this)
//     }

//     // state = {
//     //     value: 0
//     // }

//     // Opcion1 para bindear
//     // handleClick() {
//     //     console.log(this.state.value)
//     // }

//     // Opcion 2 para bindear
//     handleClick = () => {
//         this.setState({
//             value: this.state.value + 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <div className={"tdl-main_title-link"}>
//                     <h1 className="tdl-main_title">{this.state.value}</h1>
//                     <Button customOnClick={this.handleClick} />
//                 </div>
//             </div>
//         );
//     }
// }
const Appy = () => {
    const [value, setValue] = useState(0);
    const handleClick = () => {
        setValue(value + 1)
    }
    return (
        <div>
            <div className={"tdl-main_title-link"}>
                <h1 className="tdl-main_title">{value}</h1>
                <Button customOnClick={handleClick} />
            </div>
        </div>
    )
}

export default Appy 