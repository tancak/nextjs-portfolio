import { Bio } from "../components/bio"
import { Gallery } from "../components/gallery";
import { Profile, Repo } from "../utils/profile";

type Data = {
  profile: Profile;
  repos: Repo[]
}

export async function getServerSideProps() {
  const resProfile = fetch(process.env.SITE_URL + '/api/user/' + process.env.GH_USERNAME);
  const resRepos = fetch(process.env.SITE_URL + '/api/repos/' + process.env.GH_USERNAME);
  
  const profile = (await resProfile).json();
  const repos = (await resRepos).json();

  return { props: { profile: await profile, repos: await repos} };
}

function Home(data: Data) {
  console.log(data)
  return (
    <div className="flex flex-col m-10">
      <Bio name={ data.profile.name } avatar_url={ data.profile.avatar_url } bio={ data.profile.bio }/>
      <Gallery repos={ data.repos } />
    </div>
  );
}

export default Home;