import { Bio } from "../components/bio"
import { Gallery } from "../components/gallery";

type Profile = {
  name: string;
  avatar_url: string;
  bio: string;
}

export async function getServerSideProps() {
  const res = await fetch(process.env.SITE_URL + '/api/user/' + process.env.GH_USERNAME);
  const profile = await res.json();
  return { props: profile };
}

function Home(profile: Profile) {
  return (
    <div className="flex flex-col m-10">
      <Bio name={ profile.name } avatar_url={ profile.avatar_url } bio={ profile.bio }/>
      <Gallery/>
    </div>
  );
}

export default Home;