"use client";
import { Stack } from "@/utils";

async function getPLP(props: any) {
    // console.log(props)
    if(props.searchParams?.live_preview) Stack.livePreviewQuery(props.searchParams)
    const res = await Stack.ContentType("category_plp_vis_nav").Query().where("url", `/${props.param}`).toJSON().find();
    return res[0][0]
}

// onLiveEdit(getPLP)
export default async function Page(props: any) {
    const pageData = await getPLP(props);

    return (
        <div>
            <h1>{pageData?.title}</h1>
        </div>
    );
}
