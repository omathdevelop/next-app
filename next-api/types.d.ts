type FeedBack<T> = {
    name:T
    email:T
    message:T
}

type Todo<T, NT, BT> = {
    userId:NT
    id:NT
    title:T
    completed:BT
}