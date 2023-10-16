'use client';
import type { FormEvent, ChangeEvent, CSSProperties } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useSubmitFeedBack from "@/custom/hooks/useSubmitFeedBack";
const initialState: FeedBack<string> = {
    name: '',
    email: '',
    message: ''
}
const useFeedBackData = () => {
    const [data, setData] = useState<FeedBack<string>>(initialState);
    const { name, email, message } = data;
    const router = useRouter();

    const onSumit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(JSON.stringify(data));
        const { name, email, message } = data;
        const resData = await useSubmitFeedBack({ name: name, email: email, message: message })
        console.log(JSON.stringify(resData));
        router.push('/thank-you')
    };

    const onDataChanges = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
   
    const container:CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap:'.5rem',
        padding: '.5rem',
        marginTop: '.75rem'
    }
    const inputStyles: CSSProperties = {
        padding: '1rem',
        marginBottom: '.5rem',
        backgroundColor: 'AppWorkspace',
        color: 'gray'
    };
    const buttonStyles:CSSProperties = {
        padding: '.5rem',
        backgroundColor: 'InfoBackground',
        border: '2px solid AppWorkspace',
    }

    const form = (
        <form style={container} onSubmit={onSumit}>
            <p>
            <input
                style={inputStyles}
                type={'text'}
                name={'name'}
                value={name}
                onChange={onDataChanges}
                placeholder="Enter Your Name"
            />
            </p>
            <p>
            <input
                style={inputStyles}
                type={'email'}
                name={'email'}
                value={email}
                onChange={onDataChanges}
                placeholder="Enter Your Email Address"
            />
            </p>
            <p>
            <input
                style={{ padding: '4rem 1rem', backgroundColor: 'AppWorkspace', color: 'gray' }}
                type={'text'}
                name={'message'}
                value={message}
                onChange={onDataChanges}
                placeholder="Write us a message"
            />
            </p>
            <p>
            <button style={buttonStyles} type={'submit'}>send</button>
            </p>
        </form>
    )

    return form;
}

export default useFeedBackData;