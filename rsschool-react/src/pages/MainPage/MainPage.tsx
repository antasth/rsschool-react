import { Link } from 'react-router-dom';
const MainPage = (): React.ReactElement => {
  return (
    <div>
      <h1>MainPage</h1>
      <Link to={'/uncontrolled-form'}>Uncontrolled form page</Link>
      <Link to={'/react-hook-form'}>React hook form page</Link>
    </div>
  );
};

export { MainPage };
