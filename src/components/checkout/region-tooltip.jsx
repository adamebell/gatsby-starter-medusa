import React from "react"
import Field from "../forms/field"
import { TinyLetter, Email, Submit } from 'react-tinyletter'
import styled from 'styled-components'




const regionTooltip = () => {
  return (
          <div class="py-10 h-full w-full">
              <div class="container mx-auto px-6 flex flex-col items-start pl-12 md:pl-0 md:items-center">
                  <div class="h-0 md:h-12"></div>
                      <div class="flex-col md:flex-row flex items-center md:justify-center">
                          <a  tabindex="0" role="link" aria-label="tooltip 2" class="focus:outline-none focus:ring-gray-300 rounded-full focus:ring-offset-2 focus:ring-2 focus:bg-gray-200 relative my-28 md:my-0 md:mx-64" onmouseover="showTooltip(2)" onfocus="showTooltip(2)" onmouseout="hideTooltip(2)">
                              <div class="info-button cursor-pointer">
                                  <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <circle cx="12" cy="12" r="9" />
                                      <line x1="12" y1="8" x2="12.01" y2="8" />
                                      <polyline points="11 12 12 12 12 16 13 16" />
                                  </svg>
                              </div>
                              <div id="tooltip2" role="tooltip" class="hidden z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-indigo-700 p-4 rounded">
                                  <svg class="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                          <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#4c51bf">
                                              <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                  <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                      <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5"></polygon>
                                                  </g>
                                              </g>
                                          </g>
                                      </g>
                                  </svg>
                                  <p class="text-sm font-bold text-white pb-1">Don't see your country listed?</p>
                                  <p class="text-sm leading-4 text-white pb-3">Head back to the home page to select the correct region.</p>
                              </div>
                          </a>
                      </div>
                  <div class="h-12"></div>
              </div>
          </div>
  )
}



export default regionTooltip


