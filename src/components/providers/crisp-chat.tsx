"use client"
import { Crisp } from "crisp-sdk-web"
import { useEffect } from 'react'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4df9b6b9-83fb-4dc9-b6e4-1cba34183fd4")
  }, [])

  return <></>
}

