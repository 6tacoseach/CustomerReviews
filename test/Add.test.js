import Add from '../client/src/Models/ratings.jsx';
describe('<Add /> rendering', () => {
    it('should render one <h2>', () => {
        let wrapper = shallow(<Add />);
        expect(wrapper.children('h2')).toHaveLength(1);
    });
});