import React, { Component } from 'react';
import Sticky from '../controls/UI/StickyHeader/StickyHeader';
import './StickyApp.scss';

function callback(status) {
  console.log(`is fixed status: ${status}`);
}

function Block(props) {
  return (
    <div className="block">
      <Sticky
        boundaryElement=".block"
        // scrollElement=".scroll-area" 
        {...props}
        onFixedToggle={callback}
      >
        <h2 className="header">Header {props.id}</h2>
      </Sticky>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales ullamcorper vehicula. Duis placerat quam porta lorem lobortis, sit amet sodales mauris finibus. Donec posuere diam at volutpat viverra. Cras fringilla auctor augue sed congue. Maecenas mollis quis enim quis egestas. In sollicitudin mi a pretium varius. Integer eleifend sodales pharetra. Nullam vitae libero sem. Nulla et eros congue, tincidunt ante eu, tincidunt eros. Donec nisl purus, convallis a hendrerit ut, eleifend in lectus. Proin luctus dignissim lacus, in laoreet arcu eleifend non. Quisque viverra ipsum a massa porta convallis. Donec tincidunt imperdiet purus, interdum elementum ante commodo a. Quisque pharetra arcu sapien, vel ornare magna sollicitudin quis.
      </p>
      <p>
        Nunc congue magna eget eros blandit, eu viverra magna semper. Nullam in diam a metus dictum consequat. Quisque ultricies, ipsum non euismod semper, velit felis lacinia nibh, et finibus quam leo vitae nisi. Maecenas interdum diam quis risus bibendum, eu fermentum est pharetra. In dictum at enim pretium bibendum. Praesent efficitur iaculis dolor in sodales. Morbi maximus in ipsum in malesuada. Proin semper lacus tempor magna aliquam, sed aliquam dui scelerisque. Donec nisi nulla, rhoncus a tristique eget, ultrices vitae dolor. Ut id urna vitae ante tincidunt pharetra at non metus. Nunc in suscipit nulla. Sed vitae leo vulputate, euismod tortor vel, aliquet velit. Curabitur eget tincidunt elit. Nam et ligula finibus, eleifend velit et, commodo quam. Praesent non libero velit.
      </p>
    </div>
  );
}

function blocks(disabled, topOffset, bottomOffset, hideOnBoundaryHit = true) {
  let blocks = [];
  for (let i = 0; i < 7; i += 1) {
    blocks.push(
      <Block
        id={i}
        key={i}
        disabled={disabled}
        topOffset={topOffset}
        bottomOffset={bottomOffset}
        hideOnBoundaryHit={hideOnBoundaryHit}
      />
    );
  }
  return blocks;
}

export default class StickyApp extends Component {
  render() {
    return (
      <div>
        <div style={{ height: '200px' }}></div>
        {blocks(false, 0, 0, false)}
      </div>
    )
  }
}