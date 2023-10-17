import type { Metadata } from "next";
import Link from "next/link";
import getUsersLib from "@/libs/getUsersLib";
export const metadata:Metadata = {
    title: 'Users -> Route'
}


const Users = async () => {
    const userData:Promise<User<string, number>[]> = getUsersLib();
    const users = await userData;
     
    console.log('Hello From `@Server-Component`')
    const content = (
        <section>
            <h2>
                <Link href={'/'}>Back To Home</Link>
            </h2>
            <br/>
            {users.map(user => {
                const {id} = user;
             return (
                <>
                <p key={id}>
                    <Link href={`users/${id}`}>{user.name}</Link>
                </p>
                <br/>
                </>
             )
            })}
        </section>
    )
  return content
}

export default Users