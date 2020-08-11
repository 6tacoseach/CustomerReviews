import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;

// import VideoCarousel from '../client/components/carousel';
// import CarouselCard from '../client/components/carousel-card';

// test('Carousel renders video cards', () => {
//   const wrapper = mount(<VideoCarousel />);
//   wrapper.setState({ videoData: [{ thumbnail: '', _id: 0 }] });
//   const cardWrapper = wrapper.find(CarouselCard);
//   expect(cardWrapper).toExist();
// });

// from a enzyme.config.js
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });