"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import PageBanner from './page_banner'

interface BannerContext {
  title: string
  content: string
}

const PageBannerContext = createContext<{
  state:BannerContext | undefined,
  setState: (s:BannerContext)=>void
} | undefined>(undefined);

export const usePageBanner = () => {
  const context = useContext(PageBannerContext)  
  if (!context) {
    throw new Error('usePageBanner must be used within PageBannerProvider')
  }
  return context
}

export const PageBannerProvider = ({ children }: {children: React.ReactNode}) => {
  const [pageState, setPageState] = useState<BannerContext>({ title: '', content: '' });  
  return (
    <PageBannerContext value={{ state:pageState, setState: setPageState}}>
      {children}
    </PageBannerContext>
  )
}

const PageBannerPersist = () => {
  const {state, setState } = usePageBanner()
  const pathName = usePathname()
  if (pathName == '/' || pathName == '/home') return null;

  if (!state) return null; 

  return (
    <PageBanner title={state.title} content={state.content}/>
  )  
}

export default PageBannerPersist