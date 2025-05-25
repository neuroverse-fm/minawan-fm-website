import { RADIO_TITLE } from "../consts";
import StyledLink from "./StyledLink";

const today = new Date();

export function Footer() {
  return (
    <footer class="bg-purple-600 text-white p-4 text-center">
      &copy; {today.getFullYear()} {RADIO_TITLE}. Site by{" "}
      <StyledLink href="https://ktrain5169.github.io/">HighKey</StyledLink>,
      radio stream by{" "}
      <StyledLink href="https://www.youtube.com/@jep0rox/">James</StyledLink>.
      Full attributions available{" "}
      <StyledLink href="/attributions">here</StyledLink>.
      <br />
      <br />
      Not associated with{" "}
      <StyledLink href="https://twitch.tv/cerbervt">Cerber</StyledLink>, just
      a couple Minawans.
    </footer>
  );
}

export default Footer;
