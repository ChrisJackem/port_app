import React from 'react'

const IframeFooter = ({url}:{url:string}) => {
    const title = "title here"
  return (
    <div>
        <iframe
            onClick={()=> {} }
            height={`325px`}                    
            width={'400px'}
            title={title ? title : 'generic iFrame title'}
            src={url}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>   
    </div>
  )
}

export default IframeFooter