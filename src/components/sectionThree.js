import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Masonry from 'react-masonry-css'

import './css/section-three.css'

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="heading">
        <h2>Meeting Makers In Real Life</h2>
        <p>Curated list of people i get to know on twitter & meeting first time in public</p>
      </div>

      <div className="testimonals">

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">

          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1122972228801269761" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1201047059903598592" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1203446506209955840" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1141383342270451712" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1192313995815866368" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1236259729153740800" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1117134043978461184" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1235299499540701184" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1235684835861000192" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1202624956023984129" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1236250100583657472" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1100437299278471168" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1100669201415434240" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1100506684198289408" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1201035585940410369" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1236160789490192385" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1234868853005418498" />
          </div>
          <div className="test-card">
            <TwitterTweetEmbed options={{ theme: 'dark' }} tweetId="1174192944154365953" />
          </div>

        </Masonry>


      </div>

      <div className="divider" style={{ border: "1px solid #1E1E1E", width: "90%", margin: "0 auto" }} />
    </div>
  )
}

export default SectionThree
