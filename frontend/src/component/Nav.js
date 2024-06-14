import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react"
import { createWallet, inAppWallet } from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "8b47ef3dc283abe26da04b0549a7d6e8",
});

const wallets = [
  // inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

const PageNavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src="AnotherLogo.png" alt="logo" className="nav-logo" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="logout-btn">
                    <Nav.Link eventKey={2} href="#logout">
                    Logout 
                    </Nav.Link>
                    <Nav.Link eventKey={2}>Connect Wallet</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
        <ConnectButton
          client={client}
          wallets={wallets} />
      </Container>
    </Navbar>
  )
}
export default PageNavBar
