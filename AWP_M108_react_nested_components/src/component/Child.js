
class Child extends React.Component {

    constructor(props){
        super(props)
    }
  
    render() {
        return (
            <div className="box">
                <p><img src={this.props.data.avatar} /></p>
                <p>First Name : <span>{this.props.data.firstName}</span></p>
                <p>Gender : <span>{this.props.data.gender}</span></p>
                <p>Birth Date : <span>{this.props.data.birthday}</span></p>
            </div>
        )
    }
}