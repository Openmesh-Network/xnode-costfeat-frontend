/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react'
import { AccountContext } from '@/contexts/AccountContext'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { EyeSlash, Eye } from 'phosphor-react'
import DataProductAPIConnection from './DataProductAPIConnectionModal'
// import GetEquinixAPIKey from './GetEquinixAPIKey'

export interface ModalI {
  dataProductId: string
}

const DataProductAPIConnectionMain = ({ dataProductId }: ModalI) => {
  const { user, setUser } = useContext(AccountContext)

  // Validation Cloud API connection
  if (dataProductId === 'bb0fcfde-dbb6-4b06-ac1d-86d69cf5d39b') {
    return (
      <div>
        <div className="mt-[20px] text-[8px] font-bold  text-[#959595]  md:mt-[36px]  md:text-[10px] lg:mt-[42px] lg:text-[12px] lg:!leading-[19px] 2xl:mt-[52px]  2xl:text-[16px]">
          API connection
        </div>

        <div className="mt-[20px] grid gap-y-[35px] 2xl:gap-y-[45px]">
          <DataProductAPIConnection
            connectionEndpoint="connectValidationCloudAPIEthereum"
            helpLink="https://docs.validationcloud.io/v1/about/node-api"
            title="Connect your Ethereum Validation Cloud key"
            userApiKey="validationCloudAPIKeyEthereum"
            imageSrc=""
          />
          <DataProductAPIConnection
            connectionEndpoint="connectValidationCloudAPIPolygon"
            helpLink="https://docs.validationcloud.io/v1/about/node-api"
            title="Connect your Polygon Validation Cloud key"
            userApiKey="validationCloudAPIKeyPolygon"
            imageSrc=""
          />
        </div>
      </div>
    )
  }
  return <div></div>
}

export default DataProductAPIConnectionMain
