import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"

import { drupal } from "lib/drupal"
import { Layout } from "components/layout"
import { NodeTripTeaser } from "components/node--trip--teaser"

interface IndexPageProps {
  trips: DrupalNode[]
}

export default function IndexPage({ trips }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div className="mt-10 space-y-5">
        <h1 className="text-2xl font-bold text-nord-1">Latest Trips</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {trips?.length ? (
            trips.map((node) => (
              <div key={node.id}>
                <NodeTripTeaser node={node} />
              </div>
            ))
          ) : (
            <p className="py-4">No nodes found</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const params = new DrupalJsonApiParams()
    .addFields("node--trip", ["title", "body", "field_picture", "path"])
    .addInclude(["field_picture.field_media_image"])
    .addFilter("status", "1")
    .addSort("title", "ASC")
    .addPageLimit(10)

  const trips = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--trip",
    context,
    {
      params: params.getQueryObject(),
    }
  )

  return {
    props: {
      trips: trips,
    },
  }
}
