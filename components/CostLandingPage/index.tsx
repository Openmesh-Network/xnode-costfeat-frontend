/* eslint-disable dot-notation */
'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import Footer from '../Footer'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css' // import styles
import './react-quill.css'
import DisplayCost from './DisplayCost'
import dataOptions from './data'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const CostLandingPage = () => {
  const [newMessageHtml, setNewMessageHtml] = useState('')
  const [nextStep, setNextStep] = useState<boolean>(false)
  const [selectionOptionSelected, setSelectionOptionSelected] = useState({
    name: 'NodeOperator',
  })
  const [subSelectionOptionSelected, setSubSelectionOptionSelected] = useState({
    name: 'Solana(RPC)',
  })
  const [providerSelectionOptionSelected, setProviderSelectionOptionSelected] =
    useState([])

  const selectionOptions = [
    {
      name: 'NodeOperator',
    },
  ]

  const selectionOptionsTosubSelectionOptions = {
    NodeOperator: dataOptions['NodeOperator'],
  }

  const providersSelectionOptions = []

  function findItemProvider(itemName: string) {
    console.log('the item is' + itemName)
    console.log('what is me: ' + providerSelectionOptionSelected[0])
    const exists = providerSelectionOptionSelected.findIndex(
      (provider) => provider === itemName,
    )
    console.log(exists)
    if (exists === -1) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div className="flex h-full px-[50px]  pb-[40px] text-[16px]  font-normal  text-[#000] lg:text-[20px]">
        <div className="flex h-full w-full rounded-xl bg-[#F9F9F9] px-[45px] pt-[75px] shadow-md">
          <div>
            <div className="text-[18px] lg:text-[26px]">Price comparison</div>
            <div className="mt-[54px] flex gap-x-[50px]">
              {selectionOptions.map((option, index) => (
                <div
                  onClick={() => {
                    setSelectionOptionSelected(option)
                    setNextStep(false)
                  }}
                  key={index}
                  className={`h-fit cursor-pointer text-[14px] font-bold text-[#AEAEAE] hover:text-[#000] lg:text-[20px] ${
                    selectionOptionSelected?.name === option.name &&
                    '!text-[#000000]'
                  }`}
                >
                  {option.name}
                </div>
              ))}
            </div>
            {nextStep ? (
              <div className="mt-[30px]">
                <DisplayCost
                  data={selectionOptionSelected.name}
                  providers={providerSelectionOptionSelected}
                  subSelectionOption={subSelectionOptionSelected}
                  onBack={() => {
                    setNextStep(false)
                  }}
                />
              </div>
            ) : (
              <div>
                <div className="mt-[66px] flex gap-x-[50px]">
                  <div className="grid max-h-[500px] gap-y-[43px] overflow-y-auto pr-[30px] scrollbar-thin scrollbar-track-[#11132470] scrollbar-thumb-[#0e101f91] scrollbar-track-rounded-full scrollbar-thumb-rounded-md">
                    {Object.keys(
                      selectionOptionsTosubSelectionOptions[
                        selectionOptionSelected.name
                      ],
                    ).map((subOption, index) => (
                      <div
                        onClick={() => {
                          setSubSelectionOptionSelected({ name: subOption })
                          setProviderSelectionOptionSelected([])
                        }}
                        key={index}
                        className={`h-fit max-w-[590px] cursor-pointer rounded-[10px] border-[1px] border-[#A4A4A4] py-[18px] px-[20px] text-[14px] font-bold text-[#000]  hover:bg-[#e9e9e949] lg:text-[20px]`}
                      >
                        <div className="flex justify-between gap-x-[20px] xl:gap-x-[110px]">
                          <div>
                            {' '}
                            <div>{subOption}</div>
                          </div>
                          <div
                            className={`my-auto h-[22px] w-[22px] flex-shrink-0 rounded-full border-[1px] border-[#939191] ${
                              subSelectionOptionSelected?.name === subOption &&
                              '!border-[#0354EC] bg-[#0354EC]'
                            }`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex min-h-[100%] w-[1px] bg-[#000]"></div>
                  <div className="text-[18px] font-bold text-[#AEAEAE] lg:text-[26px]">
                    <div>Pick providers to compare</div>
                    <div className="mt-[60px] grid gap-y-[43px]">
                      {Object.keys(
                        selectionOptionsTosubSelectionOptions[
                          selectionOptionSelected.name
                        ][subSelectionOptionSelected.name],
                      ).map((providerOption, index) => (
                        <div
                          onClick={() => {
                            const providers = [
                              ...providerSelectionOptionSelected,
                            ]
                            const exists = providers.findIndex(
                              (provider) => provider === providerOption,
                            )
                            if (exists === -1) {
                              setProviderSelectionOptionSelected([
                                providerOption,
                                ...providerSelectionOptionSelected,
                              ])
                            } else {
                              providers.splice(exists, 1)
                              setProviderSelectionOptionSelected(providers)
                            }
                          }}
                          key={index}
                          className={`text-[14px] font-bold text-[#AEAEAE] lg:text-[20px]`}
                        >
                          <div className="flex items-center gap-x-[12px]">
                            <div
                              className={`my-auto h-[47px]   w-[47px] cursor-pointer rounded-[5px]  border-[1px] border-[#939191] hover:bg-[#93919159] ${
                                findItemProvider(providerOption) &&
                                '!border-[#0354EC] !bg-[#0354EC]'
                              }`}
                            ></div>
                            <div>
                              {' '}
                              <div>{providerOption}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-[80px] ml-[30px]">
                  <div
                    onClick={() => {
                      setNextStep(true)
                    }}
                    className="w-fit cursor-pointer rounded-[5px] bg-[#0354EC] px-[60px] py-[12px] text-[14px] font-bold text-[#FFFFFF] hover:bg-[#023ca7] lg:text-[20px]"
                  >
                    Compare
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CostLandingPage
