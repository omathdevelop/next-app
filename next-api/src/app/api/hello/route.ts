import { NextResponse } from "next/server"
import { limiter } from "../config/limiter"
export const GET = async(request: Request) => {
  const origin = request.headers.get('origin');
  const remaining = await limiter.removeTokens(1);
  console.log({remaining});

   if(remaining < 0) return new NextResponse(null, {
    status: 429,
    statusText: "Way Too Many Request",
    headers: {
      'Access-Control-Allow-Origin': origin || '*',
      'Content-Type': 'text/plain'
    }
   })
  return NextResponse.json({"message": "Hi And Welcome `@omathdevelop`"})
}
