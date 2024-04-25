export const renderers = {
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-4 mb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-3 mb-1">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mt-2 mb-1">{children}</h4>,
    ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
};