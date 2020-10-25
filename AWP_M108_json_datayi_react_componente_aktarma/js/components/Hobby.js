class Hobby extends React.Component {
  constructor({someProp}){
    super()
  }

  render() {
    return (
      <div> { this.props.value  } </div>
    )
  }
}
