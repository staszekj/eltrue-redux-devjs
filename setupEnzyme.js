import Enzyme from 'enzyme';
import AdapterToReact16 from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new AdapterToReact16()});
