import StarRating from '../client/src/Models/StarRating.jsx';

describe('<StarRating /> rendering', () => {
    it('should render two <h2>', () => {
        let wrapper = shallow(<StarRating />);
        expect(wrapper.children('h2')).toHaveLength(2);
    });

    it('should render two <ul>', () => {
        let wrapper = shallow(<StarRating />);
        expect(wrapper.children('ul')).toHaveLength(2);
    });

    it('should render one <h3>', () => {
        let wrapper = shallow(<StarRating />);
        expect(wrapper.children('h3')).toHaveLength(1);
    });

    it('should render one <button>', () => {
        let wrapper = shallow(<StarRating />);
        expect(wrapper.children('button')).toHaveLength(1);
    });
});