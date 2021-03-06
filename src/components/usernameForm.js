import React, {
    Component
} from 'react'
import Input from '@material-ui/core/Input';

class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.username);
    }

    onChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    
    render() {
       return (
        <div>
            <div className="loginForm">
                <div className="item">
                    <h1></h1>
                    <h2 className="item">Username?</h2>
                </div>
                <div className="item ">
                    <form onSubmit={this.onSubmit}>
                        <Input type="text" placeholder="Enter nickname" onChange={this.onChange}/>
                        <Input type="submit" />
                    </form>
                    </div>
                
            </div>
        </div>
       )
    }
}

export default UsernameForm