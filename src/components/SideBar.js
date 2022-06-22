import { CgFeed } from "react-icons/cg"
import { Logo, SideContainer } from "./Styles"

const SideBar = () => {
    return (
        <SideContainer>
            <Logo>
                <CgFeed style={{fontSize: 50}}/>
            </Logo>
        </SideContainer>
        
    )
}

export default SideBar