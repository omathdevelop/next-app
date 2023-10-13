import { Suspense } from "react";
import getUserLib from "@/libs/getUserLib";
import getUserPost from "@/libs/getUserPost";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
type Params<T> = {
    params: {
        userId: T
    }
}

export const generateMetadata = async ({ params: { userId } }: Params<string>):Promise<Metadata> => {
    const userData: Promise<User<string, number>> = getUserLib(userId);
    const user:User<string, number> = await userData;
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