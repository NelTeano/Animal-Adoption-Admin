import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'


function totalCard({cardIcon, totalValue, cardLabel}) {

  
  const cardLayout = {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      width: '500px',
      height: '200px',
      padding: '10px',
      border: 'solid rgba(0,0,0,.125) 1px',
      color: '#9a9a9a',
      fontSize: '15px',
      borderRadius: '5px'
  }

  const cardHeader = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: '150px',
    borderBottom: 'solid rgba(0,0,0,.125) 1px'
  }

  const headerInfo = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }

  const cardFooter = {
    backgroundColor: 'white',
    padding: '10px',
  }


  const iconStyle = {
    width: '100px',
    height: '100px'
  }

  return (
    <div style={cardLayout}>
      <div style={cardHeader}>
          <Image style={iconStyle} src={cardIcon}/>
          <div style={headerInfo}>
            <h3>{cardLabel}</h3>
            <h3 style={{color: 'black', fontSize: '27px'}}>{totalValue}</h3>
          </div>
      </div>
      <div style={cardFooter}>
          <h3>Updated {cardLabel}</h3>
      </div>
    </div>
  )
}

totalCard.propTypes = {
  cardIcon : PropTypes.string.isRequired,
  totalValue: PropTypes.string.isRequired,
  cardLabel: PropTypes.string.isRequired,

}

export default totalCard


