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
      <div>
        <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>
        {trips?.length ? (
          trips.map((node) => (
            <div key={node.id}>
              <NodeTripTeaser node={node} />
              <hr className="my-20" />
            </div>
          ))
        ) : (
          <p className="py-4">No nodes found</p>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const params = new DrupalJsonApiParams()
    .addFields("node--trip", ["title", "body", "field_picture", "path"])
    .addFilter("status", "1")
    .addSort("created", "DESC")

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
