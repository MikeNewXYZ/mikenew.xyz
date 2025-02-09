import type { Template } from "tinacms";
import { linkField } from "@/fields/link";

const welcomeHeroBlock: Template = {
	name: "welcomeHero",
	label: "Welcome Hero",
	ui: {
		defaultItem: () => ({
			topText: "Hello There",
			title: "I'm Mike",
			subtitle: "Experienced British Web Developer & Hobbyist Game Developer",
			link: {
				label: "Check Out My Blog",
				url: "/blog",
				isExternal: false,
			},
		}),
	},
	fields: [
		{
			name: "topText",
			label: "Top Text",
			type: "string",
		},
		{
			name: "title",
			label: "Title",
			type: "string",
		},
		{
			name: "subtitle",
			label: "Subtitle",
			type: "string",
		},
		linkField({ name: "link", label: "Link Button" }),
	],
};

export { welcomeHeroBlock };
