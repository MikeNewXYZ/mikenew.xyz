"use client";
import type { PagesQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { WelcomeHero } from "@/blocks/WelcomeHero";

type PageBlocksProps = {
	data: PagesQuery;
	variables: {
		relativePath: string;
	};
	query: string;
};

function PageBlocks(props: PageBlocksProps) {
	const { data } = useTina(props);

	return (
		<>
			{data.pages.blocks?.map((block, index) => {
				switch (block?.__typename) {
					case "PagesBlocksWelcomeHero": {
						return <WelcomeHero key={block?.__typename + index} {...block} />;
					}
				}
			})}
		</>
	);
}

export { PageBlocks };
