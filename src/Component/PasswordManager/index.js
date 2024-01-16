/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem/index'

const BackgroundClassNames = ['blue', 'orange', 'teal', 'red', 'light-blue']

class PasswordManager extends Component {
  state = {
    psdList: [],
    searchInput: '',
    showPsd: false,
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    background: '',
  }

  pswdShow = () => {
    this.setState(prevState => {
      const {showPsd} = prevState
      return {showPsd: !showPsd}
    })
  }

  addDetails = e => {
    e.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const BackgroundColorClassName = `initial-container ${
      BackgroundClassNames[
        Math.ceil(Math.random() * BackgroundClassNames.length - 1)
      ]
    }`
    const newPsdList = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
      background: BackgroundColorClassName,
    }
    this.setState(prevState => ({
      psdList: [...prevState.psdList, newPsdList],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
      background: '',
    }))
  }

  searchPsdList = event => {
    this.setState({searchInput: event.target.value})
  }

  websiteInputChange = event => {
    this.setState({websiteInput: event.target.value})
  }

  usernameInputChange = event => {
    this.setState({usernameInput: event.target.value})
  }

  passwordInputChange = event => {
    this.setState({passwordInput: event.target.value})
  }

  deletePsd = id => {
    const {psdList} = this.state
    const filteredPsdLists = psdList.filter(each => each.id !== id)
    this.setState({psdList: filteredPsdLists})
  }

  render() {
    const {psdList, showPsd, searchInput} = this.state
    const {websiteInput, usernameInput, passwordInput} = this.state

    const UpdatedPsdLists = psdList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = UpdatedPsdLists.length
    const length = UpdatedPsdLists.length < 1

    return (
      <div className="main-container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="pm-sm-img"
          />
          <div className="res">
            <div className="input-card">
              <h1 className="input-card-heading"> Add New Password </h1>
              <form className="form">
                <div className="input-password-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-img"
                  />
                  <hr className="line" />
                  <input
                    type="input"
                    placeholder="Enter Website"
                    className="website-input"
                    onChange={this.websiteInputChange}
                    value={websiteInput}
                  />
                </div>
                <div className="input-password-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="website-img"
                  />
                  <hr className="line" />
                  <input
                    type="input"
                    placeholder="Enter Username"
                    className="website-input"
                    onChange={this.usernameInputChange}
                    value={usernameInput}
                  />
                </div>
                <div className="input-password-box">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="website-img"
                  />
                  <hr className="line" />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="website-input"
                    onChange={this.passwordInputChange}
                    value={passwordInput}
                  />
                </div>
                <div className="btn-container">
                  <button
                    className="add-btn"
                    type="submit"
                    onClick={this.addDetails}
                  >
                    {' '}
                    Add{' '}
                  </button>
                </div>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="pm-md-img"
            />
          </div>
        </div>
        <div className="psd-container">
          <div className="psd-header">
            <div className="psd-counter-container">
              <h1 className="psd-info"> Your Passwords</h1>
              <p className="psd-count"> {count} </p>
            </div>
            <div className="psd-search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="psd-search-img"
              />
              <hr className="line-1" />
              <input
                type="search"
                className="psd-input"
                placeholder="Search"
                onChange={this.searchPsdList}
              />
            </div>
          </div>
          <hr className="separator" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox"
              className="psd-checkbox"
              onChange={this.pswdShow}
            />
            <label className="checkbox-info" htmlFor="checkbox">
              {' '}
              Show passwords{' '}
            </label>
          </div>

          {length ? (
            <div className="empty-psd-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-psd-img"
              />
              <p className="no-psd-info"> No Passwords </p>
            </div>
          ) : (
            <ul className="psd-main-container">
              {UpdatedPsdLists.map(each => (
                <PasswordItem
                  key={each.id}
                  deletePsd={this.deletePsd}
                  details={each}
                  psd={showPsd}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
