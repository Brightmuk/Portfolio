import '../App.css';

export default function Top(props) {
    var color = props.on?'black':'none';
    return (
        <svg className='top bit' width="91" height="23" viewBox="0 0 294 75" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M279 0.5H15L1 14.5L60.5 74.5H232.5L293 14.5L279 0.5Z" stroke="black" />
        </svg>
    )
}