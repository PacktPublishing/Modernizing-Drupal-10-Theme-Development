import Image from "next/image"
import { DrupalNode } from "next-drupal"

import { absoluteUrl, formatDate } from "lib/utils"

interface NodeTripProps {
  node: DrupalNode
}

export function NodeTrip({ node, ...props }: NodeTripProps) {
  console.log(node.field_picture.field_media_image);
  return (
    <article {...props}>

    </article>
  )
}
