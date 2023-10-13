import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import getUserLib from "@/libs/getUserLib";
import getUsersLib from "@/libs/getUsersLib";
import getUserPost from "@/libs/getUserPost";
import UserPosts from "./components/UserPosts";
type Params<T> = {
    params: {
        userId: T
    }
}

export const generateMetadata = async ({ params: { userId } }: Params<string>):Promise<Metadata> => {
    const userData: Promise<User<string, number>> = getUserLib(userId);
    const user:User<string, number> = await userData;
    if (!user.name){
        return {
            title: 'User Not Found!'
        }
    }
    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}
const User = async ({ params: { userId } }: Params<string>) => {
    const userData: Promise<User<string, number>> = getUserLib(userId);
    const userPostData: Promise<Post<string, number>[]> = getUserPost(userId);

    // const [user, userPosts] = await Promise.all([userData, userPostData]);
   
    const user = await userData
    if(!user.name) {
        return notFound()
    }
    const data = (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>loading....</h2>}>
                <UserPosts promise={userPostData} />
            </Suspense>
        </>
    );
    return data

}

export default User

export const generateStaticParams = async() => {
const userData:Promise<User<string, number>[]> = getUsersLib();
const users = await userData;
const data = users.map(user => ({userId: user.id.toString()}));
return data;
}