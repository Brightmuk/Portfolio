import '../App.css';

export default function TopLeft(props) {
    var color = props.on?'#e85d04':'none';
    return (
        <svg className='top-left bit' viewBox="0 0 77 270" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M1 15L16 1L76 60.5V231L38 268.5L1 231V15Z" stroke="black" />
        </svg>
    )
}