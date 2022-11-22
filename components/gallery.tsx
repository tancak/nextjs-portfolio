import { Repo } from "../utils/profile";
import { Project } from "./project";

export const Gallery: React.FC<{ repos: Repo[] }> = (props) => {
  return (
      <div className='p-10 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_30.66666%)] gap-5 max-w-screen-2xl m-auto'>
          {
            props.repos.map(repo => {
              return <Project key={repo.name} {...repo}/>
            })
          }
      </div>
  );
}