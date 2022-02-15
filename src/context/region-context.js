import { graphql, useStaticQuery } from "gatsby"
import React, { createContext, useEffect, useReducer } from "react"

const defaultRegionContext = {
  region: undefined,
  /**
   * @type {string}
   */
  regions: [],
  updateRegion: () => {},
}

const RegionContext = createContext(defaultRegionContext)
export default RegionContext

const ACTIONS = {
  UPDATE_REGION: "UPDATE_REGION",
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_REGION:
      return {
        ...state,
        region: action.payload.region,
      }
    default:
      break
  }
}

const REGION = "medusa_region"

export const RegionProvider = props => {
  const [state, dispatch] = useReducer(reducer, defaultRegionContext)

  const data = useStaticQuery(graphql`
    {
      allMedusaRegions {
        edges {
          node {
            id
            name
            currency_code
            tax_rate
            countries {
              display_name
              id
              iso_2
              iso_3
              name
              num_code
              region_id
            }
          }
        }
      }
    }
  `)

  const regions = data.allMedusaRegions.edges.map(edge => edge.node)

  useEffect(() => {
    const initRegion = () => {
      if (localStorage) {
        const regionJSON = localStorage.getItem(REGION)

        if (regionJSON) {
          const region = JSON.parse(regionJSON)
          updateRegion(region)
        } else {
          updateRegion(regions[0])
        }
      }
    }

    initRegion()
  }, [])

  const updateRegion = region => {
    localStorage.setItem(REGION, JSON.stringify(region))
    dispatch({
      type: ACTIONS.UPDATE_REGION,
      payload: { region: region },
    })
  }

  return (
    <RegionContext.Provider
      {...props}
      value={{ ...state, regions, updateRegion }}
    />
  )
}
