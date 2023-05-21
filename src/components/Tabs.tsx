'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { forwardRef } from 'react'

export const TabsRoot = forwardRef<HTMLDivElement, Tabs.TabsProps>(({ children, ...props }) => {
  return <Tabs.Root {...props}>{children}</Tabs.Root>
})

export const TabsList = forwardRef<HTMLDivElement, Tabs.TabsListProps>(({ children, ...props }) => {
  return <Tabs.List {...props}>{children}</Tabs.List>
})

export const TabsTrigger = forwardRef<HTMLDivElement, Tabs.TabsTriggerProps>(({ children, ...props }) => {
  return <Tabs.Trigger {...props}>{children}</Tabs.Trigger>
})

export const TabsContent = forwardRef<HTMLDivElement, Tabs.TabsContentProps>(({ children, ...props }) => {
  return <Tabs.Content {...props}>{children}</Tabs.Content>
})
