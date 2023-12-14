import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'

function Home() {

  const [serverResponse,setServerResponse]=useState({})


  const handleResponse = (res) => {
    setServerResponse(res)
  }
  return (
    <>
      <div className="container-fluid">
        <Link style={{textDecoration:"none",fontSize:"30px",color:"blue"}} to={'/watchhistory'}>Watch History</Link>
        <Row>
          {/* add component */}
          <Col lg={1}>
            <Add handleResponse={handleResponse} />
          </Col>

          {/* view component */}
          <Col lg={7}>
            <View serverResponse={serverResponse} />
          </Col>

          {/* Category component */}
          <Col lang={4}>
            <Category />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home