import React from 'react'
import PropTypes from 'prop-types'

import './styles/imagePreview.css'

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  const classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : ''

  return (
    <div className={`demo-image-preview ${classNameFullscreen}`}>
      <img src={dataUri} />
    </div>
  )
}

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
}

export default ImagePreview