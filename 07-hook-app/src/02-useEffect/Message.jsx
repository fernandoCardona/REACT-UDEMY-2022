import { useEffect, useState } from "react";


export const Message = () => {

    useEffect(() => {
        console.log('Message Mounted')
        return () => {
            console.log('Message Unmounted')
        };
    }, []);


    return (
        <div>
            <h3 className="alert alert-danger text-center">Usuario ya existe</h3>

        </div>
    )
}
