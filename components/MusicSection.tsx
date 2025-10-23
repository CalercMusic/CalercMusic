import React from 'react';

const MusicSection: React.FC = () => {
  return (
    <section id="musicas" className="py-24 px-5 text-center bg-black">
      <h2 className="mb-12 uppercase text-4xl lg:text-5xl tracking-widest font-orbitron text-glow" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        OUÇA AGORA!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="h-[352px] overflow-hidden rounded-3xl shadow-lg shadow-black/50 isolate">
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/artist/6l329vrowVAqGi128rTu6d?utm_source=generator"
            className="w-full h-full block border-none rounded-3xl"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="h-[352px] overflow-hidden rounded-3xl shadow-lg shadow-black/50 isolate">
          <iframe
            className="w-full h-full block border-none rounded-3xl"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/joao-victor-cavalcante-819727275&color=%238B0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;