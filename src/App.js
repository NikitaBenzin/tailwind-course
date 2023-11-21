import logo from './images/Tailwind_Logo.webp'

import Spinner from './Spinner';

function App() {
  let isButtonPressed = false;

  return (

    <main className="flex justify-center w-full">
      <div className="w-9/12 rounded-lg my-8 h-full flex flex-col items-center gap-3 py-6 max-w-lg self-center bg-indigo-300">
        <a href='https://tailwindcss.com/' className='flex items-center justify-center gap-4 mb-4 bg-white w-full'>
          <img className='w-10' src={logo} alt="Tailwind logo" />
          <h1 className="text-center text-2xl font-bold">Hello Tailwind</h1>
        </a>
        
        <h2>Visit our home page</h2>
        <a href='https://tailwindcss.com/' className="border border-none bg-purple-500 px-12 py-2 max-w-xs bg-opacity-60 hover:bg-opacity-100 transition delay-200 ease-in-out">Home page</a>

        <h2 className='pt-6 animate-bounce'>Check our blog</h2>
        <a href='https://tailwindcss.com/blog' className="border border-none bg-purple-500 px-12 py-2 max-w-xs bg-opacity-60 hover:bg-opacity-100 transition-all">Blog page</a>
      
        {isButtonPressed ? <Spinner/> : ''}
      
      </div>
    </main>
  );
}

export default App;
