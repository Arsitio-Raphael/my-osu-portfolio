import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, ArrowLeft,
  ChevronRight, Folder, Image as ImageIcon,
  Instagram, Facebook, Linkedin, Mail, ExternalLink
} from 'lucide-react';

// --- DATA: PORTFOLIO CONTENT ---
const PORTFOLIO_ITEMS = [
  { 
    id: 'qualification', 
    title: "Qualification", 
    artist: "Professional Profile", 
    diff: "Foundation", 
    stars: 1.5, 
    bg: "https://images.unsplash.com/photo-1456324504439-367cee13d824?w=1200", 
    stats: { "Openness": 7.4, "Extraversion": 8.2, "Agreeableness": 7.8, "Conscientious": 6.2 },
    tags: ["ANALYSIS", "VALUES", "VISION"],
    desc: "Educational background, personality insights, and core strengths.",
    content: {
      type: "text",
      heading: "Who Am I?",
      body: "I am a driven creative professional focused on visual storytelling and technical precision. My personality profile highlights high Openness and Extraversion, suggesting a natural aptitude for creative collaboration and exploring new ideas.",
      details: [
        { label: "Strength", value: "Rapid adaptability to new software" },
        { label: "Focus", value: "Visual Hierarchy & Composition" },
        { label: "Goal", value: "Mastering Full-Stack Development" }
      ]
    }
  },
  { 
    id: 'competence', 
    title: "Competence", 
    artist: "Photography & Edit", 
    diff: "Evolution", 
    stars: 3.0, 
    bg: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200", 
    stats: { "Shooting": 9, "Color Grade": 8.5, "Retouching": 9, "Events": 9.5 },
    tags: ["ADOBE", "LIGHTROOM", "EVENTS"],
    desc: "Technical proficiency in photography, post-processing, and event coverage.",
    content: {
      type: "text",
      heading: "Technical Proficiency",
      body: "My expertise lies in capturing the energy of live events and refining those moments through professional post-production. I bridge the gap between raw capture and cinematic final delivery.",
      details: [
        { label: "Software", value: "Adobe Photoshop, Lightroom, Premiere Pro" },
        { label: "Specialty", value: "High-Speed Event & Candid Photography" },
        { label: "Technique", value: "Advanced Color Grading & Retouching" }
      ]
    }
  },
  { 
    id: 'gallery', 
    title: "Gallery", 
    artist: "Event Coverage", 
    diff: "Master", 
    stars: 5.5, 
    bg: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=1200", 
    stats: { "Composition": 9, "Lighting": 8.5, "Editing": 9, "Story": 8 },
    tags: ["ALBUMS", "SHOTS", "MOMENTS"],
    desc: "A curated collection of event coverage sorted by albums.",
    content: {
      type: "gallery",
      albums: [
        {
          id: 1,
          title: "Cosplay Convention",
          artist: "Character Portraits",
          diff: "Insane",
          stars: 5.0,
          color: "#ff66aa", // Pink
          bg: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?w=1200",
          stats: { "Portrait": 10, "Color": 9.5, "Bokeh": 9, "Posing": 8 },
          tags: ["COSPLAY", "COSTUME", "VIBRANT"],
          images: [
            "https://images.unsplash.com/photo-1560252829-804f1aedf1be?w=800",
            "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800",
            "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=800"
          ]
        },
        {
          id: 2,
          title: "University Sports Fest",
          artist: "Action & Energy",
          diff: "Hard",
          stars: 4.5,
          color: "#00bfff", // Blue
          bg: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200",
          stats: { "Shutter": 10, "Focus": 9, "Timing": 10, "Angle": 8 },
          tags: ["SPORTS", "ACTION", "FAST"],
          images: [
            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
            "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800"
          ]
        },
        {
          id: 3,
          title: "Night Market Life",
          artist: "Street Photography",
          diff: "Expert",
          stars: 6.0,
          color: "#ffaa00", // Orange
          bg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200",
          stats: { "Low Light": 9, "ISO": 8, "Mood": 10, "Candid": 9 },
          tags: ["STREET", "NIGHT", "NEON"],
          images: [
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800",
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800"
          ]
        },
        {
          id: 4,
          title: "Local Rock Concert",
          artist: "Live Music",
          diff: "Extreme",
          stars: 6.5,
          color: "#cc33ff", // Purple
          bg: "https://images.unsplash.com/photo-1459749411177-3c975193246e?w=1200",
          stats: { "Audio": 0, "Visuals": 10, "Energy": 10, "Crowd": 9 },
          tags: ["MUSIC", "BAND", "STAGE"],
          images: [
            "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800",
            "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800",
            "https://images.unsplash.com/photo-1470229722913-7ea9959fa270?w=800"
          ]
        },
        {
          id: 5,
          title: "Nature & Landscapes",
          artist: "Scenic Views",
          diff: "Easy",
          stars: 2.5,
          color: "#66ff66", // Green
          bg: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200",
          stats: { "Peace": 10, "Green": 10, "Sky": 9, "Wide": 8 },
          tags: ["NATURE", "CALM", "TRAVEL"],
          images: [
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
          ]
        }
      ]
    }
  },
  { 
    id: 'contact', 
    title: "Socials", 
    artist: "Connect with Me", 
    diff: "Link", 
    stars: 7.0,
    color: "#ffdd00", // Gold
    bg: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1200", 
    stats: { "Response": 10, "Activity": 9, "Reach": 8, "Vibe": 10 },
    tags: ["DM", "EMAIL", "HIRE"],
    desc: "Reach out for collaborations, bookings, or just to say hi.",
    content: {
      type: "links",
      heading: "Let's Connect",
      body: "I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below.",
      links: [
        { label: "Instagram", value: "@raphael.ars", icon: Instagram, url: "https://instagram.com" },
        { label: "Facebook", value: "Raphael Arsitio", icon: Facebook, url: "https://facebook.com" },
        { label: "LinkedIn", value: "Raphael Arsitio", icon: Linkedin, url: "https://linkedin.com" },
        { label: "Email", value: "hello@raphael.com", icon: Mail, url: "mailto:hello@raphael.com" }
      ]
    }
  }
];

