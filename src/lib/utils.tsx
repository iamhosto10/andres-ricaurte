import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PortableTextComponents } from "@portabletext/react";
import Link from "next/link";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <>
        <p className="whitespace-pre-line font-canva-sans text-secondary">
          {children}
        </p>
        <br />
      </>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-secondary font-canva-sans my-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-secondary font-canva-sans my-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium text-secondary font-canva-sans my-2">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside my-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside my-2 marker:font-bold">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      ) : (
        <Link
          href={href}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-secondary font-canva-sans">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded">
        {children}
      </code>
    ),
  },
};
