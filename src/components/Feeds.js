import { useState, useEffect } from "react";
import Axios from "axios";
import { Container } from "./Styles"
import FeedsCard from "./FeedsCard";
// import FeedsNav from "./FeedsNav";


//fetch data from api endpoint using axios
export const URL = "https://blog-api344.herokuapp.com/blogposts/";

const Feeds = () => {
    const [feeds, setFeeds] = useState([]);

    //using axios to make api call and get required data
    useEffect(() => {
        Axios.get(URL)
            .then((res) => (res.data.getBlogPost.docs))
            .then((data) => {
                setFeeds(data);
            })
            .catch(
                console.log("failed to fetch data")
            );
    }, []);


    const handleDelete = async ({ id }) => {
        await Axios.delete(`${URL}${id}`);
        setFeeds(feeds.filter((feed) => feed.id !== id))
    }


    return (
        <>
            <Container>
                {
                    feeds.map((feed) => {
                        return (
                            <FeedsCard key={feed?.id} author={feed?.author} title={feed?.title} content={feed?.content} handleDelete={handleDelete} />
                        )
                    })
                }
            </Container>
        </>

    )
}

export default Feeds