import ReviewSection from '../client/src/Models/CustomerReviews.jsx';
// component testing
describe('<CustomerReviews/>', () => {
  // testing ReviewSection component
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CustomerReviews />)
  });
  // make sure ReviewSection renders
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});