// --- UTILS ---
const StarRating = ({ stars }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: Math.floor(stars) }).map((_, i) => (
      <Star key={i} size={12} className="fill-[#ffdd00] text-[#ffdd00]" />
    ))}
    {stars % 1 !== 0 && <Star size={12} className="text-[#ffdd00]" style={{ clipPath: 'inset(0 50% 0 0)' }} />}
  </div>
);

// --- COMPONENT: OSU COOKIE (BIG "hop!") ---
const OsuCookie = ({ onClick, size = "large", pulsing = true, text = "hop!" }) => {
  return (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={pulsing ? { scale: [1, 1.05, 1] } : {}}
        transition={pulsing ? { repeat: Infinity, duration: 0.8 } : {}}
        className={`group relative rounded-full bg-[#ff66aa] flex items-center justify-center shadow-[0_0_60px_rgba(255,102,170,0.4)] border-4 border-white/20 select-none cursor-pointer z-50
          ${size === "large" ? "w-64 h-64 md:w-80 md:h-80" : "w-32 h-32 md:w-48 md:h-48"}
        `}
    >
        <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10 text-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
            <span className="text-white drop-shadow-lg" 
                  style={{ 
                    fontSize: size === 'large' ? '6rem' : '2.5rem',
                    fontFamily: 'sans-serif',
                    fontWeight: 900,
                    letterSpacing: '-0.05em',
                    fontStyle: 'italic'
                  }}>
                {text}
            </span>
            {size === "large" && (
                <div className="absolute -bottom-16 w-full text-center whitespace-nowrap">
                    <span className="text-white/80 font-black italic text-2xl tracking-widest uppercase animate-pulse">Click to Start</span>
                </div>
            )}
        </div>
    </motion.button>
  );
};

