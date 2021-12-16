import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/booking icon.png';
import { connect } from 'react-redux'

class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }
    handleDeleteUserRedux = (user) => {
        console.log('>>>check user delete: ', user);
        this.props.deleteUserRedux(user);

    }
    handleCreateUserRedux = () => {
        this.props.addUserRedux()

    }
    // HOC
    render() {
        console.log('>>>check props home:', this.props);
        let listuserredux = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world form home page
                </div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    {listuserredux && listuserredux.length > 0 &&
                        listuserredux.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} -{item.name}
                                    &nbsp;<span onClick={() => this.handleDeleteUserRedux(item)}>X</span>


                                </div>
                            )
                        }

                        )

                    }
                    <button onClick={() => this.handleCreateUserRedux()}>Add new</button>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)((Color(Home)));
//export default Color(Home);
