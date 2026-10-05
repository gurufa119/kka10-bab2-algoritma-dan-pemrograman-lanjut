import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math?: string;
  text?: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, text, block = false, className = '' }) => {
  // If direct math expression is provided
  if (math !== undefined) {
    try {
      const html = katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
      return (
        <span
          className={`inline-block font-serif ${className}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      return <code className={`font-mono text-sm ${className}`}>{math}</code>;
    }
  }

  // If mixed text containing $...$ or $$...$$ is provided
  const renderedContent = useMemo(() => {
    if (!text) return null;

    // Split text by $$...$$ (block) and $...$ (inline)
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const formula = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(formula, {
            displayMode: true,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="block my-2 overflow-x-auto py-1"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <pre key={index} className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-sm my-1 overflow-x-auto">
              {formula}
            </pre>
          );
        }
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const formula = part.slice(1, -1).trim();
        try {
          const html = katex.renderToString(formula, {
            displayMode: false,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="inline-block mx-0.5"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <code key={index} className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">
              {formula}
            </code>
          );
        }
      } else {
        // Plain text
        return <span key={index}>{part}</span>;
      }
    });
  }, [text]);

  return <span className={className}>{renderedContent}</span>;
};
