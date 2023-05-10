"use client"
import { Navbar, Text } from "@nextui-org/react"

const Nav = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Text b>Stoichiometric</Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link href="/" color="inherit">
          HOME
        </Navbar.Link>
        <Navbar.Link href="#" color="inherit">
          BLOG
        </Navbar.Link>
        <Navbar.Link href="/bbs" color="inherit">
          BBS
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  )
}

export default Nav
