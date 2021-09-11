import {
  ReactElement,
  // , useEffect, useRef
} from 'react';
// import io from "socket.io-client";
// import Peer from "peerjs";

// import "./Call.css";

// const ENDPOINT = "http://127.0.0.1:4000";

const Call: React.FC = (): ReactElement => {
  //   let webcamButton: any;
  //   let callButton: any;
  //   let callInput: any;
  //   let answerButton: any;
  //   let hangupButton: any;

  //   const myStream = useRef<MediaStream | undefined>();
  //   const myID = useRef<string>("");
  //   const myVideo = useRef<HTMLVideoElement>(document.createElement("video"));
  //   const peerVideo = useRef<HTMLVideoElement>(document.createElement("video"));
  //   const socket = useRef(io(ENDPOINT));
  //   const myPeer = useRef(
  //     new Peer(undefined, {
  //       host: "/",
  //       port: 5000,
  //     })
  //   );

  //   useEffect((): void => {
  //     initializePeerConnection();
  //     initializeMyVideoAndConnectToPeer().then((myStream) => {
  //       listenToNewConnectedUsers(myStream);
  //     });
  //     // handleCloseConnection
  //   });

  //   function initializePeerConnection(): void {
  //     myPeer.current.on("open", (generatedId) => {
  //       const ROOM_ID = "10";
  //       myID.current = generatedId;
  //       JoinRoomByUserIdAndRoomId(ROOM_ID);
  //     });
  //   }

  //   function JoinRoomByUserIdAndRoomId(ROOM_ID: string): void {
  //     socket.current.emit("join-room", ROOM_ID, myID);
  //   }

  //   async function initializeMyVideoAndConnectToPeer() {
  //     try {
  //       const userMedia = await navigator.mediaDevices.getUserMedia({
  //         video: true,
  //         audio: true,
  //       });
  //       onSuccessGettingUserMedia(userMedia);
  //       return userMedia;
  //     } catch (error) {
  //       onRejectedGettingUserMedia(error);
  //       throw error;
  //     }
  //   }

  //   function onSuccessGettingUserMedia(myStream: MediaStream): void {
  //     addMyStreamToMyVideo(myStream);
  //     // listenToNewConnectedUsers(myStream);
  //   }

  //   function addMyStreamToMyVideo(stream: MediaStream): void {
  //     myStream.current = stream;
  //     myVideo.current.srcObject = stream;
  //     myVideo.current.addEventListener("loadedmetadata", () => {
  //       myVideo.current.play();
  //     });
  //   }

  //   function callOtherPeerAndGetMediaConnection(): Peer.MediaConnection {
  //     return myPeer.current.call(myID.current, myStream.current!);
  //   }

  //   function connectToNewPeer(mediaConnection: Peer.MediaConnection): void {
  //     mediaConnection.on("stream", addStreamToPeerVideo);
  //   }
  //   function onCloseConnection(): void {
  //     call.on("close", () => {
  //       peerVideo.current.remove();
  //     });
  //   }
  //   function onUserDisconnected(): void {
  //     socket.current.on("user-disconnected", (userId: any) => {
  //       if (peers[userId]) peers[userId].close();
  //     });
  //   }

  //   function onRejectedGettingUserMedia(rejectionReasons: any): void {
  //     console.log(rejectionReasons);
  //   }

  //   // function getOtherPeerStream(call:Peer.MediaConnection) :MediaStream {
  //   //   let otherPeerStream:MediaStream;
  //   //   call.on('stream', otherPeerStreamFromServer=>{otherPeerStream=otherPeerStreamFromServer});
  //   //   return otherPeerStream;
  //   // }

  //   function addStreamToPeerVideo(stream: MediaStream): void {
  //     peerVideo.current.srcObject = stream;
  //     peerVideo.current.addEventListener("loadedmetadata", () => {
  //       peerVideo.current.play();
  //     });
  //   }

  //   function listenToNewConnectedUsers(myStream: MediaStream): void {
  //     myPeer.current.on("call", (call) => {
  //       call.answer(myStream);
  //       call.on("stream", (userVideoStream) => {
  //         addStreamToPeerVideo(userVideoStream);
  //       });
  //     });
  //     // onCloseConnection();

  //     socket.current.on("user-connected", (newUserId) => {
  //       console.log("user-connected has id: ", newUserId);
  //       const mediaConnection: Peer.MediaConnection =
  //         callOtherPeerAndGetMediaConnection();
  //       connectToNewPeer(mediaConnection);
  //     });
  //   }

  //   const onClickWebcamButton = (): void => {};

  return (
    <div>
      {/* <h2>1. Start your Webcam</h2>
      <div className="videos mr-36">
        <span>
          <h3>Local Stream</h3>
          <video ref={myVideo} autoPlay playsInline muted></video>
        </span>
        <span>
          <h3>Remote Stream</h3>
          <video ref={peerVideo} autoPlay playsInline></video>
        </span>
      </div>

      <button ref={webcamButton} onClick={onClickWebcamButton}>
        Start webcam
      </button>
      <h2>2. Create a new Call</h2>
      <button ref={callButton} disabled>
        Create Call (offer)
      </button>

      <h2>3. Join a Call</h2>
      <p>Answer the call from a different browser window or device</p>

      <input ref={callInput} />
      <button ref={answerButton} disabled>
        Answer
      </button>

      <h2>4. Hangup</h2>

      <button ref={hangupButton} disabled>
        Hangup
      </button> */}
    </div>
  );
};

export default Call;
