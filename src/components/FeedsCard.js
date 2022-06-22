import { Card, Heading, Paragraph } from "./Styles"
import { MdDelete } from "react-icons/md"

const FeedsCard = ({ author, title, content, feed, handleDelete }) => {
    return (
        <Card>
            <div>
                <Heading>
                    <b>author: {author}</b>
                    <MdDelete style={{ fontSize: 30, color: "rgb(2, 2, 70)", marginTop: -5, cursor: "pointer" }} onClick={() => handleDelete(feed)} />
                </Heading>
                <b>Title: {title}</b>
                <Paragraph><b>Content: {content}</b></Paragraph>
            </div>
        </Card>
    )
}

export default FeedsCard

