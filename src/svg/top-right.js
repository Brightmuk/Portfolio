import '../App.css';

export default function TopRight(props) {
    var color = props.on?'#e85d04':'none';
    return (
        <svg className='top-right bit'viewBox="0 0 76 269" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M60.5 1L1 60.5V232.5L36.5 267.5L75 229V15.5L60.5 1Z" stroke="black" />
        </svg>
    )
}