import PropTypes from 'prop-types'
export default function SideBar(props) {

    const {handleDisplayModal,data} = props
  return (
    <div className="sidebar">
        <div className="bgOverlay"></div>
        <div className="SideBarContents">
            <h2>{data?.title}</h2>
            <div className='descriptionContainer'>
                <p className='descriptionTitle'>{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleDisplayModal}>
                <i className="fa-solid fa-arrow-right"/>
            </button>
        </div>
        
    </div>
  )
}

SideBar.propTypes = {
    handleDisplayModal: PropTypes.func,
    data:PropTypes.object
}