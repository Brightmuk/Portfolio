import '../css/App.css';

export default function BottomRight(props) {
    var color = props.on?'#e85d04':'none';
    return (
        <svg className='bottom-right bit'viewBox="0 0 75 269" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 36L35.5 1.5L74.5 41V254.5L60 268L0.5 209V36Z" stroke="black" />
        </svg>
    )
}