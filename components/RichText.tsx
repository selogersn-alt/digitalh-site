import React from 'react'

export default function RichText({ content }: { content: any }) {
  if (!content || !content.root || !content.root.children) return null

  const renderText = (children: any[]) => {
    return children?.map((child: any, j: number) => {
      if (child.type === 'text') {
        let text = <span key={j}>{child.text}</span>
        if (child.format & 1) text = <strong key={j}>{text}</strong> // Bold
        if (child.format & 2) text = <em key={j}>{text}</em> // Italic
        return text
      }
      return null
    })
  }

  return (
    <div className="prose max-w-none space-y-4">
      {content.root.children.map((node: any, i: number) => {
        if (node.type === 'paragraph') {
          return (
            <p key={i} className="text-lg text-muted leading-relaxed">
              {renderText(node.children)}
            </p>
          )
        }
        if (node.type === 'list') {
          const Tag = node.listType === 'bullet' ? 'ul' : 'ol'
          return (
            <Tag key={i} className="list-disc list-inside text-muted space-y-2 ml-4">
              {node.children?.map((listItem: any, k: number) => (
                <li key={k}>{renderText(listItem.children)}</li>
              ))}
            </Tag>
          )
        }
        if (node.type === 'heading') {
          const Tag = node.tag as keyof JSX.IntrinsicElements
          return (
            <Tag key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">
              {renderText(node.children)}
            </Tag>
          )
        }
        return null
      })}
    </div>
  )
}
