const Timeline = ({ datas }) => {

  return (
    <>
      <div className="timeline">
        <div className='center-line'></div>
        <div className='wrapper'>
          {datas.map((data) => {
            return (
              <div className='row'>
                <div className='container'>
                  <div className="data">
                    <div className="header">
                      <div className="left">
                        <div className="title">
                          {data.title}
                        </div>
                        <div className="sub-title">
                          {data.subTitle}
                        </div>
                      </div>
                      <div className="right">
                        {data.date}
                      </div>
                    </div>
                    <div className="body">
                      {data.description}
                    </div>
                    <div className="footer">
                    </div>
                  </div>

                </div>
              </div>
            )
          }
          )}
        </div>
      </div >
    </>
  )
}

export default Timeline