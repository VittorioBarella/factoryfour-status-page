import React from 'react';
import '../../components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApisStatusCard = ({ success, message, hostname, time , apiName }) => {
    const isObsolete = hostname === "obsolete";

    return (
        <div className="container d-flex justify-content-center">
            <div className={`api-status-card ${isObsolete ? 'obsolete' : (success ? 'success' : 'error')}`}>
                <h2>{isObsolete ? 'Obsolete API' : (success ? 'Operational' : 'Unavailable')}</h2>
                <p>Message: {message}</p>
                <p>API: {apiName}</p>
                {isObsolete ? null : (
                    <>
                        <p>Hostname: {hostname}</p>
                        <p>Last Update: {new Date(time).toDateString()}</p>
                    </>
                )}
            </div>
        </div>
        
    );
};

export default ApisStatusCard;