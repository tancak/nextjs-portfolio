import { Bio } from "../components/bio"

type Profile = {
  name: string;
  avatar_url: string;
  bio: string;
}

export async function getServerSideProps(context) {
  const res = await fetch(process.env.SITE_URL + '/api/user');
  const profile = await res.json();
  return { props: profile };
}

function Home(profile: Profile) {
  return (
    <Bio name={ profile.name } avatarURL={ profile.avatar_url } bio={ profile.bio }/>
  );
}

export default Home;