// --- COMPONENT: BEATMAP PANEL ---
const BeatmapPanel = ({ item, active, onClick }) => {
  const activeColor = item.color || '#ff66aa';
  
  return (
    <motion.div
      onClick={onClick}
      layout
      initial={false}
      animate={{ 
        x: active ? -40 : 0, 
        scale: active ? 1.05 : 1,
        opacity: active ? 1 : 0.7 
      }}
      whileHover={{ x: active ? -45 : -20, opacity: 1 }}
      className={`relative w-full md:w-[600px] h-28 md:h-36 mb-4 cursor-pointer select-none group`}
      style={{ marginLeft: 'auto', marginRight: active ? '40px' : '0px' }}
    >
        <div className={`w-full h-full relative overflow-hidden rounded-l-xl border-l-8 ${active ? 'border-white' : 'border-transparent'} shadow-xl transform skew-x-[-10deg] origin-bottom-right transition-colors duration-200`}
             style={{ backgroundColor: active ? '#2a2a2a' : 'rgba(0,0,0,0.6)' }}>
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                <img src={item.bg} className="w-full h-full object-cover transform skew-x-[10deg] scale-110" alt="bg" />
            </div>
            {active && (
                <div 
                    className="absolute inset-0" 
                    style={{ background: `linear-gradient(to right, ${activeColor}55, transparent)` }} 
                />
            )}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 transform skew-x-[10deg]">
                <h3 className={`font-black italic text-xl md:text-3xl uppercase truncate drop-shadow-lg ${active ? 'text-white' : 'text-gray-300'}`}>
                    {item.title}
                </h3>
                <div className="flex items-center justify-between mt-1">
                    <p className="text-sm md:text-base font-bold uppercase tracking-wider" style={{ color: active ? activeColor : '#ff66aa' }}>
                        {item.artist}
                    </p>
                    <div className="flex items-center gap-2 bg-black/50 px-2 py-1 rounded">
                        <Star size={14} className="text-[#ffdd00] fill-[#ffdd00]" />
                        <span className="text-[#ffdd00] font-bold text-sm">{item.stars.toFixed(2)}</span>
                    </div>
                </div>
                {active && item.tags && (
                    <div className="flex gap-2 mt-2">
                        {item.tags.map(tag => (
                            <span key={tag} className="text-[10px] bg-white/20 px-1 rounded text-white/90">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </motion.div>
  );
};

// --- COMPONENT: DETAIL PAGE ---
const DetailPage = ({ item, onBack }) => {
    const [albumIndex, setAlbumIndex] = useState(0);
    const [viewingAlbum, setViewingAlbum] = useState(false);
    
    const isGallery = item.content.type === 'gallery';
    const currentAlbum = isGallery ? item.content.albums[albumIndex] : null;
    const isLinks = item.content.type === 'links';
    
    // Dynamic BG Logic
    const activeBg = isGallery && !viewingAlbum ? currentAlbum.bg : item.bg;

    const handleBack = () => {
        if (viewingAlbum) {
            setViewingAlbum(false);
        } else {
            onBack();
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute inset-0 z-50 bg-black flex flex-col overflow-hidden"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeBg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${activeBg})` }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png')] opacity-20" style={{ backgroundSize: '4px 4px' }} />
            </div>

            {/* Header */}
            <div className="relative z-10 p-6 md:p-8 flex justify-between items-center border-b border-white/10 bg-black/40 backdrop-blur-md">
                <div>
                    <h1 className="text-3xl md:text-5xl font-black italic uppercase text-white tracking-tighter">
                        {isGallery && viewingAlbum ? currentAlbum.title : item.title}
                    </h1>
                    <p className="text-[#ff66aa] text-lg font-bold tracking-widest uppercase">
                        {isGallery && viewingAlbum ? "Viewing Photos" : item.artist}
                    </p>
                </div>
                <div className="hidden md:block text-right">
                    <div className="text-6xl font-black italic text-white/10">
                        {isGallery ? "GAL" : isLinks ? "SOC" : "INF"}
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="relative z-10 flex-1 flex flex-col md:flex-row overflow-hidden">
                
                {/* --- GALLERY MODE --- */}
                {isGallery && !viewingAlbum ? (
                    <>
                        {/* LEFT: Album Details */}
                        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-start">
                             <motion.div 
                                key={currentAlbum.id}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="bg-black/40 backdrop-blur-md p-6 rounded-xl border-l-4 w-full max-w-lg transform skew-x-[-5deg] mb-8"
                                style={{ borderColor: currentAlbum.color }}
                             >
                                <div className="transform skew-x-[5deg]">
                                    <h2 className="text-2xl font-bold mb-2" style={{ color: currentAlbum.color }}>{currentAlbum.title}</h2>
                                    <p className="text-white/70 italic mb-4">{currentAlbum.artist}</p>
                                    
                                    {Object.entries(currentAlbum.stats).map(([key, val], i) => (
                                        <div key={key} className="flex items-center gap-4 mb-1 text-xs font-bold text-white/80">
                                            <span className="w-20 uppercase truncate">{key}</span>
                                            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full" style={{ width: `${val * 10}%`, backgroundColor: i % 2 === 0 ? currentAlbum.color : '#fff' }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                             </motion.div>

                             <div className="flex gap-4 items-center group cursor-pointer" onClick={() => setViewingAlbum(true)}>
                                <OsuCookie size="small" pulsing={false} onClick={() => setViewingAlbum(true)} />
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black italic uppercase text-white group-hover:text-[#ff66aa] transition-colors">Open Folder</span>
                                    <span className="text-[#00bfff] font-bold tracking-widest uppercase text-sm">View {currentAlbum.images.length} Photos</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Album Wheel */}
                        <div className="w-full md:w-[45%] h-[40vh] md:h-auto relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
                            <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
                            
                            <div className="relative w-full h-full overflow-y-auto no-scrollbar py-20 px-4 md:px-0">
                                {item.content.albums.map((album, index) => (
                                    <BeatmapPanel 
                                        key={album.id} 
                                        item={album} 
                                        active={albumIndex === index} 
                                        onClick={() => setAlbumIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                ) : isGallery && viewingAlbum ? (
                    // --- IMAGE GRID ---
                    <div className="w-full h-full overflow-y-auto p-8 md:p-12">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {currentAlbum.images.map((img, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-square bg-gray-800 rounded-lg overflow-hidden border-2 border-white/10 hover:border-[#ff66aa] transition-colors group cursor-pointer"
                                >
                                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="work" />
                                </motion.div>
                            ))}
                         </div>
                    </div>
                ) : isLinks ? (
                    // --- SOCIALS PAGE ---
                    <div className="w-full h-full overflow-y-auto p-8 md:p-12 flex flex-col items-center">
                        <div className="max-w-4xl w-full">
                            <div className="bg-white/5 p-8 rounded-xl border border-white/10 mb-8 text-center">
                                <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
                                <p className="text-white/80 text-xl">{item.content.body}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {item.content.links.map((link, i) => (
                                    <motion.a 
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-[#ffdd00] hover:text-black transition-all flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            {/* Render Icon Dynamically */}
                                            {React.createElement(link.icon, { size: 32 })}
                                            <div>
                                                <h3 className="font-bold text-xl">{link.label}</h3>
                                                <p className="opacity-60 text-sm group-hover:opacity-100">{link.value}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    // --- TEXT CONTENT (Qual/Comp) ---
                    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12 overflow-y-auto">
                         <div className="space-y-8">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Overview</h2>
                                <p className="text-white/80 leading-relaxed text-lg">{item.content.body}</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h2 className="text-2xl font-bold text-[#00bfff] mb-4 border-b border-white/10 pb-2">Stats</h2>
                                {Object.entries(item.stats).map(([key, val], i) => (
                                    <div key={key} className="flex items-center gap-4 mb-3 text-sm font-bold text-white/80">
                                        <span className="w-32 uppercase truncate">{key}</span>
                                        <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${val * 10}%` }}
                                                transition={{ duration: 0.8, delay: 0.2 + (0.1 * i) }}
                                                className={`h-full ${i % 2 === 0 ? 'bg-[#ff66aa]' : 'bg-[#00bfff]'}`} 
                                            />
                                        </div>
                                        <span className="w-8 text-right text-lg">{val}</span>
                                    </div>
                                ))}
                            </div>
                         </div>
                         <div className="flex flex-col gap-4">
                            {item.content.details.map((detail, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="bg-gradient-to-r from-white/5 to-transparent p-6 rounded-xl border-l-4 border-[#ff66aa]"
                                >
                                    <h3 className="text-sm uppercase tracking-widest text-[#ff66aa] mb-1">{detail.label}</h3>
                                    <p className="text-xl font-bold text-white">{detail.value}</p>
                                </motion.div>
                            ))}
                         </div>
                    </div>
                )}
            </div>

            {/* Back Button */}
            <motion.button
                onClick={handleBack}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 left-8 z-50 bg-[#ff66aa] text-white px-12 py-4 rounded-xl transform -skew-x-12 border-4 border-white/20 shadow-lg flex items-center gap-4 group"
            >
                <ArrowLeft className="group-hover:-translate-x-2 transition-transform transform skew-x-12" />
                <span className="font-black italic text-2xl uppercase tracking-widest transform skew-x-12">
                    {viewingAlbum ? "Albums" : "Back"}
                </span>
            </motion.button>
        </motion.div>
    );
}

// --- MAIN APP ---
export default function App() {
  const [viewState, setViewState] = useState('intro'); // 'intro', 'menu', 'detail'
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeItem = PORTFOLIO_ITEMS[selectedIndex];
  
  // Background Parallax State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white font-sans overflow-hidden flex flex-col relative">
      
      {/* INTRO SCREEN */}
      <AnimatePresence>
        {viewState === 'intro' && (
            <motion.div 
                exit={{ opacity: 0, scale: 1.5, pointerEvents: 'none' }}
                transition={{ duration: 0.8 }}
                className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.5),black)]" />
                <OsuCookie size="large" onClick={() => setViewState('menu')} />
            </motion.div>
        )}
      </AnimatePresence>

      {/* DETAIL PAGE OVERLAY */}
      <AnimatePresence>
        {viewState === 'detail' && (
            <DetailPage item={activeItem} onBack={() => setViewState('menu')} />
        )}
      </AnimatePresence>

      {/* --- MENU UI --- */}
      <motion.div 
        className="flex-1 flex flex-col h-full relative"
        animate={{ filter: viewState === 'detail' ? 'blur(20px)' : 'blur(0px)', scale: viewState === 'detail' ? 0.95 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* DYNAMIC BACKGROUND */}
        <div className="absolute inset-0 z-0">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url(${activeItem.bg})`,
                        transform: `translate(${mousePos.x * -0.01}px, ${mousePos.y * -0.01}px)` 
                    }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png')] opacity-20" style={{ backgroundSize: '4px 4px' }} />
        </div>

        {/* TOP BAR */}
        <header className="relative z-20 flex justify-between items-center p-4 md:p-6 select-none pointer-events-none">
            <div className="flex items-center gap-4 pointer-events-auto">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-lg border-2 border-white/20 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter drop-shadow-md">Raphael Arsitio</h1>
                    <div className="flex gap-2 text-xs font-bold uppercase tracking-widest text-[#00bfff]">
                        <span className="bg-white/10 px-1 rounded">Portfolio 2025</span>
                    </div>
                </div>
            </div>
            
            <div className="hidden md:flex flex-col items-end pointer-events-auto">
                <p className="text-[#00bfff] font-bold text-sm mb-1 animate-pulse">Selected Section</p>
                <div className="text-xl font-black italic uppercase tracking-wider text-right">{activeItem.title}</div>
            </div>
        </header>

        {/* MAIN MENU AREA */}
        <main className="relative z-10 flex-1 flex flex-col md:flex-row overflow-hidden">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-start relative">
                <motion.div 
                    key={activeItem.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="mb-8 bg-black/40 backdrop-blur-md p-6 rounded-xl border-l-4 border-[#ff66aa] w-full max-w-lg transform skew-x-[-5deg]"
                >
                    <div className="transform skew-x-[5deg]">
                        <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-2">
                            <h2 className="text-2xl font-bold text-[#ff66aa]">{activeItem.title}</h2>
                            <div className="flex gap-1 text-[#ffdd00]">
                                <StarRating stars={activeItem.stars} />
                            </div>
                        </div>
                        <p className="text-white/70 mb-4 text-sm font-medium italic">"{activeItem.desc}"</p>
                    </div>
                </motion.div>

                <div className="flex gap-4 items-center">
                    <OsuCookie size="small" pulsing={false} onClick={() => setViewState('detail')} />
                    <div className="flex flex-col">
                        <span className="text-3xl font-black italic uppercase text-white">Open</span>
                        <span className="text-[#ff66aa] font-bold tracking-widest uppercase text-sm">View Details</span>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[45%] h-[40vh] md:h-auto relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
                
                <div className="relative w-full h-full overflow-y-auto no-scrollbar py-20 px-4 md:px-0">
                    {PORTFOLIO_ITEMS.map((item, index) => (
                        <BeatmapPanel 
                            key={item.id} 
                            item={item} 
                            active={selectedIndex === index} 
                            onClick={() => setSelectedIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </main>

        <footer className="fixed bottom-0 w-full h-10 bg-[#050505] border-t-4 border-[#ff66aa] z-30 flex items-center justify-between px-6 text-xs font-bold text-white/40 uppercase tracking-widest pointer-events-none">
            <div>Raphael Arsitio // Portfolio</div>
            <div className="flex gap-4">
                <span>Status: Online</span>
                <span>Mode: Professional</span>
            </div>
        </footer>
      </motion.div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}