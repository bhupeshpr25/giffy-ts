import React from 'react'
import ReactDOM from 'react-dom/client'
import { Giffy } from 'giffy-ts'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>giffy-ts</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At laudantium consequuntur non nihil blanditiis sunt
      <Giffy gifLink='https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif' gifHeight={400} gifWidth={400}>
        hover
      </Giffy>
      vitae ad voluptas, dolorem repudiandae iusto? Debitis minima, vel provident accusamus quo iure asperiores dicta!
    </div>
  </React.StrictMode>,
)
