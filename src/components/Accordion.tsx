'use client'

import { cn } from '@/utils/classNames'
import { CaretDown } from '@phosphor-icons/react'
import * as Accordion from '@radix-ui/react-accordion'
import React from 'react'

export const AccordionRoot = React.forwardRef<
  HTMLDivElement,
  Accordion.AccordionSingleProps | Accordion.AccordionMultipleProps
>(({ children, className, ...props }, ref) => (
  <Accordion.Root className={cn(className)} ref={ref} {...props}>
    {children}
  </Accordion.Root>
))

export const AccordionItem = React.forwardRef<HTMLDivElement, Accordion.AccordionItemProps>(
  ({ children, className, ...props }, ref) => (
    <Accordion.Item className={cn(className)} ref={ref} {...props}>
      {children}
    </Accordion.Item>
  ),
)

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, Accordion.AccordionTriggerProps>(
  ({ children, className, ...props }, ref) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger className={cn('group', className)} {...props} ref={ref}>
        {children}
        <CaretDown size={24} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
)

export const AccordionContent = React.forwardRef<HTMLDivElement, Accordion.AccordionContentProps>(
  ({ children, className, ...props }, ref) => (
    <Accordion.Content className={cn(className)} {...props} ref={ref}>
      <div>{children}</div>
    </Accordion.Content>
  ),
)
