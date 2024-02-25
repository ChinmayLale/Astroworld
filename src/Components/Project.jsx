import React from 'react'

function Project() {
  return (
    <div className="projects">
      <div className="p1">
        <h1>Trata - Ai Based Crop Monitoring & Predication System</h1>
        <div className="p1-inner">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7YcE06znHCg?si=YrgB_G6jS0YBVMd7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="desc">
          <h3>Description </h3>
          <h4>&bull; Engineered and executed a machine learning pipeline with <b>accuracy of 98%</b> for automated feature 
              extraction and predictive modeling within a crop monitoring system.
          </h4>
          <h4>
          &bull;  <b>Integrates multiple sensor </b>(4 – 5) data from IoT devices with sources 
          </h4>
          <h4>
          &bull; On-farm deployment of the system demonstrated effectiveness in improving crop yields
          </h4>
          </div>
        </div>
      </div>
      <div className="p2">
        hello two
      </div>
      <div className="p3">
        hello three
      </div>
    </div>
  )
}

export default Project