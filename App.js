import React from "react";
import ReactDOM from "react-dom/client";

const Title = (
    <h1 className="head" tabIndex="5">
        Namaste React JSX 🚀
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        {Title}
        <h2 className="head" tabIndex="5">
            Namaste React Functional Component 🚀
        </h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);