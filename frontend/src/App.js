import './App.css';
import { Button, Form, Input } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "./redux/reducers/postReducer"
import Login from './login';
import Post from "./post"

function App() {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  return (
    <Router>
      <Switch>
        <Route exact path="/post">
          <Post />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
