import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Giffy } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <Giffy gifLink='https://media.tenor.com/OVGeaiOirOYAAAAC/tired-sleepy.gifhttps://media.tenor.com/OVGeaiOirOYAAAAC/tired-sleepy.gif'>
        children={undefined}
      </Giffy>,
    )
  })
})
