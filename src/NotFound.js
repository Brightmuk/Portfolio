import { Link } from "react-router-dom";
import './css/App.css';

export default function NotFound(){
    return (
        <div className="not-found">
            <h1>OOps!</h1>
            <h2>Page Not Found</h2>
            <p>Go back <Link className="link" to ="/">Home</Link></p>
        </div>
    );
}