import ReactMarkdown from 'react-markdown'

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-invert prose-lg max-w-none
      prose-headings:text-white prose-headings:font-bold
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-gray-300 prose-p:leading-relaxed
      prose-strong:text-white prose-strong:font-semibold
      prose-a:text-accent-light prose-a:no-underline hover:prose-a:underline
      prose-ul:text-gray-300 prose-ol:text-gray-300
      prose-li:text-gray-300 prose-li:marker:text-accent-light
    ">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}