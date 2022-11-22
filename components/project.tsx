export const Project: React.FC<{ name:string, description:string, html_url:string }> = (props) => {
  return (
    <a className='container mx-auto rounded-xl shadow border p-5 m-5 w-96 h-64' href={ props.html_url }>
      <p className='text-2xl text-gray-700 font-bold p-3'>
        { props.name }
      </p>
      <p className='text-gray-500 text-lg h-36 block overflow-scroll p-3 pt-0'>
        { props.description }
      </p>
    </a>
  );
}