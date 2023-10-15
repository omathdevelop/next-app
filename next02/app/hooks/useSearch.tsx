'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ChangeEvent, FormEvent } from "react";
const useSearch = () => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();
    const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`)
    };
    const onSearch = (e:ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

    const Form = (
        <form
            className={'w-50 flex justify-center md:justify-between'}
            onSubmit={onSubmit}
        >
            <input
                type={'text'}
                value={search}
                onChange={onSearch}
                className={'bg-white p-2 w-80 text-xl rounded-xl'}
                placeholder={"search wiki"}
            />
            <button type={'submit'} className={'p-2 text-xl rounded-xl bg-blue-300 ml-2'}>
               ▶
            </button>
        </form>
    );
    return Form
};

export default useSearch;
