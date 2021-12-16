import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            console.log('>>>check res user', res);

        }
        // console.log('>>>check id', this.props.match.params.id);
    }
    handleBackButton = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state;
        // console.log('>>>>check prop', this.props);
        let isEmtyObj = Object.keys(user).length === 0;

        return (
            <>
                <div>
                    Hello user
                </div>
                {isEmtyObj === false &&
                    <>
                        <div>User's name:{user.first_name}- {user.last_name}</div>
                        <div>User's name:{user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default withRouter(DetailUser);