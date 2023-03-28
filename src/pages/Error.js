import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="error-container">
            <h1>Something has gone wrong!</h1>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default ErrorPage;