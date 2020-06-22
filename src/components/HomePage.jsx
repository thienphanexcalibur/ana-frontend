import * as React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import req from '@utils/request.js';
import { connect } from 'react-redux';
import {getAuth} from '@/store/actions.js';

const Post = (props) => <Segment>
    <Header> {props.title} </Header>
    <p>{props.content}</p>
    <p>{props.byUser?.fullname}</p>
</Segment>

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            error: false
        }
    }

    componentDidMount() {
        req.get('/post').then(
            res => this.setState({posts: res})
        );
    }

    componentDidCatch(e) {
        this.setState({error: true})
    }

    render() {
        const { posts, error } = this.state;
        return (
            <>

            {!error ?  posts.map(post => <Post
                key={post._id}
                title={post.title}
                content={post.content}
                byUser={post.byUser}
                />) : <div>Error</div>}
            </>
        )

    }
}


export default connect()(HomePage);