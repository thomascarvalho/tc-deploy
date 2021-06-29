import { Fragment, h, STATIC_URL, tw, VNode } from "../deps.ts";

import { ToggleTheme } from "./toggle-theme.tsx";
import {
  Github,
  Linkedin,
  Location,
  Package,
  Twitch,
  Twitter,
  Youtube,
} from "./icons.tsx";
import { Card } from "./card.tsx";
import { buttonStyledClassName } from "./button.tsx";

const SocialLink = ({
  icon,
  href,
  last = false,
}: {
  icon: VNode;
  href: string;
  last?: boolean;
}) => {
  return (
    <a href={href} className={tw`${!last ? "mr-4 lg:mr-6" : ""}`}>
      {icon}
    </a>
  );
};

export const Profile = () => {
  return (
    <Card>
      <Fragment>
        <div className={tw`p-12 text-center flex-grow lg:text-left`}>
          <div
            className={tw
              `block lg:hidden rounded-full shadow-xl mx-auto h-48 w-48 bg-cover bg-center`}
            style={`background-image: url('${STATIC_URL}/avatar.jpg')`}
          >
            <div className={tw`absolute right-12 h-6 w-6`}>
              <ToggleTheme />
            </div>
          </div>

          <h1 className={tw`text-3xl font-bold pt-8 lg:pt-0`}>
            Thomas Carvalho
          </h1>
          <div
            className={tw
              `mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-yellow-300 dark:border-gray-600 opacity-25`}
          >
          </div>
          <p
            className={tw
              `pt-4 text-base font-bold flex items-center justify-center lg:justify-start`}
          >
            <Package className="h-4 mr-4" />
            Développeur Full-Stack
          </p>
          <p
            className={tw
              `pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start`}
          >
            <Location className="h-4 mr-4" />
            <a
              href="https://fr.wikipedia.org/wiki/Berry"
              className={tw`no-underline hover:underline mr-1`}
              target="_blank"
            >
              Berry, France
            </a>
            🐮 🚜
          </p>
          <p className={tw`pt-12 text-sm pb-6`}>
            Développeur curieux, passionné et agile.
          </p>

          <p className={tw`pt-6 text-sm pb-6`}>
            <a href="/blog" className={tw`${buttonStyledClassName}`}>
              Blog
            </a>
          </p>

          <div
            className={tw
              `mt-6 pb-4 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center`}
          >
            <SocialLink
              href="https://twitter.com/dikalikatao"
              icon={<Twitter />}
            />

            <SocialLink
              href="https://github.com/thomascarvalho"
              icon={<Github />}
            />

            <SocialLink
              href="https://www.youtube.com/channel/UCypBfIScmz6LbCG-wfv1O9Q"
              icon={<Youtube />}
            />

            <SocialLink href="https://twitch.tv/papacodeur" icon={<Twitch />} />
            <SocialLink
              href="https://www.linkedin.com/in/carvalhothomas"
              last
              icon={<Linkedin />}
            />
          </div>
        </div>
        <div
          className={tw`hidden w-full h-auto lg:flex flex-col lg:w-2/5 pt-6`}
        >
          <div
            className={tw
              `flex-grow flex justify-end items-center h-8 mr-8 mb-4`}
          >
            <ToggleTheme />
          </div>
          <div className={tw`flex justify-end`}>
            <img
              src={`${STATIC_URL}/avatar.jpg`}
              className={tw
                `rounded-none hidden lg:rounded-tl-lg lg:rounded-br-lg shadow-2xl lg:block`}
            />
          </div>
        </div>
      </Fragment>
    </Card>
  );
};
