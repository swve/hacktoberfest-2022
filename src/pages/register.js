import Head from 'next/head';

import Anchor from 'components/anchor';
import Divider from 'components/divider';
import Section from 'components/section';
import Loader from 'components/loader';
import Settings from 'components/profile/settings';

import useAuth from 'hooks/useAuth';

const Register = () => {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Register | Hacktoberfest 2022</title>
        <meta name="twitter:title" key="twitterTitle" content="Register | Hacktoberfest 2022" />
        <meta property="og:title" key="opengraphTitle" content="Register | Hacktoberfest 2022" />
      </Head>

      {auth.loading ? (
        <Section type="sub_content">
          <Divider />
          <Anchor href="#" />
          <Loader message=">> Loading /usr/lib/register..." />
        </Section>
      ) : (
        <Section type="sub_content">
          <Divider />
          <Anchor href="#" />
          <p>Registration</p>
          <p>Hello, {auth.user.name}</p>

          <Settings auth={auth} />
        </Section>
      )}

    </>
  );
};

export default Register;