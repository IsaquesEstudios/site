import '../../app/marketing/social-media/style.css'


export default function PlayerBackground() {
  return (
      <div id="player-background">
        <video autoPlay muted className="w-[100vw] mobile:hidden">
          <source src="/social-media-is.mp4" type="video/mp4" />
        </video>
      </div>
  );
}
