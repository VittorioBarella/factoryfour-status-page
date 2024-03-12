import React, { useEffect, useState } from 'react';
import ApiStatusCard from '../ApiStatusCard/ApiStatusCard';
import '../../components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_NAMES = [
    'accounts' ,'assets', 'customers', 'datapoints', 'devices', 'documents', 'forms', 'invites',
'media', 'messages', 'namespaces', 'orders', 'patients', 'relationships', 'rules',
'templates', 'users', 'workflows'
];

const StatusPage = () => {
    const [apiStatuses, setApiStatuses] = useState([]);

    useEffect(() => {
        const fetchApiStatuses = async () => {
            try {
                const newStatuses = [];
                for (const apiName of API_NAMES){
                    let data;
                    try {
                        const response = await fetch(`https://api.factoryfour.com/${apiName}/health/status`);
                        data = await response.json();
                    } catch (error) {
                        data = { 
                            success: false, 
                            message: "Obsolete API: error 503", 
                            hostname: "obsolete", 
                            time: Date.now()
                        };
                    }
                    newStatuses.push({ apiName, ...data });
                }
                    setApiStatuses(newStatuses);
            } catch (error) {
                console.log('Error when fetching API status:', error);
            }
        };

        const intervalId = setInterval(fetchApiStatuses, 15000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container">
            <h1 className="mt-5 mb-4"> FactoryFour API Status </h1>
            <div className="row">
                { apiStatuses.map((status, index) => (
                    <ApiStatusCard key={index} {...status} />
                ))}
            </div>
        </div>
       
    );
};

export default StatusPage;