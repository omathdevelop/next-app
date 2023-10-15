import type { Metadata } from "next";
import getWiki from "@/libs/getWiki";
import Item from "./components/Item";
type Props = {
    params: {
        searchTerm: string
    }
}

export const generateMetadata = async ({ params: { searchTerm } }: Props):Promise<Metadata> => {
    const wikiData: Promise<SearchResult> = getWiki(searchTerm);
    const data = await wikiData;
    const displayTerm = searchTerm.replaceAll('%20', ' ');

    if(!data?.query?.pages) return {title:`${displayTerm} Not Found!`}
    return {title: displayTerm, description: `Search Result For ${displayTerm}`}
}

const SearchResult = async ({ params: { searchTerm } }: Props) => {
    const wikiData: Promise<SearchResult> = getWiki(searchTerm);
    const data = await wikiData;
    const results: Result<string, number>[] | undefined = data?.query?.pages;
    const errorMessage = <p className={'text-xl text-center p-2 bg-blue-300 m-2 text-red-400 animate-bounce duration-100 delay-75 mx-auto tracking-normal active:text-red-500'}>{`${searchTerm.replaceAll('%20', ' ')}`} Wiki Not Found!</p>
    const content = (
        <main className={'bg-blue-200 mx-auto max-w-lg py-1 min-h-screen'}>
            {results
                ? (
                    Object.values(results).map(result => result ?
                        (<Item key={result.pageid} result={result}/>) : (errorMessage))
                ) : (
                    errorMessage
                )}

        </main>
    )
    return content;

};

export default SearchResult;