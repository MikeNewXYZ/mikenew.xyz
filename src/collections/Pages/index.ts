import type { Collection } from "tinacms";
import { welcomeHeroBlock } from "@/blocks/WelcomeHero/config";

const PagesCollection: Collection = {
	name: "page",
	label: "Pages",
	path: "content/pages",
	format: "json",
	ui: {
		router: ({ document }) => {
			if (document._sys.filename === "home") {
				return "/";
			}
			return `/${document._sys.filename}`;
		},
	},
	fields: [
		{
			name: "title",
			label: "Title",
			type: "string",
		},
		{
			name: "blocks",
			label: "Blocks",
			type: "object",
			list: true,
			templates: [welcomeHeroBlock],
		},
	],
};

export { PagesCollection };
