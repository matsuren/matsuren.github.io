import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

interface CustomMarkdownProps {
  content: string;
  className?: string;
}
interface CodeProps {
  children?: React.ReactNode;
  className?: string;
  inline?: boolean;
}
// Type for the link component props
type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode;
  href?: string;
};

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({
  content,
  className = "",
}) => {
  const customComponents = {
    // Custom link component
    a: ({ children, ...props }: CustomLinkProps) => {
      if (props.href?.includes("http")) {
        props.target = "_blank";
        props.rel = "noopener noreferrer";
        return (
          <a {...props} className=" hover:text-blue-600 underline">
            {children}
          </a>
        );
      }

      return (
        <a {...props} className=" hover:text-purple-600 underline">
          {children}
        </a>
      );
    },
    // Custom code block component
    code: ({ inline, className, children, ...props }: CodeProps) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={dracula}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code
          className={`bg-gray-200 dark:bg-gray-700 px-1 rounded ${className}`}
          {...props}
        >
          {children}
        </code>
      );
    },
  };

  return (
    <div className={`max-w-none ${className}`}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        className=""
        components={customComponents}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default CustomMarkdown;
