import React from 'react';
import Dag from '../Uker/LagUke/Dag';
import { storiesOf, action } from '@kadira/storybook';



const CenterModule = ({children,width, bgColor}) => {
  const divStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor
  }
  return (
    <div style={divStyle}>
      <div style={{width:width}}>
        {children}
      </div>
    </div>
  )
}

storiesOf('Uke.Dag', module)
  .add('Sample day, no link, no img no Close', () => {
    const props = {
      title: 'Onsdag',
      description: 'Taco',
      descriptionGrey: 'Kjempegodt',
      // linkUrl: PropTypes.string,
      // imgUrl: PropTypes.string,
      // closeHandler: closeFunction
    }

    return <CenterModule width={350} bgColor='#e6e6e6'><Dag {...props} /></CenterModule>
  })
  .add('Sample day, link and img', () => {
    const props = {
      title: 'Onsdag',
      description: 'Taco',
      descriptionGrey: 'Kjempegodt',
      linkUrl: 'test',
      imgUrl: '/images/taco.jpg',
      closeHandler: action('Close window')
    }

    return <CenterModule width={350} bgColor='#e6e6e6'><Dag {...props} /></CenterModule>
  });
