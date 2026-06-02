import { getNewsList } from "../_libs/microcms";
import NewsList from "@/app/components/NewsList";
import Pagination from "../components/Pagination";
import SearchField from "../components/SearchField";
import { NEWS_LIST_LIMIT } from "../constants";

export default async function Page({ searchParams }: { searchParams?: { page?: string } }){
    const current = parseInt(searchParams?.page || '1', 10) || 1;

    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (current - 1),
    });

    return (
        <>
            <SearchField/>
            <NewsList news={news} />
            <Pagination totalCount={totalCount} current={current} />
        </>
    );
}
