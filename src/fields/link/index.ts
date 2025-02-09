import type { TinaField } from "tinacms";
import { deepmerge } from "deepmerge-ts";

const linkField = (overrides: Partial<TinaField>): TinaField => {
	const link: TinaField = {
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
	};

	return deepmerge(link, overrides) as TinaField;
};

export { linkField };
