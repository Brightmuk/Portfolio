import '../App.css';

export default function BottomLeft(props){
    var color = props.on?'#e85d04':'none';
    return(
        <svg className="bottom-left bit" viewBox="0 0 76 269" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M1 38L38.5 1L75 38V208L16 268L1 253V38Z" stroke="black"/>
        </svg>
    )
}


