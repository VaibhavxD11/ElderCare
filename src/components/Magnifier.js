import React, { useState } from 'react';

function Magnifier(props) {
    const [isMagnified, setIsMagnified] = useState(false);

    const handleMouseEnter = () => {
        setIsMagnified(true);
    };

    const handleMouseLeave = () => {
        setIsMagnified(false);
    };

    const magnifiedStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        transform: 'scale(2)',
        transformOrigin: 'top left',
        zIndex: '9999'
    };

    const normalStyle = {
        position: 'relative'
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={isMagnified ? magnifiedStyle : normalStyle}
        >
            {props.children}
        </div>
    );
}

export default Magnifier;
