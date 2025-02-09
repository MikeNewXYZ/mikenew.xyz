import type { Template } from "tinacms";

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
		{
			name: "link",
			label: "Link Button",
			type: "object",
			fields: [
				{
					name: "label",
					label: "Label",
					type: "string",
					required: true,
				},
				{
					name: "url",
					label: "Url",
					type: "string",
					required: true,
				},
				{
					name: "isExternal",
					label: "Open New Tab",
					type: "boolean",
					ui: {
						component: "toggle",
					},
				},
			],
		},
	],
};

export { welcomeHeroBlock };
