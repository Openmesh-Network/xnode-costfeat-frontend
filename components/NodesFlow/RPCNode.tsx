/* eslint-disable no-unused-vars */
import React, { memo, useState, useContext } from 'react'
import { Handle, useReactFlow, useStoreApi, Position } from 'reactflow'
import withProps from './withProps'
import { AccountContext } from '@/contexts/AccountContext'

const options = [
  {
    value: 'smoothstep',
    label: 'Smoothstep',
  },
  {
    value: 'step',
    label: 'Step',
  },
  {
    value: 'default',
    label: 'Bezier (default)',
  },
  {
    value: 'straight',
    label: 'Straight',
  },
]

function Select({ value, handleId, nodeId }) {
  const { setNodes } = useReactFlow()
  const store = useStoreApi()

  const onChange = (evt) => {
    const { nodeInternals } = store.getState()
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: evt.target.value,
            },
          }
        }
        return node
      }),
    )
  }

  return (
    <div className="custom-node__select">
      <div>Edge Type</div>
      <select
        className="nodrag rounded-[6px] bg-[#D9D9D9]"
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Handle type="source" position={Position.Right} id={handleId} />
    </div>
  )
}

function Options({ handleId, optionsSelection, nodeId }) {
  const { setNodes } = useReactFlow()
  const store = useStoreApi()
  const [selected, setSelected] = useState<any>('Ethereum')
  const { finalNodes, setFinalNodes } = useContext(AccountContext)

  function handleSelection(value: string) {
    setSelected(value)
    const savedNodes = JSON.parse(localStorage.getItem('nodes') || '[]')
    const updatedNodes = savedNodes.map((node) => {
      if (node.id === nodeId) {
        return {
          ...node,
          data: {
            ...node.data,
            chain: value,
          },
        }
      }
      return node
    })
    localStorage.setItem('nodes', JSON.stringify(updatedNodes))
    setFinalNodes(updatedNodes)
  }

  return (
    <div className="">
      <select
        className="nodrag mt-[15px] min-w-[85px] rounded-[6px] bg-[#D9D9D9] font-normal md:min-w-[104px] lg:min-w-[120px] xl:min-w-[138px] 2xl:min-w-[172px]"
        onChange={(option) => handleSelection(option.target.value)}
        value={selected}
      >
        {optionsSelection.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

function RPCNode({ id, data, handleNodeRemove }) {
  const handleClick = () => {
    handleNodeRemove(id)
  }
  return (
    <>
      <div className="relative rounded-[20px] border-[0.5px] border-[#C1C1C1] bg-[#fff] py-[7px]  px-[10px]  pb-[23px] pr-[17px] text-[8px]  text-[#000] md:py-[8.4px] md:px-[12px] md:pb-[15.6px] md:pr-[20.4px] md:text-[9.6px] lg:py-[10px] lg:px-[14px] lg:pb-[18px] lg:pr-[23px] lg:text-[11.2px] xl:py-[11.2px] xl:px-[16px] xl:pb-[21px] xl:pr-[27px] xl:text-[12.8px] 2xl:py-[14px] 2xl:px-[20px] 2xl:pb-[46px] 2xl:pr-[34px] 2xl:text-[16px]">
        <button
          onClick={() => {
            handleClick()
          }}
          className="absolute top-3 right-[5px] font-bold md:right-[6px] lg:right-[7px] xl:right-[8px] 2xl:right-[10px]"
        >
          X
        </button>
        <div className="flex w-full flex-row items-start gap-[10px] ">
          <img
            src={`${
              process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                ? process.env.NEXT_PUBLIC_BASE_PATH
                : ''
            }/images/lateralNavBar/node.svg`}
            alt="image"
            className={
              'h-[20] w-[20px] md:w-[19px] lg:w-[22.5px] xl:w-[25px] 2xl:w-[32px]'
            }
          />
          <div className="mt-[5px] font-medium md:mt-[6px] lg:mt-[7px] lg:!leading-[19px] xl:mt-[8px] 2xl:mt-[10px]">
            RPC
          </div>
        </div>
        <div className="absolute left-0 h-[0.5px] w-full bg-[#C1C1C1] lg:mt-[10px] 2xl:mt-[12px]"></div>
        <div className="mt-[7px] flex gap-x-[9px] text-[7.5px] font-normal hover:font-normal  md:text-[8.5px] lg:mt-[20px] lg:text-[10px]  xl:mt-[24px]  xl:text-[11.2px] 2xl:mt-[30px] 2xl:text-[14px]">
          <img
            src={`${
              process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                ? process.env.NEXT_PUBLIC_BASE_PATH
                : ''
            }${data.icon}`}
            alt="image"
            className={`w-[10px] md:w-[12px] lg:w-[14px] xl:w-[16px] 2xl:w-[20px]`}
          />
          <div className="cursor-pointer">{data.name}</div>
        </div>
        {data.name === 'ValidationCloud' && (
          <Options
            handleId={1}
            optionsSelection={['Ethereum', 'Polygon']}
            nodeId={id}
          />
        )}
        <Handle type="source" position={Position.Right} id={'1'} />
      </div>
    </>
  )
}

export default withProps(RPCNode, ['handleNodeRemove'])
