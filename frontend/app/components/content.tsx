/**
 ** The Content component renders the dynamic contnent blocks of an entry.
 *
 */

import RichContent from "~/components/rich-content";
import type {
  BlockContentComponent,
  GridContentBlock,
  RichContentBlock,
} from "~/types";

export default function Content({
  content,
}: {
  content: BlockContentComponent[];
}) {
  return (
    <div className="flex flex-col space-y-4">
      {content.map((block) => {
        switch (block.__component) {
          case "content.rich-content":
            const { richContent } = block as RichContentBlock;
            return <RichContent content={richContent} />;
          case "content.grid":
            const { columns } = block as GridContentBlock;
            return <div>Grid: {columns} Columns</div>;
          default:
            return null;
        }
      })}
    </div>
  );
}
