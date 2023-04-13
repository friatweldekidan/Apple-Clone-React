import React, { useEffect, useState } from "react";

// // creating a functional component
function YoutubeVideos() {
  const [videos, setVideos] = useState([]); // intializing using useSate empty array

  //only mount to fectch //using the lifecycle method
  useEffect(() => {
    //to request url in the code we use fetch()
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=8`
    )
      // fetch method returns a promise,we use then as call back function
      // the response is a json file , we change it to json() obhect
      .then((response) => response.json())
      .then((data) => {
        const videosData = data.items;
        setVideos(videosData); //storing the JSON object data inside the empty array//only we are intersted in itmes
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(videos);
  // returning in jsx form
  return (
    <div className="allVideoWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper">
              Latest Videos
              <br />
              <br />
            </div>
          </div>
          {videos?.map((singleVideo, i) => {
            //we used optional chaining ,if it didnt get the data, render the rest anyway
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-6 col-lg-3">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;

// In this code, we first declare a state variable videos to store the list of YouTube videos we will fetch from the YouTube data API. We then use the useEffect hook to fetch the videos from the API when the component mounts. You need to replace the YOUR_YOUTUBE_API_KEY with your own API key and APPLE_CHANNEL_ID with the channel ID of Apple's YouTube channel.

// Once we have the videos from the API, we map over the list of videos and render an iframe for each video, with the src attribute set to the URL of the video's embed code.

// You can then add this YouTubeVideos component below the Arcade and Apple Card section in your React - based Apple website replica.
// import React, { Component } from "react";
// import "./YoutubeVideos.css";

// class youtubeVideos extends Component {
//   constructor() {
//     super();
//     this.state = {
//       youTubeVideos: [],
//     };
//   }
//   componentDidMount() {
//     fetch(
//       "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBI6mub1Lr58LQX8D1LV5Tc8wCzd_2qEBo&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const youTubeVideos = data.items;
//         this.setState((state) => {
//           return {
//             youTubeVideos: youTubeVideos,
//           };
//         });
//       });
//   }

//   render() {
//     console.log(this.state.youTubeVideos);
//     return (
//       <div className="allVideoWrapper">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wrapper">
//                 Latest Videos
//                 <br />
//                 <br />
//               </div>
//             </div>
//             {this.state.youTubeVideos.map((singleVideo, i) => {
//               let vidId = singleVideo.id.videoId;
//               let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//               let videoWrapper = (
//                 <div key={i} className="col-sm-12 col-md-6 col-lg-4">
//                   <div className="singleVideoWrapper">
//                     <div className="videoThumbnail">
//                       <a href={vidLink} target="_blank">
//                         <img src={singleVideo.snippet.thumbnails.high.url} />
//                       </a>
//                     </div>
//                     <div className="videoInfoWrapper">
//                       <div className="videoTitle">
//                         <a href={vidLink} target="_blank">
//                           {singleVideo.snippet.title}
//                         </a>
//                       </div>
//                       <div className="videoDesc">
//                         {singleVideo.snippet.description}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//               return videoWrapper;
//             })}

//             {this.videoWrapper}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default youtubeVideos;
