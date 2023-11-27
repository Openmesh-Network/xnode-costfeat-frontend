/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react'

export interface UserProps {
  firstName: string
  lastName: string
  email: string
  equinixAPIKey: string
  companyName: string
  foundingYear: number
  location: string
  website: string
  tags: string[]
  description: string
  isCompany: boolean
  password: string
  confirmPassword: string
  githubLink: string
  personalBlog: string
  profilePictureHash: string
  calendly: string
  sessionToken: string
  createdAt: string
  updatedAt: string
}

interface CreateContextProps {
  children: React.ReactNode
}

interface CreateUserContextProps {
  selectionSideNavBar: string
  setSelectionSideNavBar: (value: string) => void

  selectCurrentMenuDataType: string
  setselectCurrentMenuDataType: (value: string) => void

  projectName: string
  setProjectName: (value: string) => void

  projectDescription: string
  setProjectDescription: (value: string) => void

  xnodeType: string
  setXnodeType: (value: string) => void

  finalNodes: any
  setFinalNodes: (value: any) => void

  next: boolean
  setNext: (value: boolean) => void

  isEditingXnode: boolean
  setIsEditingXnode: (value: boolean) => void

  nextFromScratch: boolean
  setNextFromScratch: (value: boolean) => void

  reviewYourBuild: boolean
  setReviewYourBuild: (value: boolean) => void

  finalBuild: boolean
  setFinalBuild: (value: boolean) => void

  isWorkspace: boolean
  setIsWorkspace: (value: boolean) => void

  signup: boolean
  setSignup: (value: boolean) => void

  connections: boolean
  setConnections: (value: boolean) => void

  tagXnode: any
  setTagXnode: (value: any) => void

  changeNodes: any
  setChangeNodes: (value: any) => void

  user: UserProps | undefined
  setUser: (user: UserProps | undefined) => void
}

export const AccountContext = createContext({} as CreateUserContextProps)

export default function AccountContextProvider({
  children,
}: CreateContextProps) {
  const [user, setUser] = useState<UserProps>()
  const [changeNodes, setChangeNodes] = useState()
  const [selectionSideNavBar, setSelectionSideNavBar] =
    useState<string>('Start here')
  const [xnodeType, setXnodeType] = useState<string>()
  const [projectName, setProjectName] = useState('Project Name')
  const [selectCurrentMenuDataType, setselectCurrentMenuDataType] =
    useState<string>('')
  const [isWorkspace, setIsWorkspace] = useState<boolean>(false)
  const [isEditingXnode, setIsEditingXnode] = useState<boolean>(false)
  const [finalNodes, setFinalNodes] = useState<any>()
  const [next, setNext] = useState<boolean>(false)
  const [finalBuild, setFinalBuild] = useState<boolean>(false)
  const [nextFromScratch, setNextFromScratch] = useState<boolean>(false)
  const [reviewYourBuild, setReviewYourBuild] = useState<boolean>(false)
  const [connections, setConnections] = useState<boolean>(false)
  const [signup, setSignup] = useState<boolean>(false)
  const [tagXnode, setTagXnode] = useState<string>(
    'Decentralized data infrastructure',
  )
  const [projectDescription, setProjectDescription] = useState<string>(
    'Project description',
  )
  return (
    <AccountContext.Provider
      value={{
        selectionSideNavBar,
        setSelectionSideNavBar,
        projectName,
        setProjectName,
        setProjectDescription,
        projectDescription,
        selectCurrentMenuDataType,
        isEditingXnode,
        setIsEditingXnode,
        setselectCurrentMenuDataType,
        xnodeType,
        setXnodeType,
        user,
        setUser,
        next,
        setNext,
        nextFromScratch,
        setNextFromScratch,
        reviewYourBuild,
        setReviewYourBuild,
        signup,
        setSignup,
        tagXnode,
        setTagXnode,
        finalNodes,
        setFinalNodes,
        isWorkspace,
        setIsWorkspace,
        finalBuild,
        setFinalBuild,
        setConnections,
        connections,
        changeNodes,
        setChangeNodes,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}
