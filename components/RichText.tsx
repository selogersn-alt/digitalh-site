import React from 'react'

export default function RichText({ content }: { content: any }) {
  if (!content || !content.root || !content.root.children) return null

  const renderText = (children: any[]) => {
    return children?.map((child: any, j: number) => {
      if (child.type === 'text') {
        let text = <span key={j}>{child.text}</span>
        if (child.format & 1) text = <strong key={j}>{text}</strong>
        if (child.format & 2) text = <em key={j}>{text}</em>
        return text
      }
      return null
    })
  }

  const renderHeading = (node: any, i: number) => {
    const cls = "text-2xl font-bold text-foreground mt-8 mb-4"
    const children = renderText(node.children)
    if (node.tag === 'h1') return <h1 key={i} className={cls}>{children}</h1>
    if (node.tag === 'h2') return <h2 key={i} className={cls}>{children}</h2>
    if (node.tag === 'h3') return <h3 key={i} className={cls}>{children}</h3>
    if (node.tag === 'h4') return <h4 key={i} className={cls}>{children}</h4>
    if (node.tag === 'h5') return <h5 key={i} className={cls}>{children}</h5>
    return <h6 key={i} className={cls}>{children}</h6>
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
          return renderHeading(node, i)
        }
        return null
      })}
    </div>
  )
}
