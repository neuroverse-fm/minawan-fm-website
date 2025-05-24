import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE_PLAIN } from "../../consts";
import { StyledLink } from "../../components/StyledLink";
import Block from "../../components/Blocks";

const AttribsList: AttributionProps[] = [
  {
    section: "Radio host",
    list: [
      {
        name: "James",
        link: "https://youtube.com/@jeph0rix"
      }
    ]
  },
  {
    section: "Website infrastructure",
    list: [
      {
        name: "HighKey/KTrain",
        link: "https://ktrain5369.me/"
      }
    ]
  }
];

export function Attributions() {
  return (
    <Layout title="Attributions">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold text-center">Attributions</h1>
        <p class="mt-4 mb-5 text-xl text-center">
          Attributions for {RADIO_TITLE_PLAIN}
        </p>
        {/**<p class="text-md text-center">
          Please note these are attributions for the main {RADIO_TITLE_PLAIN} radio stuff
          only.
        </p>
        <p class="text-md text-center italic mb-5">
          For community projects, please see their blocks in the{" "}
          <StyledLink href="/community">Community page</StyledLink>.
        </p>*/}
        {AttribsList.map((attribution: AttributionProps) => (
          <Block title={attribution.section}>
            {attribution.list.map((helper: AttribsObjListProps) => (
              <p class="text-large">
                {helper.link !== null ? (
                  <StyledLink href={helper.link}>{helper.name}</StyledLink>
                ) : (
                  helper.name
                )}
              </p>
            ))}
          </Block>
        ))}
        <img src="/Minawan_gifs.gif" />
      </div>
    </Layout>
  );
}
