"use client";
import type { PageQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { WelcomeHero } from "@/blocks/WelcomeHero";


type PageBlocksProps = {
    data: PageQuery;
    variables: {
        relativePath: string;
    };
    query: string;
}

function PageBlocks(props: PageBlocksProps) {
    const {data} = useTina(props)

    return <>
        {data.page.blocks?.map((block, index) => {
            switch (block?.__typename) {
                case "PageBlocksWelcomeHero": {
                    return <WelcomeHero key={block?.__typename + index} {...block} />
                }
            }
        })}
    </>
}

export {PageBlocks}