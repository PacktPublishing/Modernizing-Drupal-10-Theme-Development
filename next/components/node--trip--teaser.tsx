import Image from "next/image"
import Link from "next/link"
import { DrupalNode } from "next-drupal"

import { absoluteUrl, formatDate } from "lib/utils"

interface NodeTripTeaserProps {
  node: DrupalNode
}

export function NodeTripTeaser({ node, ...props }: NodeTripTeaserProps) {
  return (
    <article {...props}>
      <Link href={node.path.alias ?? ''} className="no-underline hover:text-blue-600">
        <h2 className="mb-4 text-4xl font-bold">{node.title}</h2>
      </Link>
      {node.field_image && (
        <figure className="my-4">
          <Image
            src={absoluteUrl(node.field_picture.uri.url)}
            width={768}
            height={480}
            alt={node.field_picture.resourceIdObjMeta.alt}
          />
        </figure>
      )}
    </article>
  )
}
