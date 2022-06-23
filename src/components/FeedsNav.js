import { FeedContainer, InnerCont, LeftCont } from "./Styles"
import { GrFormAdd } from "react-icons/gr"

const FeedsNav = () => {
    return (
        <FeedContainer>
            <InnerCont>
                <h1>RobotFeeds</h1>
                <p>These are the total company's feeds</p>
            </InnerCont>
            <LeftCont>
                <GrFormAdd style={{fontSize: 20, color: "red", backgroundColor: "white", borderRadius: 100, padding: 3, marginTop: -13}}/>
                <h4>New Feeds</h4>
            </LeftCont>
        </FeedContainer>
    )
}

export default FeedsNav