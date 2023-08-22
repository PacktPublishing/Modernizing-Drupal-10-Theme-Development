import Image from "next/image"
import Link from "next/link"
import {DrupalNode} from "next-drupal"

import {absoluteUrl, truncate} from "lib/utils"
import {FormattedText} from "./formatted-text";

interface NodeTripTeaserProps {
  node: DrupalNode
}

export function NodeTripTeaser({node, ...props}: NodeTripTeaserProps) {
  return (
    <article {...props}>
      <div className="w-full overflow-hidden rounded-lg bg-white shadow">
        <div className="relative h-48">
          {node.field_picture && node.field_picture.field_media_image && (
            <Image
              className="object-cover"
              src={absoluteUrl(node.field_picture.field_media_image.uri.url)}
              fill
              alt={node.field_picture.field_media_image.resourceIdObjMeta.alt}
            />
          )}
        </div>

        <div className="p-4">
          <Link href={node.path.alias ?? ''} className="no-underline hover:text-blue-600">
            <h3 className="text-xl font-medium text-nord-1">{node.title}</h3>
          </Link>
          <div className="mt-1 text-nord-3"><FormattedText text={truncate(node.body.processed, 100)}/></div>
        </div>
      </div>
    </article>
  )
}
