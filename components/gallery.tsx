import { Project } from "./project";

export const Gallery: React.FC = () => {
  return (
      <div className='p-10 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_30.66666%)] gap-5 max-w-screen-2xl m-auto'>
          <Project name="Project" description="Description" html_url="#"/>
          <Project name="Project" description="Description" html_url="#"/>
          <Project name="Project" description="Description" html_url="#"/>
          <Project name="Project" description="Description" html_url="#"/>
          <Project name="Project" description="Description" html_url="#"/>
          <Project name="Project" description="Description" html_url="#"/>
          <Project name="Project" description="Description" html_url="#"/>
          <Project name="Project" description="Description" html_url="#"/>
      </div>
  );
}