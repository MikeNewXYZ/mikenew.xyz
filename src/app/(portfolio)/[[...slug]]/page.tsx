import client from "@tina/__generated__/client";
import { PageBlocks } from "@/components/PageBlocks";

export const dynamicParams = false;

export async function generateStaticParams() {
	const pagesResponse = await client.queries.pagesConnection();

	if (!pagesResponse.data.pagesConnection.edges) {
		throw new Error("Pages Collection is empty");
	}

	const pageSlugs = pagesResponse.data.pagesConnection.edges.map((page) => {
		if (!page?.node) {
			throw new Error("Page in Pages Collection is empty");
		}

		const fileName = page.node._sys.filename;
		const slug = fileName === "home" ? undefined : [fileName];

		return { slug: slug };
	});

	return pageSlugs;
}

type PageProps = {
	params: Promise<{ slug: string[] }>;
};

async function Page({ params }: PageProps) {
	const { slug } = await params;
	const pageResults = await client.queries.pages({
		relativePath: slug ? "home.json" : `${slug[0]}.json`,
	});

	return <PageBlocks {...pageResults} />;
}

export default Page;
