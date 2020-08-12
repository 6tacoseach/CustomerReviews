import StarRating from '../client/src/Models/ratings.jsx';

describe('<StarRating /> rendering', () => {
    it('should render one <h2>', () => {
        let wrapper = shallow(<StarRating />);
        expect(wrapper.children('h2')).toHaveLength(2);
    });
});