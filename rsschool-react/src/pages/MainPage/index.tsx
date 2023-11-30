import { selectFormData } from '@/store/UncontrolledForm/uncontrolledForm.slice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const MainPage = (): React.ReactElement => {
  const formData = useSelector(selectFormData);
  console.log(formData);
  return (
    <div>
      <h1>MainPage</h1>
      <Link to={'/uncontrolled-form'}>Uncontrolled form page</Link>
      <Link to={'/react-hook-form'}>React hook form page</Link>
    </div>
  );
};

export { MainPage };
