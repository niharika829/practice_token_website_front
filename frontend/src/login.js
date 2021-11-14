
import { Button, Form, Input } from 'antd'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "./redux/reducers/postReducer";
import { useHistory } from "react-router-dom"

function Login() {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const history = useHistory()

    const { isLoggedIn } = useSelector(({ postReducer }) => ({
        isLoggedIn: postReducer.isLoggedIn
    }))

    useEffect(() => {
        if (isLoggedIn) {
            history.push("/post")
        }
    }, [isLoggedIn])
    return (
        <div >
            hello please login!
            <Form
                form={form}
                hideRequiredMark
                onFinish={(values) => {
                    console.log(`values`, values);
                    dispatch(userLogin(values));

                }}
            >
                <Form.Item name="username">
                    <Input placeholder="please enter username" />
                </Form.Item>
                <Form.Item name="password">
                    <Input.Password placeholder="please enter password" />
                </Form.Item>
                <Button

                    onClick={() => form?.submit()}
                    type="primary"
                >
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;
