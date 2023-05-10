"use client"
import { useServerInsertedHTML } from "next/navigation"
import { NextUIProvider } from "@nextui-org/react"
import { CssBaseline } from "@nextui-org/react"

export default function Provider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    return <>{CssBaseline.flush()}</>
  })
  return <NextUIProvider>{children}</NextUIProvider>
}
