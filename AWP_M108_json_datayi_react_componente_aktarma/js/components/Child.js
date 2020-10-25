class Child extends React.Component {
  constructor({someProp}){
    super()
  }

  render() {
    return (
      <div>
      <h3>{this.props.value.name}</h3>
      {
        this.props.value.hobbies.map(item => {
          return <Hobby key={item} value={item}/>
        })
      }
      </div>
    )
  }
}
