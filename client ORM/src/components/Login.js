import React, { useRef } from "react";
import axios from "axios";

export default function Login() {
    const input1 = useRef();
    const input2 = useRef();
    async function clickhandler() {
        console.log(input1.current.value);
        console.log(input2.current.value);
        const obj = {
            email: input1.current.value,
            password: input2.current.value,
        };
        await axios.post(`/api/auth/login`, obj).then((res) => {
            if (res.status === 200) {
                window.location = "/";
            }
        });
    }

    return (
        <div>
            <input ref={input1}></input>
            <input ref={input2}></input>
            <button onClick={clickhandler}>submit</button>
        </div>
    );
}
