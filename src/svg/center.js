import '../App.css';

export default function Center(props) {
    var color = props.on?'#e85d04':'none';
    return (
        <svg className='center bit' viewBox="0 0 246 76" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 36.5L37.5 1H209.5L244.5 36.5L205 75H39.5L1.5 36.5Z" stroke="black" />
        </svg>
    )
}