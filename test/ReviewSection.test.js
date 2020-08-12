import ReviewSection from '../client/src/Models/ReviewSection.jsx';
// component testing
describe('<ReviewSection/>', () => {
  // testing ReviewSection component
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReviewSection />)
  });
  // make sure ReviewSection renders
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});