import { useState } from 'react';
import { Form, InnerForm } from './Styles'
import { URL } from './Feeds';
import Axios from 'axios';


const CreateFeeds = () => {
    const [details, setDetails] = useState({ author: "", title: "", content: "" })
    const [loading, setLoading] = useState(false)


    //function to set details
    const setFeedDetails = (e) => {
        setDetails(state => ({ ...state, [e.target.name]: e.target.value }))
    }


    //function to handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const result = await Axios.post(URL,
                details
            )
            if (result?.status === 200) {
                setLoading(false)
            }

        }
        catch {
            setLoading(false)
        }
        setDetails({
            author: '',
            title: '',
            content: '',
        });
    };


    return (
        <Form onSubmit={handleSubmit} >
            <InnerForm>
                <label htmlFor="author">
                    Author:
                </label>
                <br />
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={details.author}
                    onChange={setFeedDetails}
                    required
                />
            </InnerForm>
            <InnerForm>
                <label htmlFor="title">
                    Title:
                </label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={details.title}
                    onChange={setFeedDetails}
                    required
                />
            </InnerForm>
            <InnerForm>
                <label htmlFor="content">
                    Content:
                </label>
                <br />
                <textarea
                    cols="30"
                    rows="4"
                    type="text"
                    id="content"
                    name="content"
                    value={details.content}
                    onChange={setFeedDetails}
                    required
                />
            </InnerForm>
            <button disabled={loading} >
                {
                    loading ? 'Submitting...' : 'Submit'
                }
            </button >
        </Form >
    )
}

export default CreateFeeds



