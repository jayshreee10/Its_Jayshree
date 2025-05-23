import path from 'path';
import { Fragment } from 'react';
// import { Suspense } from 'react';
import { readMDXFile } from '../blog/utils';
import { CustomMDX } from '../components/mdx';
// import SpotifySkeleton from '../components/spotify/spotify-skeleton';
// import TopTracks from '../components/spotify/top-tracks';
// import WakaStats from '../components/wakatime/wakastats';
// import WakatimeSkeleton from '../components/wakatime/wakatime-skeleton';
import GithubContributions from './github-contributions/github-contributions';
import Occupation from './occupation';

const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'About',
  description: 'About Jayshree',
};

export default function Page() {
  return (
    <Fragment>
      <Occupation />
      <CustomMDX source={content} />
      <GithubContributions />
      {/* <Suspense
        fallback={
          <Fragment>
            <WakatimeSkeleton />
            <SpotifySkeleton />
          </Fragment>
        }
      >
        <WakaStats />
        <TopTracks />
      </Suspense> */}
    </Fragment>
  );
}
