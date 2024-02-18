"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useWindowWidth } from "@react-hook/window-size"

import {
  Settings,
  LayoutDashboard,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  ChevronRight,
  UsersRound,
} from "lucide-react"
import { Nav } from './ui/nav'

function SideNavbar() {
  const [isCollapsed, setisCollapsed] = useState(false)

  const winwidth = useWindowWidth();
  const mobilewidth = winwidth < 765;
  console.log(winwidth)
  return (
    <div className=' relative border pt-24 px-3 pb-10 '>
      {!mobilewidth &&
        <div className="absolute right-[-20px] top-7">
          <Button size="sm" variant="secondary" className='rounded-full p-2' onClick={() => setisCollapsed(!isCollapsed)}>
            <ChevronRight />
          </Button>
        </div>
      }

      <Nav
        isCollapsed={mobilewidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            variant: "ghost",
            href: "/"
          },
          {
            title: "User",
            icon: UsersRound,
            variant: "ghost",
            href: "/user"
          },
          {
            title: "Order",
            icon: ShoppingCart,
            variant: "ghost",
            href: "/order"
          },
          {
            title: "Setting",
            icon: Settings,
            variant: "ghost",
            href: "/setting"
          },

        ]}
      />
    </div>
  )
}

export default SideNavbar
