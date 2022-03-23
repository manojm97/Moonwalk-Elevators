/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/logo.jpg';
import logoWhite from 'assets/images/logo.jpg';

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={white ? logoWhite : logo} alt="moonwalk elevators logo" />
    </Link>
  );
}
