import '../App.css';

export default function Bottom(props) {
    var color = props.on?'#e85d04':'none';
    return (
        <svg className='bottom bit' width="92" height="23" viewBox="0 0 294 76" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M1 61L61.5 1H232.5L292.5 61L278.5 75.5H15L1 61Z" stroke="black" />
        </svg>
    )
}

