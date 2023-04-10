import tw, { css, styled } from 'twin.macro'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react';
import { enableScroll, disableScroll } from '../utils';



export const ModalList = ( { title, listItems, onSelect, cell, close } ) => {
    
    const [ listOptions, setListOptions ] = useState();    

    useEffect(() => {
        // resolve listItems promise
        listItems.then( result => {
            setListOptions(result)
        })                
    },[] )
    
    if( !listOptions || listOptions === null || listOptions.length === 0 ) { 
      enableScroll();
      return null;
    }

    disableScroll();

    return (
      <ListDialog>
        <ContentWrapper>
          <Header title={title} close={ ()=>{ enableScroll(); close() } }/>
          <ItemsListWrapper>
            { listOptions.map( (item, index) => {
              return (
                <ListItem 
                  key={ index }
                  onClick={ () => {
                    onSelect( { cell, item: listOptions[index] } )
                    enableScroll();
                    close();
                  }}
                >
                  { item.data.image 
                      ? <img
                          src={ item.data.image.replace('http://', 'https://') }
                          tw='w-32 h-20 rounded-md overflow-hidden object-cover object-center'
                          />
                      : <div tw="w-32 h-20 rounded-md overflow-hidden grid place-content-center bg-blue-900">
                          <Icon icon='solar:case-bold-duotone' color='#f14' width='24'/>
                      </div>
                  }
                  <p tw='text-white'>{item.title}</p>
                </ListItem>
              )
            })}
          </ItemsListWrapper>
        </ContentWrapper>
      </ListDialog>
    )
  }

const ListItem = tw.div`
  relative flex flex-row content-center items-center justify-start
  p-2.5 rounded-xl gap-[0.625rem]
  cursor-pointer [transition: all 0.2s ease 0s]
  hover:(bg-[fff4] [transition: all 0.2s ease 0s])
`

const ListDialog = props => (
  <div
    css={css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(100vw);
      height: calc(100vh);
      background-color: #0008 !important;
      backdrop-filter: blur(2px) brightness(0.5);
      z-index: 9999;
    `}
  >
    {props.children}
  </div>
)

const ContentWrapper = props => (
  <div
    role='modal-list-content-wrapper'
    css={`
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 80vh;
      width: clamp(280px, 80%, 400px);
    `}
  >
    {props.children}
  </div>
)

const Header = props => (
    <div
      role='window header'
      tw='box-border fixed -top-6 left-2 text-white w-full h-4 py-4 px-2 flex justify-between items-center bg-white/20 rounded-xl'
    >
      <h3 tw='text-white'>{props.title}</h3>
      <div role='button' onClick={()=>{ props.close() }} tw='cursor-pointer'>
        <Icon icon='fa-times' />
      </div>
    </div>
);

const ItemsListWrapper = props => (
    <div
          role='items-list-wrapper'
          tw='box-border 
                  fixed top-5 left-4 w-[calc(100% - 16px)] h-[70%] p-2 
                  bg-slate-600 rounded-lg 
                  overflow-y-auto overflow-x-hidden 
                  flex flex-col items-start gap-4
                  outline-[12px] outline outline-slate-600 outline-offset-[-4px]'
        >
        {props.children}
        </div>
)