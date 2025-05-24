import { Layout } from "../../layouts/Layout";
import { RADIO_TITLE } from "../../consts";
import { SocialButton } from "../../components/SocialButton";

const socials: socialProps[] = [
  {
    href: "https://www.youtube.com/@jep0rox/live",
    name: "YouTube (Livestream)",
    icon: "youtube",
    colours: "bg-red-500 hover:bg-red-700",
  }
];

export function Home() {
  return (
    <Layout title="Home">
      <div class="flex justify-center mt-4">
        <img src="/wide-tutel.png" class="max-h-48" />
      </div>
      <h1 class="text-3xl font-bold mt-4">{RADIO_TITLE}</h1>
      <p class="mt-4">The home of the Minawan's karaoke hangouts!</p>
      <div class="flex justify-center mt-4 space-x-4">
        {socials.map((social: socialProps) => (
          <SocialButton
            href={social.href}
            icon={social.icon}
            colours={social.colours}
          >
            {social.name}
          </SocialButton>
        ))}
      </div>
    </Layout>
  );
}
