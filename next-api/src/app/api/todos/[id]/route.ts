import { NextResponse } from "next/server";
const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';
type Props = {
    params: {
        id: string
    }
}
export const GET = async (req: Request, { params: { id } }: Props) => {
    console.log({ REQ_URL: req.url });
    // const id = req.url.slice(req.url.lastIndexOf('/') + 1)
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
    const todo: Todo<string, number, boolean> = await res.json();
    if (!todo.id || todo.id > 200) return NextResponse.json({ "message": "Todo Not Found!" })
    return NextResponse.json(todo);
};