export const Bio: React.FC<{ name: string, avatarURL: string, bio: string }> = (props) => {    
  return (
    <div className='mx-auto p-8 m-10'>
        <div className='float-left'>
            <img className='rounded-lg border border-gray-100 shadow-2xl h-48 w-48 p-1 mr-16' src={ props.avatarURL }/>
        </div>
        <div className='mt-1'>
            <p className='text-5xl text-gray-700 font-bold inline'>
                { props.name }
                
            </p>
            <span className='text-gray-400 text-md mb-5 block'>
                Junior Software Developer
            </span>
            <p className='text-gray-500 text-lg max-w-screen-md'>
                { props.bio }
            </p>
        </div>
    </div>
  );
}
