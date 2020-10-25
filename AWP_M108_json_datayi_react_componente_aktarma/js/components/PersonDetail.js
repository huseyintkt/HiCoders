class PersonDetail extends React.Component {
  constructor({someProp}){
    super()
  }

  render() {
    return (
      <div>
         { this.props.value &&
          <div>
            <div>
              <Person value={this.props.value}/>
            </div>
            <div>
            {
              this.props.value.childs.map(item => {
                return <Child key={item.id} value={item}/>
              })
            }
            </div>
          </div>
         }
      </div>
    )
  }
}
