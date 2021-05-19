import React from "react";

const Header = React.memo(({ title }) => {
    return <h3>📝 {title} 📝</h3>;
});

export default Header;
