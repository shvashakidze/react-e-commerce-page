import React from "react";
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    
    
    render() {
        const onSuccess =(payment) =>{
            console.log("the payment was successed!", payment);
        };

        const onCancel = (data) => {
            console.log("the payment was canceled!", data);
        };
        
        const onError = err => {
            console.log("Error!", err)
        };
        let env = "sandbox";
        let currency = "USD";
        let total = 1;
        const client = {
            sandbox: 'AbXKZMJLsWLwVhFNI67tfuOPRKKIWmkguUyTrJrA2pjbz7ZpCSy15ZX-m2jovuDrj_FLztWFRQADGwhZ',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn 
            env={env}
            client={client} 
            currency={currency}
            total={total}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel} 
            />
        );
    }
}