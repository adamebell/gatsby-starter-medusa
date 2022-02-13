import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CollectionPreview from "../components/categories/collection-preview"
import ProductListItem from "../components/products/product-list-item"
import Grid from "../components/utility/grid"
import SearchEngineOptimization from "../components/utility/seo"
import { useCollections } from "../hooks/use-collections"

const IndexPage = ({ data }) => {
  const { products, collections } = data
  const prods = data.products.edges.map(edge => edge.node)
  const collectionPreviews = useCollections(collections, products)

  return (
    <div>
      <SearchEngineOptimization title="Home" />
      <div className="bg-ui-light pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto">
          <StaticImage
            src="../images/grasping-nettles.png"
            alt="A yellow zine with green leaves around the outside titled Grasping Nettles [written by Adam Bell illustrated by Sashah Li]"
            placeholder="tracedSVG"
            className="w-full lg:w-1/2 h-auto"
          />
          <div>
            <h1 className="text-4xl">Grasping Nettles</h1>
            <h3 className="text-2xl">
            A small town lies stranded on the wrong half of a planet split in two.
            </h3>
            <p className="mt-2 text-lg font-normal">
            An isolated city of flame stands in defiance of a frozen wasteland. The moon colony established by the Apollo 11 mission finds life-lengthening compounds on its surface. A city explodes out of the Prismatic Sea at the convergence point of dozens of leylines.

            These worlds all sprung from games of Grasping Nettles, and the stories told about them were unpredictable and cool. The stranded town built a train to the other half of the planet. The city of flame overthrew their iceborne mercantile overlords. The new settlement on the moon held elections in an attempt to distance themselves from countries on Earth. And of course, the city in the Prismatic Sea succumbed to the power of the Shapechanger Witch Cartel.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl">
          Grasping Nettles is a worldbuilding game for 1-6 players about a community and its story over the course of generations.
        </h3>
        <p className="mt-2 text-lg font-normal">
          You take turns dictating various things about a world of your creation. On your turn, you move one of three faction pieces around a central game board called the Wheel and perform the action you land on. Actions include defining factions, describing locations, discovering issues, creating characters, starting projects, catching glimpses of other communities, and framing scenes.

          Once all game pieces land on the Generation action space, you look at everything created so far and describe how it changes over time. You can then continue to play to explore the next generation's effect on the world. By the end of the game, you have a whole history of a community brimming with factions, characters both living and dead, and locations where everything has happened.

          Playing a generation in Grasping Nettles typically takes about 1-2 hours depending on your play style. You can string together multiple generations of play in one session, or even come back to your world for multi-session play.
        </p>
        <h3 className="text-2xl">
          Quick Nettles get your game started when you don't want to create a world from nothing. 
        </h3>
        <p className="mt-2 text-lg font-normal">
          They take care of the first handful of turns in the game, replacing the Starting the Game steps with the seeds of an awesome world written ahead of time. The game contains the following worlds for you to explore:

            Cemetery by Jeremy Gage (@jeremygage5)
            Starless Autumn by mv (@mayvisit)
            The Villa of Ormen by AE Jonesy (@gravejones)
            Dharti by Charu Patel (@cherrydrop)
            Saurus City by Viditya Voleti (@vidityavoleti)
            Down on the Farm by Adam Bell (@adamebell) 

        You're of course welcome to write and release your own Quick Nettles—check out the Grasping Nettles Game Design Guide for more information on licensing for supplements, rules changes, or even full-blown hacks.
      </div>
      <div className="layout-base my-12 min-h-0">
        <Grid
          title={"Featured"}
          cta={{ to: "/products", text: "Browse all products" }}
        >
          {prods.slice(0, 4).map(p => {
            return <ProductListItem product={p} key={p.handle} />
          })}
        </Grid>
        <div className="mt-12">
          <Grid
            title="Shop by collection"
            cta={{ to: "/collections", text: "Browse all collections" }}
          >
            {collectionPreviews.slice(0, 4).map(collection => {
              return (
                <CollectionPreview
                  key={collection.id}
                  collection={collection}
                />
              )
            })}
          </Grid>
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  query {
    products: allMedusaProducts {
      edges {
        node {
          handle
          title
          collection_id
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          variants {
            prices {
              amount
              currency_code
            }
          }
        }
      }
    }
    collections: allMedusaCollections {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`

export default IndexPage
