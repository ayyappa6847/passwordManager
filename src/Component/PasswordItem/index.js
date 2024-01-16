import './index.css'

const PasswordItem = props => {
  const {details, psd, deletePsd} = props
  const {website, username, password, id, background} = details
  const initial = website[0].toUpperCase()

  const getImg = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
      alt="stars"
      className="stars"
    />
  )
  const btnDel = () => {
    deletePsd(id)
  }

  return (
    <li className="psd-item-container">
      <div className="res-container">
        <div className={background}>
          <p className="initial-heading"> {initial} </p>
        </div>
        <div className="details">
          <p className="details-data font w"> {website} </p>
          <p className="details-data"> {username} </p>
          {psd ? <p className="details-data"> {password} </p> : getImg()}
        </div>
      </div>
      <div className="delete-container">
        <button
          type="button"
          onClick={btnDel}
          className="btn-click"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
