import CustomerReviews from '../client/src/Models/CustomerReviews.jsx';
// component testing
describe('<CustomerReviews/>', () => {
  // testing CustomerReviews component
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CustomerReviews />)
  });
  // make sure CustomerReviews renders
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});