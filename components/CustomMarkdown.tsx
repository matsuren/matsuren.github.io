import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface CustomMarkdownProps {
  content: string;
  className?: string;
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
  };

  return (
    <div className={`max-w-none ${className}`}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        className=""
        components={customComponents}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default CustomMarkdown;
