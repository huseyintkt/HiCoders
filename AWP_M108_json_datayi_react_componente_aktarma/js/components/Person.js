class Person extends React.Component {
  constructor({someProp}){
    super()
  }

  render() {
    return (
      <h1>{this.props.value.name}</h1>
    )
  }
}
