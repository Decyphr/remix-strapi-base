import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export default function RichContent({ content }: { content: BlocksContent }) {
  return (
    <div className="prose">
      <BlocksRenderer content={content} />
    </div>
  );
}
