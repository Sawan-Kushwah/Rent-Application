import React from "react";


const Map = ({ lat, lng, zoom = 15 }) => {
    const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

    return (
        <div style={{ width: "100%", height: "600px", marginBottom: '30px' }}>
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={mapSrc}
            ></iframe>
        </div>
    );
};

export default Map;
