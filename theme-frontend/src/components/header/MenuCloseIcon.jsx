import React from 'react'
import { Icon } from '@iconify/react'
import tw from 'twin.macro'

export const MenuCloseIcon = ({onClick}) => (
	<div 
        onClick={onClick}>
        <Icon icon="carbon:close" tw="text-5xl text-primary cursor-pointer" />
    </div>
)
