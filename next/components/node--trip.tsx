import { DrupalNode } from "next-drupal"
import {FormattedText} from "./formatted-text";
import Image from "next/image";
import {absoluteUrl} from "../lib/utils";

interface NodeTripProps {
  node: DrupalNode
}

export function NodeTrip({ node, ...props }: NodeTripProps) {
  return (
    <article {...props} className="space-y-5">
      <h1 className="text-2xl font-bold text-nord-1">{node.title}</h1>

      <div className="relative h-96 ">
        {node.field_picture && node.field_picture.field_media_image && (
          <Image
            className="object-cover rounded-lg"
            src={absoluteUrl(node.field_picture.field_media_image.uri.url)}
            fill
            alt={node.field_picture.field_media_image.resourceIdObjMeta.alt}
          />
        )}
      </div>

      <div className="mt-4 prose prose-a:text-link max-w-none text-text">
        <FormattedText text={node.body.processed} />
      </div>
    </article>
  )
}
