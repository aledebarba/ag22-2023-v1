import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import tw from 'twin.macro';
import Brand from '../svg/brand';

export const Logo = ({ menu }) => {

    return (<>
        { menu && 
            <div tw="relative w-[65px]">
                <Link smooth to="/#top">
                    <Brand/>
                </Link>
            </div> 
        }
        </>
    )
}