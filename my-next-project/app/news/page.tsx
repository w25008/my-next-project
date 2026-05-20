import { getNewsList } from "../_libs/microcms";
import NewList from "@/app/components/NewsList";

export default async function Page(){
    const {contents:news}=await getNewsList();

    return <NewList news={news}/>;
}