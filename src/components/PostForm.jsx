import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost, setAlert } from './../redux/actions'
import Alert from './common/Alert';

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      hasError: false
    }
  }

  toggleErrorHandler = (hasError) => {
    this.setState({...this.state, hasError: hasError})
  }
 
  submitHandler = event => {
    event.preventDefault()
    const {title} = this.state

    if(!title.trim()) {
      return this.props.setAlert('Заголовок поста не может быть пустым')
    } else {
      this.props.setAlert('')
    }
    

    const newPost = {
      id: Date.now().toString(),
      title
    }
    console.log(newPost)
    this.props.createPost(newPost)
    this.setState({ ...this.state, title: ''})
  }

  onChangeInuptHandler = event => {    
    event.persist()
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  } 

  render() {
    return (
      <>
      {this.props.alert && <Alert text={this.props.alert} onClose={this.props.setAlert} />}
        <form onSubmit={this.submitHandler}>
            <div className="form-group w-50">
              <label htmlFor ="title">Заголовок поста</label>
              <input 
                type="text" 
                className="form-control" 
                id="title" 
                value={this.state.title}
                name="title"
                onChange={this.onChangeInuptHandler}
              />
            </div>
            <button className="btn btn-success" type="submit">Создать</button>
        </form>        
      </>
    )
  }
}

const mapStateToProps = state => ({
  alert: state.appReducer.alert
})

const mapDispatchToProps = {
  createPost,
  setAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
