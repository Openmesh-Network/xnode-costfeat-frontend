'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import Footer from '../Footer'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css' // import styles
import './react-quill.css'
import dataOptions from './data'
import { display } from '@mui/system'
type provider = {
  name: string
  list?: string[]
}

type subSelectionOption = {
  name: string
  plataform?: any
}

interface ModalI {
  data: string
  providers: provider[]
  onBack(): void
  subSelectionOption: subSelectionOption
}

const DisplayCost = ({
  data,
  providers,
  subSelectionOption,

  onBack,
}: ModalI) => {
  const [newMessageHtml, setNewMessageHtml] = useState('')
  const [nextStep, setNextStep] = useState<boolean>(false)
  const [isHRVisible, setHRVisible] = useState(false)
  const [xnodevisible, setxnodevisible] = useState({
    NodeOperator: 'flex',
    Data: 'none',
  })
  function findItemProvider(data: any) {
    for (let i = 0; i < data.length; i++) {
      // console.log('the providers')
      // console.log(providers)
      // console.log('the subSelectionOption')
      // console.log(subSelectionOption)

      if (data[i].name === subSelectionOption.name) {
        return data[i]
      }
    }
  }

  function getProviderValue(provider) {
    return findItemProvider(data)?.plataform[provider.name]?.at(1) || 0
  }

  const completeProviders = (providerlist) => {
    const datao = []
    providerlist.map((value, index) => {
      const test = dataOptions[data][subSelectionOption.name][value]
      test.name = value
      datao.push(test)
    })
    return datao
  }
  const completedProviders = completeProviders(providers)
  // Antes de renderizar os provedores, ordene-os:
  const sortedProviders = completedProviders.sort((a, b) => {
    return a.Cost - b.Cost
  })

  function calculateTaxForBars(name) {
    const valueFinal = {}
    for (let i = 0; i < completedProviders.length; i++) {
      valueFinal[completedProviders[i]?.name] =
        parseInt(completedProviders[i][name]) || 0
    }
    return normalizeValues(valueFinal)
  }

  // normalize 0 to 100
  function normalizeValues(obj: { [key: string]: number }) {
    const values = Object.values(obj) as number[]

    const maxValue = Math.max(...values)

    const objNormalizado: { [key: string]: number } = {}
    for (const chave in obj) {
      objNormalizado[chave] = Number(((obj[chave] / maxValue) * 100).toFixed(2))
    }
    objNormalizado.xnode = Number(((30 / maxValue) * 100).toFixed(2))

    return objNormalizado
  }
  function calcularGradiente(percentual) {
    const inicioVermelho = Math.max(0, (percentual - 50) * 2)

    if (percentual >= 0.9) {
      return `linear-gradient(to right, rgb(18, 173, 80) 0%, rgb(18, 173, 80) ${inicioVermelho}%, rgb(255, 0, 0) 100%)`
    } else if (percentual >= 0.7) {
      return `linear-gradient(to right, rgb(18, 173, 80) 0%, rgb(18, 173, 80) ${inicioVermelho}%, rgb(204, 59, 59) 100%)`
    } else if (percentual >= 0.5) {
      return `linear-gradient(to right, rgb(18, 173, 80) 0%, rgb(18, 173, 80) ${inicioVermelho}%, rgb(204, 107, 59) 100%)`
    } else {
      return `linear-gradient(to right, rgb(18, 173, 80) 0%, rgb(18, 173, 80) ${inicioVermelho}%, rgb(125, 191, 75) 100%)`
    }
  }

  useEffect(() => {
    setHRVisible(true)
  }, [])

  return (
    <>
      <div className="max-w-[100%]">
        <div className="h-fit max-w-[590px] cursor-pointer rounded-[10px] border-[1px] border-[#A4A4A4] py-[18px] px-[20px] text-[14px] font-bold text-[#000]  hover:bg-[#e9e9e949] lg:text-[20px]">
          <div className="flex justify-between gap-x-[110px]">
            <div>
              <div>{subSelectionOption.name}</div>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            className="mt-[56px] h-fit max-w-[50%] cursor-pointer gap-x-[100px] rounded-[10px] border-[1px] border-[#A4A4A4] py-[18px] px-[20px]"
            style={{
              width: '90%',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              marginRight: '20px',
            }}
          >
            <h1 style={{ paddingBottom: '30px' }}>Price</h1>
            {sortedProviders.map((provider, index) => (
              <div
                key={index}
                className="flex justify-between text-[14px] font-bold text-[#AEAEAE] lg:text-[20px]"
              >
                <div className="mb-[10px] flex items-center gap-x-[12px]">
                  <div className="w-[150px]">
                    <div>{provider.name}</div>
                  </div>
                  <div
                    className={`origin-left transform transition-transform duration-[1200ms] ease-out ${
                      isHRVisible ? 'scale-x-100' : 'scale-x-0'
                    } flex w-[300px] gap-x-[20px] 2xl:w-[500px]`}
                  >
                    <div
                      style={{
                        width: `${calculateTaxForBars('Cost')[provider.name]}%`,
                        height: '25px',
                        background: calcularGradiente(
                          calculateTaxForBars('Cost')[provider.name] / 100,
                        ),
                      }}
                    ></div>
                    <div className="text-[18px] font-normal text-[#000]">
                      {provider['Cost'].toFixed(2) || '0.00'}$
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second set of bars */}
          <div
            className="mt-[56px] h-fit max-w-[50%] cursor-pointer gap-x-[100px] rounded-[10px] border-[1px] border-[#A4A4A4] py-[18px] px-[20px]"
            style={{
              width: '90%',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '20px',
            }}
          >
            <h1 style={{ paddingBottom: '30px' }}>
              Time for Deployment (Minutes)
            </h1>

            {sortedProviders.map((provider, index) => (
              <div
                key={index}
                className="flex justify-between text-[14px] font-bold text-[#AEAEAE] lg:text-[20px]"
              >
                <div className="mb-[10px] flex items-center gap-x-[12px]">
                  <div className="w-[150px]">
                    <div>{provider.name}</div>
                  </div>
                  <div
                    className={`origin-left transform transition-transform duration-[1200ms] ease-out ${
                      isHRVisible ? 'scale-x-100' : 'scale-x-0'
                    } flex w-[300px] gap-x-[20px] 2xl:w-[500px]`}
                  >
                    <div
                      style={{
                        width: `${calculateTaxForBars('Time')[provider.name]}%`,
                        height: '25px',
                        background: calcularGradiente(
                          calculateTaxForBars('Time')[provider.name] / 100,
                        ),
                      }}
                    ></div>
                    <div className="text-[18px] font-normal text-[#000]">
                      {parseInt(provider['Time']).toFixed(2) || '0.00'}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              key="openmesh"
              className="justify-between text-[14px] font-bold text-[#AEAEAE] lg:text-[20px]"
              style={{ display: xnodevisible[data] }}
            >
              <div className="mb-[10px] flex items-center gap-x-[12px]">
                <div className="w-[150px]">
                  <div>Xnode</div>
                </div>
                <div
                  className={`origin-left transform transition-transform duration-[1200ms] ease-out ${
                    isHRVisible ? 'scale-x-100' : 'scale-x-0'
                  } flex w-[300px] gap-x-[20px] 2xl:w-[500px]`}
                >
                  <div
                    style={{
                      width: `${calculateTaxForBars('Time').xnode}%`,
                      height: '25px',
                      background: calcularGradiente(
                        calculateTaxForBars('Time').xnode / 100,
                      ),
                    }}
                  ></div>
                  <div className="text-[18px] font-normal text-[#000]">
                    {parseInt('30').toFixed(2) || '0.00'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[170px] ml-[30px]">
          <div
            onClick={onBack}
            className="w-fit cursor-pointer rounded-[5px] bg-[#0354EC] px-[40px] py-[12px] text-[14px] font-bold text-[#FFFFFF] hover:bg-[#023ca7] lg:text-[20px]"
          >
            Compare more
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayCost
