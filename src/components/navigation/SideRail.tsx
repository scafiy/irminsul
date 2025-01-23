"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image"
import { useEffect, useState } from "react"
import SidenavCSS from "./sidenav.module.css"
import { NavigationStore } from "@/store/Navigation"
import { SearchStore } from "@/store/Search"
import Overlay from '../ui/Overlay'
import characterIcon from '@public/imgs/icons/characterIcon.png'
import weaponIcon from '@public/imgs/icons/weaponIcon.png'
import artifactIcon from '@public/imgs/icons/artifactIcon.png'
import enemyIcon from '@public/imgs/icons/enemyIcon.png'
import wishIcon from '@public/imgs/icons/wish.png'
import partyIcon from '@public/imgs/icons/party.png'
import gadgetsIcon from '@public/imgs/icons/gadgets.png'
// import seelieIcon from '@public/imgs/icons/seelie.png'

/**
 * Side navigation component
 */
export default function SideRail() {
  const pathname = usePathname() //get path url
  const { sideNavCollapsed, setSideNavCollapsed } = NavigationStore() //get sidenav state
  const [activePage, setActivePage] = useState('') //keep track of active page
  const [windowWidth, setWindowWidth] = useState(1980) //keep track of window width

  useEffect(() => setActivePage(pathname), [pathname]) //update active page on path change
  useEffect(() => setWindowWidth(window.innerWidth), []) //update window width on load

  //handle sidenav state based on window width
  useEffect(() => { 
    const handleResize = () => setSideNavCollapsed(true)
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [setSideNavCollapsed])

  /**
   * Side navigation button component
   * @param props 
   * @returns 
   */
  function SideNavLink(props: {href?: string, text: string, img?: any, icon?: any, onClick?: () => void}) {
    const handleSideNavLinkClick = (href: string) => { 
      if(props.onClick !== undefined){
        props.onClick()
        return
      }
      setActivePage(href)
      if(window.innerWidth < 1200) 
        setSideNavCollapsed(true)
    }
    const onLinkedPage: boolean =  props.href === "/" ? activePage === "/" : activePage.includes(props.href)
    return (
      <Link 
        href={props.href} 
        className={SidenavCSS.sidenavLink +' '+ (onLinkedPage && SidenavCSS.active) + (!sideNavCollapsed ? ' waves-effect waves-light ripple ' : ' ')}
        onClick={() => handleSideNavLinkClick(props.href)}  
      >
        <i className={SidenavCSS.sidenavLinkSymbol + ' material-symbols-rounded'}>
          {props.img ? <Image src={props.img} alt = {props.text} width={24} height={24} /> : props.icon}
        </i>
        <p>{props.text}</p>
      </Link>
    )
  }
  return (
    <>
      <nav className={`${SidenavCSS.sidenav} ${SidenavCSS.sidenavCollapsed} z-10`}>
        <SideNavLink href="/" icon="home" text="Home"/>
        <SideNavLink href="/seelie" icon="hotel_class" text="Ask AI"/>

        <SideNavLink href="/articles" icon="article" text="Articles"/>
        {/* <SideNavLink href="/archive/characters" icon="database" text="Archive"/> */}
        <SideNavLink href="/archive/characters" img={characterIcon} text="Characters"/>
        <SideNavLink href="/archive/weapons" img={weaponIcon} text="Weapons"/>
        <SideNavLink href="/archive/artifacts" img={artifactIcon} text="Artifacts"/>
        {/* <SideNavLink href="/tools" icon="build" text="Tools"/> */}
      </nav>
      {/* {!sideNavCollapsed && windowWidth < 1500 && <Overlay zIndex={2} onClick={() => setSideNavCollapsed(true)}></Overlay>
      } */}
    </>
  )
}