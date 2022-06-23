import { useState, useEffect } from "react";
import Axios from "axios";
import { Container } from "./Styles"
import FeedsCard from "./FeedsCard";



//fetch data from api endpoint using axios
export const URL = "https://blog-api344.herokuapp.com/blogposts/";

const Feeds = () => {
    const [feeds, setFeeds] = useState([]);

    let pages = 0;
    useEffect(() => {
        fetchFeeds();
        window.addEventListener("scroll", handleScroll); // attaching scroll event listener
    }, []);

    const fetchFeeds = async () => {
        try{
            const  res  = await Axios.get(`${URL}?page=${pages}`);
            const fetchedRes = res?.data?.getBlogPost?.docs;
            setFeeds((prevFeeds) => [...prevFeeds, ...fetchedRes]);
            pages++;
        }
        catch {
            console.log("failed to fetch data")
        };
    };


    //function to handle scroll
    const handleScroll = () => {
        let userScrollHeight = window.innerHeight + window.scrollY;
        let windowBottomHeight = document.documentElement.offsetHeight;
        if (userScrollHeight >= windowBottomHeight) {
            fetchFeeds();
        }
    };

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