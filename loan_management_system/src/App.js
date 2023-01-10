import {useEffect, useState} from 'react';
import ContactForm from './components/ContactForm';

const App = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const handleSubmit = () => {
    console.log('form submitted ✅');
  };

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();

        //  call submit function here
        handleSubmit();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div>
      <ContactForm/>
      <form>
      <input
          type="text"
          id="first"
          name="first"
          value={first}
          onChange={event => setFirst(event.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          id="last"
          name="last"
          value={last}
          onChange={event => setLast(event.target.value)}
          autoComplete="off"
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
