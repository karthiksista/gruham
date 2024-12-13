import React from 'react';

const SpotifyPlaylist = () => {
  return (
    <section className="bg-beige-medium py-10" id="spotify">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold text-beige-dark mb-6">
          Our Favorite Songs
        </h3>
        <p className="text-beige-dark mb-6">
          These songs represent moments we cherish together. Tune in and enjoy!
        </p>
        <div className="max-w-2xl mx-auto">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-lg border border-beige-dark"
            style={{ backgroundColor: '#EAD8C2' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SpotifyPlaylist;
