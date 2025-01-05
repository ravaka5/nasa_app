import PropTypes from "prop-types"
export default function Footer(props) {

let {handleDisplayModal ,data} = props
  return (
    <footer>
    <div className="bgGradient"></div>
        <div>
            <h2>{data?.title}</h2>
            <h1>APOD PROJECT</h1>
        </div>
        <button onClick={()=>handleDisplayModal()}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

Footer.propTypes = {
    handleDisplayModal: PropTypes.func,
    data: PropTypes.object
}