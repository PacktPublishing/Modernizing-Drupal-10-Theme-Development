import parse from "html-react-parser"

interface FormattedTextProps {
  text?: string
}

export function FormattedText({ text }: FormattedTextProps) {
  if (!text) return null

  return <>{parse(text)}</>
}
