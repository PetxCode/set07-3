import React from 'react';
import { usePaystackPayment } from 'react-paystack';




function App() {

    const config: any = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'pk_live_2732df7378e84dbe0013bb9fd7f00faad438e244',
    };

    const onSuccess = () => {


    };

    const onClose = () => {


    }
    const initializePayment = usePaystackPayment(config);
    return (
        <div>

            <div>
                <button onClick={() => {
                    initializePayment(onSuccess, onClose)
                }}>Paystack Hooks Implementation</button>
            </div>
        </div>
    );
}

export default App;