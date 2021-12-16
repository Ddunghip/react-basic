import React from 'react';
import './Demo.scss'
class ChildComponent extends React.Component {

    //key:value
    state = {
        name: "hip",
        channel: "Tien Dung",
        fName: "",
        lName: ""

    }
    handleOnChangeName = (event) => {
        // console.log(event.target.value, 'event target: ', event.target, 'event object: ', event)
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = () => {
        console.log('hit the button');
        alert('click me')
    }
    // handleLink = () => {
    //     document.title = "facebook.com"
    // }
    handlefName = (event) => {
        this.setState({
            fName: event.target.value
        })

    }
    handlelName = (event) => {
        this.setState({
            lName: event.target.value
        })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('==> check data input', this.state.fName, this.state.lName);
        alert('click me')
    }
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleClickDelete = (job) => {
        console.log('handle click me', job);
        this.props.deleteAJob(job)
    }
    render() {
        console.log('>>> check props', this.props)
        // let name = "tiendung";
        // let name = this.props.name;
        // let age = this.props.age;
        let { showJobs } = this.state;

        let { name, age, address, arjb } = this.props; // nhanh hon
        let check = showJobs === true ? 'showJobs= true' : 'showJobs =  false'
        console.log('check conditional', check);
        return (
            <>
                <div>
                    child component name: {name} - {age} - {address} -{ }
                </div>
                {showJobs == false ?
                    <div>
                        <button className='btnshow'
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arjb.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}> Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log('check chill props', props)
//     let { arjb } = props; // nhanh hon
//     return (
//         <>

//             <div className="job-lists">
//                 {
//                     arjb.map((item, index) => {
//                         if (item.salary >= '500') {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }
//                     })
//                 }

//             </div>
//         </>
//     )

// }

export default ChildComponent;