import React from 'react'
import { Icon } from '@iconify/react'
import tw from 'twin.macro'

export const MenuOpenIcon = ({onClick}) => (
	<div
        onClick={ onClick }>
        <Icon icon="gg:menu-right-alt" tw="text-5xl text-primary cursor-pointer" />
    </div>
)
