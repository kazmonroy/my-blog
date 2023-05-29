import Iframe from 'sanity-plugin-iframe-pane';
export type { DefaultDocumentNodeResolver } from 'sanity/desk';

import { DefaultDocumentNodeResolver } from 'sanity/desk';

import { SanityDocument } from 'sanity';

// Customise this function to show the correct URL based on the current document
// function getPreviewUrl(doc: SanityDocument) {
//   return doc?.slug?.current
//     ? `${window.location.host}/${doc.slug.current}`
//     : `${window.location.host}`;
// }

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000/'
          }api/preview`,
          defaultSize: `desktop`,
          reload: {
            button: true,
          },
        })
        .title('Preview'),
    ]);
  }
};
