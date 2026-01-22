import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { profiles } from "../../../data/profiles";
import { Clock } from "lucide-react";

interface ProfileContentProps {
  id: string;
}

export default function ProfileContent({ id }: ProfileContentProps) {
  const profile = profiles.find((profile) => profile?.id === id);

  return (
    <article className="prose prose-gray max-w-none">
      {/* Profile Last Updated */}
      <div className="flex items-center gap-1.5 mb-4 text-sm text-gray-600 italic font-medium">
        <Clock className="w-3.5 h-3.5" />
        <span>Last updated: {profile?.lastUpdated}</span>
      </div>
      {/* Profile Content */}
      {profile?.content ? (
        // Styling for markdown elements to match Wikipedia style
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Styling for H1 (profile name)
            h1: ({ children }) => (
              <h1 className="pb-2 border-b-2 border-pink-200 mb-6 text-4xl text-gray-900 font-bold">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="pb-1 border-b border-pink-200 pb-1 mb-4 mt-8 text-2xl text-gray-900 font-bold">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="pb-1 mt-6 mb-3 text-xl text-gray-900 font-bold">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mb-4 text-gray-900 leading-relaxed">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="space-y-2 mb-4 ml-6">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="text-gray-900">
                <span className="text-pink-600 mr-2">•</span>
                <span>{children}</span>
              </li>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 underline"
              >
                {children}
              </a>
            ),
          }}
        >
          {profile?.content}
        </ReactMarkdown>
      ) : (
        <p className="text-gray-900">Profile content coming soon...</p>
      )}
    </article>
  );
}
