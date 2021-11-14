import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router';
import { getPosts, storeImage, userLogout } from './redux/reducers/postReducer';

const Post = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { isLoggedIn } = useSelector(({ postReducer }) => ({
        isLoggedIn: postReducer.isLoggedIn
    }))
    useEffect(() => {
        if (isLoggedIn)
            dispatch(getPosts({}))
        else {
            history.replace("/")
        }

    }, [isLoggedIn])
    return (
        <div>
            hello
            <Button

                onClick={() => { dispatch(userLogout({})); }}
                type="primary"
            >
                Logout
            </Button>
            <input
                onChange={async (e) => {
                    console.log(`e.target.files`, Array.from(e.target.files)[0])
                    const bodyFormData = new FormData()

                    bodyFormData.set('image', Array.from(e.target.files)[0])
                    bodyFormData.set('purpose', 'store image')
                    // dispatch(storeImage({ bodyFormData }))


                    const response = await axios({
                        method: 'post',
                        url: 'http://localhost:5000/store',
                        data: bodyFormData,
                        headers: {
                            'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
                        },
                    });
                }}
                type="file"
                className="hidden"
                accept="image/png, image/jpeg"
            />
            .

        </div>
    )
}

export default Post
