type Props = {
    promise: Promise<Post<string, number>[]>
};

const UserPosts = async ({promise}:Props) => {
 const postData = await promise;
    const data = (
        <>
        <div>
            <h2>Posts</h2>
            <br/>
            {postData.map((post) => {
              const {id, title, body} = post;
                return <div key={id}>
                     <h2>{title}</h2>
                     <br/>
                     <p>{body}</p>
                </div>
            })}
        </div>
        </>
    )
  return data;
}

export default UserPosts