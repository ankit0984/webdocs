import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
	// ... Add Nextra-specific options here
	defaultShowCopyCode: true,
	latex: {
		renderer: "katex",
		options: {
			macros: {
				"\\RR": "\\mathbb{R}",
			},
		},
	},
});

// Export the final Next.js config with Nextra included
export default withNextra({
	turbopack: {
		resolveAlias: {
			"next-mdx-import-source-file": "./src/mdx-components.tsx",
		},
	},
});

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
